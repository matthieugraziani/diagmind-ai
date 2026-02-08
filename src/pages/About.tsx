import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Watermark from "@/components/Watermark";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, CheckCircle2, Clock, Rocket, ArrowRight } from "lucide-react";
import matthieuPhoto from "@/assets/founder-matthieu-graziani.jpg";



// Animated Section wrapper component
const AnimatedSectionWrapper = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.section>
  );
};

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });

  const founder = {
    name: "Matthieu Graziani",
    role: "Fondateur & CEO",
    description: "Visionnaire et entrepreneur passionné par l'innovation en santé. Matthieu a fondé DiagMind.AI avec la conviction que l'IA peut révolutionner le diagnostic médical et sauver des vies.",
    expertise: ["Entrepreneuriat", "HealthTech", "Innovation", "Vision Stratégique"]
  };

  const upcomingTeam = [
    { role: "CTO", description: "Expert en deep learning et vision par ordinateur" },
    { role: "Directeur Scientifique", description: "Spécialiste en radiologie et validation clinique" },
    { role: "Directeur Produit", description: "Expert en développement de solutions healthtech" },
    { role: "Responsable Médical", description: "Médecin spécialisé en imagerie médicale" }
  ];

  const milestones = [
    { 
      year: "2026", 
      title: "Phase Pilote & Certifications",
      event: "CHU pilote, Marquage CE et Validation HAS",
      details: [
        "Lancement de l'étude pilote au CHU de Toulon avec 500 patients",
        "Obtention du marquage CE classe IIa (dispositif médical)",
        "Validation par la Haute Autorité de Santé (HAS)",
        "Certification ISO 27001 et conformité RGPD complète",
        "Publication des résultats cliniques dans des revues à comité de lecture"
      ],
      status: "upcoming"
    },
    { 
      year: "2027", 
      title: "Déploiement National",
      event: "Déploiement national et remboursement Sécurité Sociale",
      details: [
        "Extension à l'ensemble des 32 CHU français",
        "Inscription sur la Liste des Produits et Prestations Remboursables (LPPR)",
        "Remboursement par l'Assurance Maladie",
        "Formation de 2 000+ radiologues et neurologues",
        "Intégration aux systèmes d'information hospitaliers (SIH)"
      ],
      status: "upcoming"
    },
    { 
      year: "2028", 
      title: "Expansion Thérapeutique",
      event: "Extension à d'autres pathologies cérébrales",
      details: [
        "Détection de la maladie de Parkinson",
        "Analyse des AVC et lésions vasculaires cérébrales",
        "Détection précoce de la sclérose en plaques",
        "Algorithmes de suivi longitudinal des patients",
        "Partenariats avec 50+ centres de recherche européens"
      ],
      status: "upcoming"
    },
    { 
      year: "2030", 
      title: "Leader Mondial",
      event: "Expansion internationale",
      details: [
        "Déploiement dans 15+ pays européens",
        "Homologation FDA aux États-Unis",
        "Expansion au Canada, Japon et Australie",
        "1 million+ d'examens analysés par an",
        "Centre de R&D international à Singapour"
      ],
      status: "upcoming"
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
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
        delay: i * 0.1,
        ease: "easeOut" as const,
      },
    }),
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: "easeOut" as const,
      },
    }),
  };


  return (
    <div className="min-h-screen relative">
      <Watermark />
      <div className="relative z-10">
        <Header />
        <main className="pt-24">
          {/* Hero Section */}
          <motion.section 
            ref={heroRef}
            className="py-16 bg-gradient-to-b from-primary-light/30 to-background"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <div className="container mx-auto px-6 text-center">
              <motion.div variants={headerVariants}>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-6">
                  🏢 À Propos de DiagMind.AI
                </Badge>
              </motion.div>
              <motion.h1 
                className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
                variants={headerVariants}
              >
                Notre Mission : <span className="bg-gradient-hero bg-clip-text text-transparent">Sauver des Vies</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                variants={headerVariants}
              >
                DiagMind.AI est une startup française deep-tech spécialisée dans l'intelligence artificielle appliquée au diagnostic médical. Notre objectif : démocratiser l'accès à des diagnostics précoces et précis.
              </motion.p>
            </div>
          </motion.section>

          {/* Vision & Mission */}
          <AnimatedSectionWrapper className="py-16">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div custom={0} variants={cardVariants}>
                  <Card className="bg-background border-border hover:shadow-medical transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-accent-light rounded-xl flex items-center justify-center">
                          <Target className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Notre Vision</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Un monde où chaque patient bénéficie d'un diagnostic précoce et précis, indépendamment de sa localisation géographique. Nous croyons que l'IA peut être le grand égalisateur dans l'accès aux soins de santé de qualité.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div custom={1} variants={cardVariants}>
                  <Card className="bg-background border-border hover:shadow-medical transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-accent-light rounded-xl flex items-center justify-center">
                          <Lightbulb className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Notre Mission</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Développer des outils d'aide au diagnostic basés sur l'IA qui augmentent les capacités des professionnels de santé, réduisent les délais de diagnostic et améliorent les résultats pour les patients.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </AnimatedSectionWrapper>

          {/* Team Section */}
          <AnimatedSectionWrapper className="py-16 bg-muted/20">
            <div className="container mx-auto px-6">
              <motion.div className="text-center mb-12" variants={headerVariants}>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-4">
                  <Users className="w-4 h-4 inline mr-2" />
                  Notre Équipe
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Des Experts Passionnés
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Notre équipe se construit autour d'une vision commune : révolutionner le diagnostic médical grâce à l'IA.
                </p>
              </motion.div>

              {/* Founder Card */}
              <div className="max-w-2xl mx-auto mb-12">
                <motion.div custom={0} variants={cardVariants}>
                  <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:shadow-medical transition-all duration-300">
                    <CardHeader className="text-center pb-2">
                      <motion.div 
                        className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20 shadow-medical"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={matthieuPhoto} 
                          alt="Matthieu Graziani - Fondateur de DiagMind.AI" 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <Badge variant="default" className="mx-auto mb-2">Fondateur</Badge>
                      <CardTitle className="text-2xl">{founder.name}</CardTitle>
                      <p className="text-lg text-primary font-medium">{founder.role}</p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground mb-6 max-w-lg mx-auto">{founder.description}</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {founder.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Upcoming Team */}
              <motion.div className="text-center mb-8" variants={headerVariants}>
                <h3 className="text-xl font-semibold text-foreground mb-2">Équipe à venir</h3>
                <p className="text-sm text-muted-foreground mb-4">Nous recrutons activement pour constituer notre équipe de choc</p>
                <Button asChild variant="default" size="lg" className="group">
                  <Link to="/carrieres">
                    Voir toutes nos offres
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {upcomingTeam.map((position, index) => (
                  <motion.div 
                    key={index}
                    custom={index + 1}
                    variants={cardVariants}
                  >
                    <Card className="bg-background/50 border-dashed border-2 border-muted-foreground/30 hover:border-primary/50 transition-all duration-300 h-full">
                      <CardHeader className="text-center pb-2">
                        <motion.div 
                          className="w-20 h-20 rounded-full mx-auto mb-4 bg-muted/50 flex items-center justify-center border-2 border-dashed border-muted-foreground/30"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Users className="w-8 h-8 text-muted-foreground/50" />
                        </motion.div>
                        <CardTitle className="text-lg text-muted-foreground">{position.role}</CardTitle>
                        <Badge variant="outline" className="mx-auto mt-2 text-xs">Recrutement en cours</Badge>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground/70">{position.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSectionWrapper>

          {/* Vision 2026-2030 */}
          <AnimatedSectionWrapper className="py-16">
            <div className="container mx-auto px-6">
              <motion.div className="text-center mb-12" variants={headerVariants}>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-4">
                  <Rocket className="w-4 h-4 inline mr-2" />
                  Notre Vision 2026-2030
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Feuille de Route Stratégique
                </h2>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline line */}
                  <motion.div 
                    className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary/50"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ originY: 0 }}
                  />
                  
                  {milestones.map((milestone, index) => (
                    <motion.div 
                      key={index}
                      custom={index}
                      variants={timelineVariants}
                      className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                    >
                      <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                        <Card className="bg-background border-border hover:shadow-medical transition-all duration-300 overflow-hidden">
                          <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 border-b border-border">
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                              <Badge variant="outline" className="text-xs text-amber-600 border-amber-400 bg-amber-50 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                À venir
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                              <Rocket className="w-4 h-4 text-primary" />
                              {milestone.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">{milestone.event}</p>
                            <ul className="space-y-1.5">
                              {milestone.details.map((detail, idx) => (
                                <motion.li 
                                  key={idx} 
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.3 + idx * 0.1 }}
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{detail}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                      <motion.div 
                        className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg flex items-center justify-center"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSectionWrapper>

        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;
