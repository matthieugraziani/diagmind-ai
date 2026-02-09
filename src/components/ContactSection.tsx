import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Calendar, Brain, CheckCircle, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData, checkRateLimit, sanitizeHtml } from "@/lib/security";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    const rateLimit = checkRateLimit("contact-form", 3, 60000);
    if (!rateLimit.allowed) {
      toast({
        title: "Trop de tentatives",
        description: `Veuillez patienter ${Math.ceil(rateLimit.resetIn / 1000)} secondes avant de réessayer.`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    const sanitizedData = {
      firstName: sanitizeHtml(data.firstName),
      lastName: sanitizeHtml(data.lastName),
      email: data.email.trim().toLowerCase(),
      establishment: data.establishment ? sanitizeHtml(data.establishment) : undefined,
      role: data.role ? sanitizeHtml(data.role) : undefined,
      message: sanitizeHtml(data.message),
    };
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Form data is sanitized and ready for submission
    // In production, this would be sent to a backend API
    
    toast({
      title: "Demande envoyée !",
      description: "Notre équipe vous contactera dans les plus brefs délais.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.section 
      ref={ref}
      id="contact" 
      className="py-20 bg-gradient-to-br from-background via-primary-light/10 to-accent-light/5"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center space-y-4 mb-16"
          variants={headerVariants}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Prêt à Révolutionner Vos{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Diagnostics ?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contactez notre équipe d'experts pour découvrir comment DiagMind.AI peut transformer votre pratique médicale
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div variants={leftVariants}>
            <Card className="bg-background border-border shadow-medical">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground flex items-center space-x-2">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>Demander une Démo</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="flex items-center gap-1">
                        Prénom <span className="text-destructive">*</span>
                      </Label>
                      <Input 
                        id="firstName" 
                        placeholder="Votre prénom" 
                        {...register("firstName")}
                        className={errors.firstName ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="flex items-center gap-1">
                        Nom <span className="text-destructive">*</span>
                      </Label>
                      <Input 
                        id="lastName" 
                        placeholder="Votre nom" 
                        {...register("lastName")}
                        className={errors.lastName ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-1">
                      Email Professionnel <span className="text-destructive">*</span>
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="votre.email@hopital.fr" 
                      {...register("email")}
                      className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="establishment">Établissement</Label>
                    <Input 
                      id="establishment" 
                      placeholder="Nom de votre établissement médical" 
                      {...register("establishment")}
                      className={errors.establishment ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.establishment && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.establishment.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Fonction</Label>
                    <Input 
                      id="role" 
                      placeholder="Radiologue, Chef de service, etc." 
                      {...register("role")}
                      className={errors.role ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.role && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.role.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-1">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea 
                      id="message" 
                      placeholder="Décrivez vos besoins et questions concernant DiagMind.AI..."
                      className={`min-h-[100px] ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    variant="medical" 
                    size="lg" 
                    className="w-full shadow-hero"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Calendar className="h-5 w-5" />
                        Planifier une Démo Personnalisée
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                    <CheckCircle className="h-3 w-3 text-trust" />
                    Vos données sont protégées et chiffrées
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={rightVariants}
          >
            {/* Contact Details */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Informations de Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">contact@diagmind.ai</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Demo CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-gradient-hero text-primary-foreground border-0">
                <CardContent className="p-8 text-center space-y-4">
                  <Brain className="h-12 w-12 mx-auto animate-pulse-soft" />
                  <h3 className="text-xl font-semibold">Démo Immédiate</h3>
                  <p className="text-primary-foreground/90">
                    Testez DiagMind.AI dès maintenant avec notre démo interactive
                  </p>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-background text-primary hover:bg-background/90"
                    onClick={() => navigate('/detection-demo')}
                  >
                    Lancer la Démo
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="bg-background border-border text-center p-4">
                <div className="text-2xl font-bold text-trust">ISO</div>
                <div className="text-sm text-muted-foreground">27001 Certifié</div>
              </Card>
              <Card className="bg-background border-border text-center p-4">
                <div className="text-2xl font-bold text-accent">RGPD</div>
                <div className="text-sm text-muted-foreground">Conforme</div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
