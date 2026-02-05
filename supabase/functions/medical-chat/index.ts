import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Input validation schemas
const messageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().min(1, "Message content cannot be empty").max(4000, "Message content too long"),
});

const requestSchema = z.object({
  messages: z.array(messageSchema)
    .min(1, "At least one message required")
    .max(50, "Too many messages in context"),
  conversationId: z.string().uuid("Invalid conversation ID format"),
});

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse and validate input
    const rawBody = await req.json();
    
    let validatedData;
    try {
      validatedData = requestSchema.parse(rawBody);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        console.error("Validation error:", validationError.errors);
        return new Response(JSON.stringify({ 
          error: "Données invalides",
          details: validationError.errors.map(e => e.message)
        }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw validationError;
    }

    const { messages, conversationId } = validatedData;

    // Validate total content length to prevent abuse
    const totalChars = messages.reduce((sum, m) => sum + m.content.length, 0);
    if (totalChars > 50000) {
      return new Response(JSON.stringify({ 
        error: "Le contenu total des messages dépasse la limite autorisée" 
      }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Authorization required" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Medical chat request from user:", user.id);
    console.log("Conversation ID:", conversationId);
    console.log("Messages count:", messages.length);

    const systemPrompt = `Tu es DiagMind.AI, un assistant médical spécialisé en aide au diagnostic de tumeurs cérébrales par imagerie médicale. 

RÈGLES IMPORTANTES :
- Tu assistes les professionnels de santé (médecins, radiologues) dans l'analyse d'images médicales
- Tu fournis des informations éducatives et des pistes d'investigation, JAMAIS de diagnostic définitif
- Tu rappelles toujours que les décisions médicales finales doivent être prises par des professionnels qualifiés
- Tu utilises un langage médical précis mais accessible
- Tu demandes des précisions sur les images IRM/Scanner lorsque nécessaire
- Tu peux discuter de : types de tumeurs, techniques d'imagerie, protocoles diagnostiques, recherches récentes
- Tu refuses de donner des avis médicaux pour des patients sans supervision médicale

Ton objectif : être un outil d'aide à la décision fiable et responsable.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      console.error("AI gateway error:", response.status);
      const errorText = await response.text();
      console.error("Error details:", errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ 
          error: "Limite de requêtes atteinte. Veuillez réessayer dans quelques instants." 
        }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      if (response.status === 402) {
        return new Response(JSON.stringify({ 
          error: "Crédits IA insuffisants. Veuillez contacter l'administrateur." 
        }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ error: "Erreur du service IA" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response to client");
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
    
  } catch (error) {
    console.error("Medical chat error:", error);
    return new Response(
      JSON.stringify({ error: "Une erreur s'est produite" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
