import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Server, FileCheck, AlertTriangle, CheckCircle } from "lucide-react";
import { SOC2Badge, PentestBadge, EncryptionBadge, ZeroTrustBadge, ANSSIBadge, MonitoringBadge } from "@/components/SecurityBadges";

const CybersecuritySection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const decorY1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const decorY2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const decorScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const securityFeatures = [
    {
      icon: Lock,
      title: "Chiffrement de Bout en Bout",
      description: "Toutes les données médicales sont chiffrées avec AES-256 pendant le transit et au repos",
      details: ["TLS 1.3", "Clés rotatives", "HSM certifié"],
    },
    {
      icon: Shield,
      title: "Architecture Zero Trust",
      description: "Aucune confiance implicite : chaque accès est vérifié, authentifié et autorisé",
      details: ["MFA obligatoire", "Sessions courtes", "Principe du moindre privilège"],
    },
    {
      icon: Eye,
      title: "Monitoring 24/7",
      description: "Centre opérationnel de sécurité (SOC) surveillant en permanence les menaces",
      details: ["SIEM avancé", "Détection d'anomalies", "Réponse automatisée"],
    },
    {
      icon: Server,
      title: "Infrastructure Sécurisée",
      description: "Hébergement sur des serveurs HDS agréés avec isolation des données",
      details: ["Datacenters Tier III+", "Redondance géographique", "Backup chiffrés"],
    },
  ];

  const complianceItems = [
    {
      badge: SOC2Badge,
      title: "SOC 2 Type II",
      description: "Audit annuel de nos contrôles de sécurité, disponibilité et confidentialité par un tiers indépendant.",
    },
    {
      badge: PentestBadge,
      title: "Tests d'Intrusion",
      description: "Pentests trimestriels réalisés par des experts certifiés (OSCP, CEH) avec rapport de correction.",
    },
    {
      badge: EncryptionBadge,
      title: "Chiffrement AES-256",
      description: "Standard de chiffrement militaire pour protéger toutes les données sensibles.",
    },
    {
      badge: ZeroTrustBadge,
      title: "Zero Trust",
      description: "Architecture ne faisant confiance à aucun utilisateur ou appareil par défaut.",
    },
    {
      badge: ANSSIBadge,
      title: "Recommandations ANSSI",
      description: "Conformité aux bonnes pratiques de l'Agence Nationale de la Sécurité des Systèmes d'Information.",
    },
    {
      badge: MonitoringBadge,
      title: "SOC 24/7",
      description: "Centre opérationnel de sécurité actif 24h/24, 7j/7 pour détecter et répondre aux menaces.",
    },
  ];

  const securityMeasures = [
    { label: "Validation des entrées", icon: CheckCircle },
    { label: "Protection CSRF", icon: CheckCircle },
    { label: "Headers de sécurité", icon: CheckCircle },
    { label: "Rate limiting", icon: CheckCircle },
    { label: "Sanitization XSS", icon: CheckCircle },
    { label: "Logs d'audit", icon: CheckCircle },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.08,
        ease: "easeOut" as const,
      },
    }),
  };

  const complianceVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3 + i * 0.1,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <motion.section 
      ref={ref}
      id="cybersecurite" 
      className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Decorative background with Parallax */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
          style={{ y: decorY1, scale: decorScale }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
          style={{ y: decorY2, scale: decorScale }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center space-y-4 mb-16"
          variants={headerVariants}
        >
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-4">
            🔐 Cybersécurité Avancée
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Protection de Niveau{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Hospitalier
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vos données médicales méritent le plus haut niveau de protection. Notre infrastructure de sécurité dépasse les standards du secteur de la santé.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
              >
                <Card className="bg-background/80 backdrop-blur-sm border-border hover:shadow-medical hover:border-primary/30 transition-all duration-300 group h-full">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {feature.details.map((detail, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-primary/5">
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications & Audits */}
        <div className="mb-16">
          <motion.div 
            className="text-center mb-10"
            variants={headerVariants}
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Certifications & Audits de Sécurité
            </h3>
            <p className="text-muted-foreground">
              Validations indépendantes de nos pratiques de sécurité
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceItems.map((item, index) => {
              const BadgeComponent = item.badge;
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={complianceVariants}
                >
                  <Card className="group bg-background/80 backdrop-blur-sm border-border hover:shadow-medical transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <BadgeComponent className="w-16 h-16 flex-shrink-0 transition-transform duration-500 group-hover:rotate-[360deg]" />
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">{item.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technical Security Measures */}
        <motion.div variants={headerVariants}>
          <Card className="bg-gradient-to-r from-background to-primary-light/10 border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center space-x-2">
                <FileCheck className="h-6 w-6 text-primary" />
                <span>Mesures Techniques de Protection</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {securityMeasures.map((measure, index) => {
                  const Icon = measure.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      className="flex flex-col items-center text-center p-4 rounded-lg bg-background/60 hover:bg-background transition-colors"
                    >
                      <Icon className="h-6 w-6 text-accent mb-2" />
                      <span className="text-sm font-medium text-foreground">{measure.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Security Notice */}
              <motion.div 
                className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20 flex items-start space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Signalement de vulnérabilité :</strong>{" "}
                  Si vous découvrez une faille de sécurité, contactez immédiatement notre équipe à{" "}
                  <a
                    href="mailto:security@diagmind.ai"
                    className="text-primary hover:underline font-medium"
                  >
                    security@diagmind.ai
                  </a>
                  . Nous proposons un programme de bug bounty pour les signalements responsables.
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/30">
            <Shield className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-foreground">
              0 incident de sécurité depuis le lancement
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CybersecuritySection;
