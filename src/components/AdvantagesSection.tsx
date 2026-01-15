import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Clock, TrendingUp, Users, Award } from "lucide-react";

const AdvantagesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const advantages = [
    {
      icon: Zap,
      title: "Vitesse d'Analyse",
      description: "Analyse complète en moins de 30 secondes contre plusieurs heures traditionnellement",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Précision Exceptionnelle",
      description: "95% de précision grâce à nos algorithmes entrainés sur plus de 100,000 images médicales",
      color: "text-primary" 
    },
    {
      icon: Shield,
      title: "Sécurité & Conformité",
      description: "Conforme RGPD et certifications médicales. Données chiffrées et sécurisées",
      color: "text-trust"
    },
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "Service accessible en permanence pour vos urgences et analyses critiques",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Support Médical",
      description: "Aide à la décision pour les radiologues et amélioration du workflow médical",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Validé Cliniquement",
      description: "Testé et validé dans plusieurs centres hospitaliers avec des résultats probants",
      color: "text-trust"
    }
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

  const statsVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (  
    <motion.section 
      ref={ref}
      id="avantages" 
      className="py-20 bg-background"
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
            Pourquoi Choisir{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              DiagMind.AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une solution IA qui transforme la pratique radiologique avec des avantages concrets pour les professionnels de santé
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
              >
                <Card className="group bg-card-gradient border-border hover:shadow-medical transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-accent-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`h-6 w-6 ${advantage.color}`} />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {advantage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 bg-gradient-hero rounded-2xl p-8 text-center"
          variants={statsVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-foreground">95%</div>
              <div className="text-primary-foreground/80 text-sm">Précision diagnostique</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-foreground">30s</div>
              <div className="text-primary-foreground/80 text-sm">Temps d'analyse</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-foreground">100k+</div>
              <div className="text-primary-foreground/80 text-sm">Images analysées</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-foreground">24/7</div>
              <div className="text-primary-foreground/80 text-sm">Disponibilité</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvantagesSection;
