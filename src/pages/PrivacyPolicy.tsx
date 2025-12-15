import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Watermark from "@/components/Watermark";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Database, Lock, Eye, UserCheck, Clock, Globe, Mail } from "lucide-react";
import { RGPDBadge } from "@/components/CertificationBadges";

const PrivacyPolicy = () => {
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
                <Shield className="w-4 h-4 inline mr-2" />
                Protection des Données
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Politique de Confidentialité
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                DiagMind.AI s'engage à protéger vos données personnelles conformément au RGPD et à la réglementation sur les données de santé.
              </p>
              <div className="flex justify-center">
                <RGPDBadge className="w-20 h-20" />
              </div>
            </div>
          </section>

          <div className="container mx-auto px-6 py-12 max-w-4xl">
            <div className="space-y-8">
              {/* Responsable du traitement */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-accent-light rounded-lg flex items-center justify-center">
                      <UserCheck className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Responsable du Traitement</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">DiagMind.AI SAS</strong> est responsable du traitement de vos données personnelles.
                  </p>
                  <p><strong className="text-foreground">Délégué à la Protection des Données (DPO) :</strong> dpo@diagmind.ai</p>
                  <p><strong className="text-foreground">Adresse :</strong> 15 Rue de l'Innovation, 75013 Paris, France</p>
                </CardContent>
              </Card>

              {/* Données collectées */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-accent-light rounded-lg flex items-center justify-center">
                      <Database className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Données Collectées</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p><strong className="text-foreground">Données d'identification :</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Nom, prénom, adresse email professionnelle</li>
                    <li>Établissement de santé, spécialité médicale</li>
                    <li>Numéro RPPS (pour les professionnels de santé)</li>
                  </ul>
                  
                  <p><strong className="text-foreground">Données de santé (anonymisées) :</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Images médicales soumises pour analyse</li>
                    <li>Résultats d'analyse générés par notre IA</li>
                    <li>Métadonnées techniques des images (format, résolution)</li>
                  </ul>

                  <p><strong className="text-foreground">Données techniques :</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Adresse IP, type de navigateur</li>
                    <li>Données de connexion et d'utilisation du service</li>
                    <li>Cookies techniques et analytiques</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Finalités du traitement */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-accent-light rounded-lg flex items-center justify-center">
                      <Eye className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Finalités du Traitement</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>Vos données sont traitées pour les finalités suivantes :</p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-trust mt-0.5">✓</span>
                      <span><strong className="text-foreground">Fourniture du service :</strong> Analyse d'images médicales et génération de rapports d'aide au diagnostic</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-trust mt-0.5">✓</span>
                      <span><strong className="text-foreground">Gestion du compte :</strong> Création et gestion de votre espace utilisateur</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-trust mt-0.5">✓</span>
                      <span><strong className="text-foreground">Amélioration du service :</strong> Analyse statistique anonymisée pour améliorer nos algorithmes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-trust mt-0.5">✓</span>
                      <span><strong className="text-foreground">Obligations légales :</strong> Respect des obligations réglementaires (traçabilité dispositif médical)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Base légale */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Base Légale du Traitement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <ul className="space-y-3">
                    <li><strong className="text-foreground">Consentement explicite :</strong> Pour le traitement des données de santé (Article 9.2.a du RGPD)</li>
                    <li><strong className="text-foreground">Exécution du contrat :</strong> Pour la fourniture de nos services (Article 6.1.b du RGPD)</li>
                    <li><strong className="text-foreground">Intérêt légitime :</strong> Pour l'amélioration de nos services et la sécurité (Article 6.1.f du RGPD)</li>
                    <li><strong className="text-foreground">Obligation légale :</strong> Pour la traçabilité des dispositifs médicaux (Article 6.1.c du RGPD)</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Durée de conservation */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-accent-light rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Durée de Conservation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <ul className="space-y-3">
                    <li><strong className="text-foreground">Données de compte :</strong> Durée de la relation contractuelle + 3 ans</li>
                    <li><strong className="text-foreground">Images médicales :</strong> 30 jours après analyse (sauf demande de suppression immédiate)</li>
                    <li><strong className="text-foreground">Résultats d'analyse :</strong> 10 ans (conformément à la réglementation dispositifs médicaux)</li>
                    <li><strong className="text-foreground">Logs de connexion :</strong> 1 an</li>
                    <li><strong className="text-foreground">Données anonymisées :</strong> Conservation illimitée pour la recherche et l'amélioration des algorithmes</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Sécurité */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-accent-light rounded-lg flex items-center justify-center">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Sécurité des Données</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles :</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-trust mt-0.5">✓</span>
                      <span>Chiffrement AES-256 des données au repos et en transit (TLS 1.3)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-trust mt-0.5">✓</span>
                      <span>Hébergement HDS (Hébergeur de Données de Santé) certifié en France</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-trust mt-0.5">✓</span>
                      <span>Authentification multi-facteurs (MFA) obligatoire</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-trust mt-0.5">✓</span>
                      <span>Audits de sécurité réguliers et tests de pénétration</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-trust mt-0.5">✓</span>
                      <span>Certification ISO 27001 du système de management de la sécurité</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-trust mt-0.5">✓</span>
                      <span>Pseudonymisation et anonymisation des données de santé</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Transferts internationaux */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-accent-light rounded-lg flex items-center justify-center">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Transferts de Données</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Hébergement européen :</strong> Toutes vos données sont hébergées exclusivement dans l'Union Européenne (France).
                  </p>
                  <p>
                    Nous ne transférons pas vos données en dehors de l'Espace Économique Européen. En cas de nécessité future, tout transfert serait encadré par les garanties appropriées (Clauses Contractuelles Types de la Commission Européenne).
                  </p>
                </CardContent>
              </Card>

              {/* Vos droits */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Vos Droits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="space-y-3">
                    <li><strong className="text-foreground">Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                    <li><strong className="text-foreground">Droit de rectification :</strong> Corriger vos données inexactes ou incomplètes</li>
                    <li><strong className="text-foreground">Droit à l'effacement :</strong> Demander la suppression de vos données (« droit à l'oubli »)</li>
                    <li><strong className="text-foreground">Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                    <li><strong className="text-foreground">Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                    <li><strong className="text-foreground">Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                    <li><strong className="text-foreground">Droit de retirer votre consentement :</strong> À tout moment, sans affecter la licéité du traitement antérieur</li>
                  </ul>
                  <p className="mt-4">
                    Pour exercer vos droits, contactez notre DPO à : <strong className="text-foreground">dpo@diagmind.ai</strong>
                  </p>
                  <p>
                    Vous pouvez également introduire une réclamation auprès de la <strong className="text-foreground">CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) : www.cnil.fr
                  </p>
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
                  <p>Pour toute question concernant cette politique de confidentialité :</p>
                  <p><strong className="text-foreground">Email DPO :</strong> dpo@diagmind.ai</p>
                  <p><strong className="text-foreground">Email général :</strong> contact@diagmind.ai</p>
                  <p><strong className="text-foreground">Adresse :</strong> DiagMind.AI SAS - 15 Rue de l'Innovation, 75013 Paris, France</p>
                  <p className="text-sm italic mt-4">
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

export default PrivacyPolicy;