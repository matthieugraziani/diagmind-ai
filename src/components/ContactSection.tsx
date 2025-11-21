mport { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Calendar, Brain } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-primary-light/10 to-accent-light/5">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Prêt à Révolutionner Vos{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Diagnostics ?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contactez notre équipe d'experts pour découvrir comment DiagMind.AI peut transformer votre pratique médicale
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-background border-border shadow-medical">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground flex items-center space-x-2">
                <Mail className="h-6 w-6 text-primary" />
                <span>Demander une Démo</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input id="firstName" placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input id="lastName" placeholder="Votre nom" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Professionnel</Label>
                <Input id="email" type="email" placeholder="votre.email@hopital.fr" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="establishment">Établissement</Label>
                <Input id="establishment" placeholder="Nom de votre établissement médical" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Fonction</Label>
                <Input id="role" placeholder="Radiologue, Chef de service, etc." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Décrivez vos besoins et questions concernant DiagMind.AI..."
                  className="min-h-[100px]"
                />
              </div>

              <Button variant="medical" size="lg" className="w-full shadow-hero">
                <Calendar className="h-5 w-5" />
                Planifier une Démo Personnalisée
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
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
            <Card className="bg-gradient-hero text-primary-foreground border-0">
              <CardContent className="p-8 text-center space-y-4">
                <Brain className="h-12 w-12 mx-auto animate-pulse-soft" />
                <h3 className="text-xl font-semibold">Démo Immédiate</h3>
                <p className="text-primary-foreground/90">
                  Testez DiagMind.AI dès maintenant avec notre démo interactive
                </p>
                <Button variant="secondary" size="lg" className="bg-background text-primary hover:bg-background/90">
                  Lancer la Démo
                </Button>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-background border-border text-center p-4">
                <div className="text-2xl font-bold text-trust">ISO</div>
                <div className="text-sm text-muted-foreground">27001 Certifié</div>
              </Card>
              <Card className="bg-background border-border text-center p-4">
                <div className="text-2xl font-bold text-accent">RGPD</div>
                <div className="text-sm text-muted-foreground">Conforme</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;