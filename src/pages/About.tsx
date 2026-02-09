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

  const recruitmentPlan = [
    { 
      year: "2026", 
      title: "Équipe Fondatrice",
      target: "10 collaborateurs",
      roles: [
        { title: "CTO", count: 1, description: "Expert deep learning & vision par ordinateur" },
        { title: "Ingénieurs IA", count: 3, description: "Développement des algorithmes de détection" },
        { title: "Directeur Scientifique", count: 1, description: "Validation clinique & publications" },
        { title: "Responsable Médical", count: 1, description: "Relations CHU & protocoles" },
        { title: "DevOps / Sécurité", count: 2, description: "Infrastructure cloud & conformité" },
        { title: "Product Manager", count: 1, description: "Développement produit healthtech" },
        { title: "Affaires Réglementaires", count: 1, description: "Marquage CE & certifications" }
      ]
    },
    { 
      year: "2027", 
      title: "Croissance Nationale",
      target: "25 collaborateurs",
      roles: [
        { title: "Ingénieurs IA", count: 5, description: "Scaling des modèles" },
        { title: "Customer Success", count: 3, description: "Accompagnement des CHU" },
        { title: "Formateurs Médicaux", count: 2, description: "Formation des radiologues" },
        { title: "Développeurs Full-Stack", count: 3, description: "Interface utilisateur & intégrations" },
        { title: "Commercial Santé", count: 2, description: "Développement commercial France" }
      ]
    },
    { 
      year: "2028", 
      title: "Expansion Produit",
      target: "50 collaborateurs",
      roles: [
        { title: "Équipe R&D", count: 10, description: "Nouvelles pathologies (Parkinson, AVC...)" },
        { title: "Data Scientists", count: 5, description: "Analyse de données cliniques" },
        { title: "Équipe Qualité", count: 3, description: "Assurance qualité & audits" },
        { title: "Support Technique", count: 4, description: "Support 24/7" },
        { title: "Marketing & Communication", count: 3, description: "Rayonnement européen" }
      ]
    },
    { 
      year: "2030", 
      title: "Leadership Mondial",
      target: "100+ collaborateurs",
      roles: [
        { title: "Équipes Internationales", count: 30, description: "Bureaux EU, US, Asie" },
        { title: "Équipe Réglementaire", count: 10, description: "FDA, EMA, certifications mondiales" },
        { title: "R&D Avancée", count: 15, description: "Centre de recherche Singapour" },
        { title: "Partenariats Stratégiques", count: 5, description: "Alliances industrielles" }
      ]
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
                        className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20 shadow-medical"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={matthieuPhoto} 
                          alt="Matthieu Graziani - Fondateur de DiagMind.AI" 
                          className="w-full h-full object-cover object-top scale-110"
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

          {/* Plan de Recrutement */}
          <AnimatedSectionWrapper className="py-16">
            <div className="container mx-auto px-6">
              <motion.div className="text-center mb-12" variants={headerVariants}>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-4">
                  <Users className="w-4 h-4 inline mr-2" />
                  Notre Vision 2026-2030
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Plan de Recrutement Stratégique
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Une croissance maîtrisée pour accompagner notre développement et notre expansion internationale.
                </p>
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
                  
                  {recruitmentPlan.map((phase, index) => (
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
                              <span className="text-2xl font-bold text-primary">{phase.year}</span>
                              <Badge variant="default" className="text-xs">
                                {phase.target}
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                              <Rocket className="w-4 h-4 text-primary" />
                              {phase.title}
                            </h4>
                            <ul className="space-y-2">
                              {phase.roles.map((role, idx) => (
                                <motion.li 
                                  key={idx} 
                                  className="flex items-start gap-2 text-xs"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.3 + idx * 0.1 }}
                                >
                                  <Badge variant="outline" className="text-xs shrink-0 min-w-[24px] justify-center">
                                    {role.count}
                                  </Badge>
                                  <div>
                                    <span className="font-medium text-foreground">{role.title}</span>
                                    <span className="text-muted-foreground"> - {role.description}</span>
                                  </div>
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
