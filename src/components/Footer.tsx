import { Brain, Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-hero rounded-xl">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">DiagMind.AI</h3>
                <p className="text-sm text-background/70">Diagnostic IA Médical</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Révolutionnons ensemble le diagnostic médical grâce à l'intelligence artificielle de pointe.
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Solutions</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Analyse d'IRM</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Détection de Tumeurs</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Aide au Diagnostic</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Intégration PACS</a></li>
            </ul>
          </div>

          {/* À Propos */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">À Propos</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="/about" className="hover:text-background transition-colors">Notre Équipe</a></li>
              <li><a href="/about#research" className="hover:text-background transition-colors">Recherche & Développement</a></li>
              <li><a href="/about#milestones" className="hover:text-background transition-colors">Notre Parcours</a></li>
              <li><a href="/about#partners" className="hover:text-background transition-colors">Partenaires</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Contact</h4>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@diagmind.ai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4" />
                <a href="#" className="hover:text-background transition-colors">LinkedIn Fondateur</a>
              </div>
              <div className="flex items-center space-x-2">
                <Twitter className="h-4 w-4" />
                <a href="#" className="hover:text-background transition-colors">@DiagMindAI</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © 2024 DiagMind.AI. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm text-background/70 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-background transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-background transition-colors">Conditions d'Utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;