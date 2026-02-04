import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Zap, CheckCircle2, Timer, Activity, Brain, FileText } from "lucide-react";
import pacsInterfaceMockup from "@/assets/pacs-interface-mockup.jpg";

const HowItWorksSection = () => {
  const ref = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Parallax effect for PACS image
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const storySteps = [
    {
      icon: Monitor,
      number: "01",
      title: "Intégration Transparente",
      context: "CHU de Toulon, Service Radiologie",
      description: "Dr. Martin ouvre une IRM cérébrale dans son viewer PACS habituel. DiagMind est déjà intégré — aucune action supplémentaire requise.",
      highlight: "Zéro changement d'outil"
    },
    {
      icon: Zap,
      number: "02", 
      title: "Analyse en Temps Réel",
      context: "Pendant que le praticien consulte l'image",
      description: "En arrière-plan, notre IA analyse l'imagerie en quelques secondes. Ce qui prenait 18 minutes d'analyse manuelle est réduit à 3 minutes.",
      highlight: "6x plus rapide"
    },
    {
      icon: CheckCircle2,
      number: "03",
      title: "Résultats Intégrés",
      context: "Directement dans le rapport médical",
      description: "Les résultats apparaissent automatiquement : score de risque, zones annotées, recommandations. Le Dr. Martin valide et finalise son diagnostic.",
      highlight: "Intégration native"
    }
  ];

  const impactStats = [
    { icon: Timer, value: "6x", label: "Plus rapide" },
    { icon: Activity, value: "-15 min", label: "Par analyse" },
    { icon: Brain, value: "95%", label: "Précision" },
    { icon: FileText, value: "0", label: "Changement d'outil" }
  ];

  return (
    <motion.section 
      ref={ref}
      id="fonctionnement" 
      className="py-20 bg-muted/30"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        {/* Header with PACS Mockup */}
        <motion.div 
          className="text-center space-y-4 mb-12"
          variants={headerVariants}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            L'IA qui s'intègre à votre{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              workflow existant
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            DiagMind s'intègre directement dans les systèmes PACS des établissements de santé, 
            révolutionnant le quotidien des radiologues sans bouleverser leurs habitudes.
          </p>
          
          {/* PACS Interface Mockup with Parallax */}
          <motion.div 
            ref={imageRef}
            className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-border"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img 
              src={pacsInterfaceMockup} 
              alt="Interface PACS avec intégration DiagMind - analyse IRM cérébrale avec annotations IA" 
              className="w-full h-auto"
              style={{ y: imageY }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4">
              <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                <Monitor className="w-3 h-3 mr-1" />
                Interface PACS avec overlay DiagMind
              </Badge>
            </div>
          </motion.div>
        </motion.div>

        {/* Storytelling Timeline */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {storySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Card className="relative bg-background border-border hover:shadow-medical transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-muted/20">
                    {step.number}
                  </div>
                  
                  <CardContent className="p-6 space-y-4 relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-accent-light rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    {/* Context */}
                    <p className="text-xs text-muted-foreground italic">
                      {step.context}
                    </p>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Highlight Badge */}
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {step.highlight}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Impact Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
        >
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;
