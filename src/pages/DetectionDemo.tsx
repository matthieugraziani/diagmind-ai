import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, Upload, ArrowLeft, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function DetectionDemo() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Erreur",
          description: "Veuillez sélectionner un fichier image valide",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setAnalyzing(true);
    setResult(null);

    // Simulation de l'analyse IA (3 secondes)
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Résultat simulé
    const mockResult = {
      detected: Math.random() > 0.3,
      confidence: (Math.random() * 30 + 70).toFixed(1),
      tumorType: ['Glioblastome', 'Méningiome', 'Astrocytome', 'Aucune anomalie'][Math.floor(Math.random() * 4)],
      location: ['Lobe frontal', 'Lobe temporal', 'Lobe pariétal', 'Cervelet'][Math.floor(Math.random() * 4)],
      size: `${(Math.random() * 3 + 1).toFixed(1)} cm`,
    };

    setResult(mockResult);
    setAnalyzing(false);

    toast({
      title: mockResult.detected ? "Anomalie détectée" : "Analyse terminée",
      description: mockResult.detected 
        ? `Tumeur possible: ${mockResult.tumorType}` 
        : "Aucune anomalie significative détectée",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/20 to-accent-light/10">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Brain className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">DiagMind.AI</h1>
              <p className="text-sm text-muted-foreground">Démonstration de Détection</p>
            </div>
          </div>
          
          <Button variant="ghost" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Info Banner */}
          <Card className="p-6 bg-accent/10 border-accent">
            <div className="flex items-start gap-4">
              <Brain className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2">Démonstration IA - Détection de Tumeurs Cérébrales</h2>
                <p className="text-muted-foreground">
                  Cette démonstration utilise une simulation d'intelligence artificielle pour analyser des images d'IRM cérébrales. 
                  Les résultats sont fictifs et à but démonstratif uniquement. Ne pas utiliser à des fins médicales réelles.
                </p>
              </div>
            </div>
          </Card>

          {/* Upload Section */}
          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Télécharger une Image IRM</h3>
                <p className="text-muted-foreground">
                  Sélectionnez une image d'IRM cérébrale pour commencer l'analyse
                </p>
              </div>

              {!selectedImage ? (
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-xl p-12 cursor-pointer hover:border-primary transition-colors bg-muted/20">
                  <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                  <span className="text-lg font-medium mb-2">Cliquez pour télécharger</span>
                  <span className="text-sm text-muted-foreground">PNG, JPG, JPEG (max 10MB)</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="space-y-4">
                  <div className="relative rounded-xl overflow-hidden bg-muted">
                    <img
                      src={selectedImage}
                      alt="IRM téléchargée"
                      className="w-full h-96 object-contain"
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      onClick={handleAnalyze}
                      disabled={analyzing}
                      variant="medical"
                      className="flex-1"
                    >
                      {analyzing ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin mr-2" />
                          Analyse en cours...
                        </>
                      ) : (
                        <>
                          <Brain className="h-5 w-5 mr-2" />
                          Analyser avec l'IA
                        </>
                      )}
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedImage(null);
                        setResult(null);
                      }}
                    >
                      Nouvelle Image
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Results Section */}
          {result && (
            <Card className="p-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  {result.detected ? (
                    <AlertCircle className="h-8 w-8 text-orange-500" />
                  ) : (
                    <CheckCircle2 className="h-8 w-8 text-trust" />
                  )}
                  <div>
                    <h3 className="text-2xl font-bold">
                      {result.detected ? 'Anomalie Détectée' : 'Analyse Terminée'}
                    </h3>
                    <p className="text-muted-foreground">Résultats de l'analyse IA</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-primary-light/20">
                    <h4 className="font-semibold mb-2 text-sm uppercase text-muted-foreground">Type</h4>
                    <p className="text-2xl font-bold">{result.tumorType}</p>
                  </Card>

                  <Card className="p-6 bg-accent-light/20">
                    <h4 className="font-semibold mb-2 text-sm uppercase text-muted-foreground">Confiance</h4>
                    <p className="text-2xl font-bold">{result.confidence}%</p>
                  </Card>

                  {result.detected && (
                    <>
                      <Card className="p-6 bg-trust-light/20">
                        <h4 className="font-semibold mb-2 text-sm uppercase text-muted-foreground">Localisation</h4>
                        <p className="text-2xl font-bold">{result.location}</p>
                      </Card>

                      <Card className="p-6 bg-medical-light/20">
                        <h4 className="font-semibold mb-2 text-sm uppercase text-muted-foreground">Taille Estimée</h4>
                        <p className="text-2xl font-bold">{result.size}</p>
                      </Card>
                    </>
                  )}
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    ⚠️ <strong>Note importante :</strong> Ces résultats sont générés de manière aléatoire à des fins de démonstration uniquement. 
                    Pour un diagnostic médical réel, veuillez consulter un professionnel de santé qualifié.
                  </p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
