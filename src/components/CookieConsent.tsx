import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X, Settings, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card/95 backdrop-blur-lg border border-border rounded-2xl shadow-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
              <Cookie className="w-6 h-6" />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-foreground text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Respect de votre vie privée
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Nous utilisons des cookies pour améliorer votre expérience. Conformément au RGPD, 
                    vous pouvez choisir les cookies que vous acceptez.
                  </p>
                </div>
                <button 
                  onClick={acceptNecessary}
                  className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {showDetails && (
                <div className="space-y-3 pt-2 border-t border-border">
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-sm text-foreground">Cookies nécessaires</p>
                      <p className="text-xs text-muted-foreground">Essentiels au fonctionnement du site</p>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Toujours actifs</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-sm text-foreground">Cookies analytiques</p>
                      <p className="text-xs text-muted-foreground">Nous aident à améliorer le site</p>
                    </div>
                    <span className="text-xs text-muted-foreground">Optionnels</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-sm text-foreground">Cookies marketing</p>
                      <p className="text-xs text-muted-foreground">Personnalisation des contenus</p>
                    </div>
                    <span className="text-xs text-muted-foreground">Optionnels</span>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3">
                <Button 
                  onClick={acceptAll}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Tout accepter
                </Button>
                <Button 
                  onClick={acceptNecessary}
                  variant="outline"
                  className="border-border"
                >
                  Refuser les optionnels
                </Button>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  {showDetails ? "Masquer" : "Personnaliser"}
                </button>
                <Link 
                  to="/politique-confidentialite" 
                  className="text-sm text-primary hover:underline ml-auto"
                >
                  Politique de confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
