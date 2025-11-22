import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-brain-scan.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section id="accueil" className="pt-24 pb-16 bg-gradient-to-br from-background via-primary-light/20 to-accent-light/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                🧠 Intelligence Artificielle Médicale
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Révolutionnez le{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  diagnostic
                </span>{" "}
                des tumeurs cérébrales
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                DiagMind.AI utilise l'intelligence artificielle de pointe pour analyser les images médicales cérébrales avec une précision exceptionnelle, aidant les radiologues à détecter plus rapidement les anomalies.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Précision</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3x</div>
                <div className="text-sm text-muted-foreground">Plus rapide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Disponible</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="medical" 
                size="lg" 
                className="shadow-hero"
                onClick={() => navigate('/detection-demo')}
              >
                <Brain className="h-5 w-5" />
                Essayer la Démo
              </Button>
              <Button 
                variant="medical-outline" 
                size="lg"
                onClick={() => {
                  document.getElementById('technologie')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Découvrir la Technologie
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-trust" />
                <span className="text-sm text-muted-foreground">Certifié Médical</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">IA de Pointe</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Précision Clinique</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-hero">
              <img
                src={heroImage}
                alt="Analyse d'imagerie cérébrale par IA"
                className="w-full h-[500px] object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -right-4 bg-background p-4 rounded-xl shadow-medical border border-border animate-pulse-soft">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">AI</div>
                <div className="text-xs text-muted-foreground">Analyse Active</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background p-4 rounded-xl shadow-medical border border-border animate-pulse-soft">
              <div className="text-center">
                <div className="text-2xl font-bold text-trust">✓</div>
                <div className="text-xs text-muted-foreground">Détection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;