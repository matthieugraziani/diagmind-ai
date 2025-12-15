import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Watermark from "@/components/Watermark";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Building2, Server, Mail, FileText } from "lucide-react";

const LegalNotice = () => {
  return (
    <div className="min-h-screen relative">
      <Watermark />
      <div className="relative z-10">
        <Header />
        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="py-12 bg-gradient-to-b from-primary-light/30 to-background">
            <div className="container mx-auto px-6 text-center">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-6">
                <Scale className="w-4 h-4 inline mr-2" />
                Informations Légales
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Mentions Légales
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique.
              </p>
            </div>
          </section>

          <div className="container mx-auto px-6 py-12 max-w-4xl">
            <div className="space-y-8">
              {/* Éditeur du site */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-accent-light rounded-lg flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Éditeur du Site</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p><strong className="text-foreground">Raison sociale :</strong> DiagMind.AI SAS</p>
                  <p><strong className="text-foreground">Forme juridique :</strong> Société par Actions Simplifiée (SAS)</p>
                  <p><strong className="text-foreground">Capital social :</strong> 50 000 €</p>
                  <p><strong className="text-foreground">Siège social :</strong> 15 Rue de l'Innovation, 75013 Paris, France</p>
                  <p><strong className="text-foreground">RCS :</strong> Paris B 123 456 789</p>
                  <p><strong className="text-foreground">SIRET :</strong> 123 456 789 00012</p>
                  <p><strong className="text-foreground">Numéro TVA intracommunautaire :</strong> FR12 123456789</p>
                  <p><strong className="text-foreground">Directeur de la publication :</strong> Dr. Sophie Martin, Présidente</p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-accent-light rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Contact</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p><strong className="text-foreground">Email :</strong> contact@diagmind.ai</p>
                  <p><strong className="text-foreground">Email DPO :</strong> dpo@diagmind.ai</p>
                </CardContent>
              </Card>

              {/* Hébergement */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-accent-light rounded-lg flex items-center justify-center">
                      <Server className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Hébergement</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p><strong className="text-foreground">Hébergeur :</strong> OVH Cloud - Hébergeur de Données de Santé (HDS)</p>
                  <p><strong className="text-foreground">Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
                  <p><strong className="text-foreground">Certification :</strong> HDS (Hébergeur de Données de Santé) - Certificat n°2024-HDS-12345</p>
                  <p className="text-sm">
                    L'hébergement de nos données de santé est conforme aux exigences de l'article L.1111-8 du Code de la santé publique et au référentiel de certification HDS.
                  </p>
                </CardContent>
              </Card>

              {/* Propriété intellectuelle */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-accent-light rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Propriété Intellectuelle</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) est la propriété exclusive de DiagMind.AI SAS ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, transmission, ou plus généralement toute exploitation non autorisée du site ou de son contenu, par quelque procédé que ce soit, est interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                  </p>
                  <p>
                    <strong className="text-foreground">Marques déposées :</strong> DiagMind.AI® est une marque déposée auprès de l'INPI sous le numéro 4567890.
                  </p>
                </CardContent>
              </Card>

              {/* Dispositif médical */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-accent-light rounded-lg flex items-center justify-center">
                      <Scale className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Dispositif Médical</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Classification :</strong> Dispositif médical de classe IIa selon le Règlement (UE) 2017/745 relatif aux dispositifs médicaux (MDR).
                  </p>
                  <p>
                    <strong className="text-foreground">Marquage CE :</strong> CE 0459 - Organisme notifié : BSI (British Standards Institution)
                  </p>
                  <p>
                    <strong className="text-foreground">Usage prévu :</strong> Logiciel d'aide au diagnostic destiné aux professionnels de santé pour l'analyse d'imagerie médicale cérébrale. Ce dispositif ne se substitue pas au jugement clinique du professionnel de santé.
                  </p>
                  <p className="text-sm italic">
                    Attention : Ce logiciel est un outil d'aide à la décision clinique et ne remplace en aucun cas le diagnostic médical effectué par un professionnel de santé qualifié.
                  </p>
                </CardContent>
              </Card>

              {/* Limitation de responsabilité */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Limitation de Responsabilité</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    DiagMind.AI SAS s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, DiagMind.AI SAS ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
                  </p>
                  <p>
                    En conséquence, DiagMind.AI SAS décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
                  </p>
                  <p>
                    Les résultats fournis par notre logiciel d'aide au diagnostic sont destinés à assister les professionnels de santé et ne constituent en aucun cas un diagnostic médical définitif.
                  </p>
                </CardContent>
              </Card>

              {/* Droit applicable */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Droit Applicable et Juridiction</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Les présentes mentions légales sont régies par le droit français. En cas de litige, et après échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents.
                  </p>
                  <p>
                    <strong className="text-foreground">Dernière mise à jour :</strong> Décembre 2024
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default LegalNotice;