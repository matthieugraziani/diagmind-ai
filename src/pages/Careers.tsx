import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Users,
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Rocket,
  GraduationCap,
  Coffee,
  Laptop,
  TreePine,
  Brain,
  Code,
  Shield,
  Stethoscope,
  ChevronRight,
  Send,
  Building2,
  Euro,
  Monitor,
  Zap,
  ArrowRight,
  CheckCircle2,
  Timer,
  Activity,
} from "lucide-react";
import { toast } from "sonner";
import pacsInterfaceMockup from "@/assets/pacs-interface-mockup.jpg";

const Careers = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const jobsInView = useInView(jobsRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);

  const jobs = [
    {
      id: 1,
      title: "Ingénieur Machine Learning",
      department: "R&D IA",
      location: "Toulon, France",
      type: "CDI",
      experience: "3-5 ans",
      salary: "55-70k€",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      description: "Développer et optimiser nos modèles de deep learning pour la détection précoce d'Alzheimer à partir d'imagerie cérébrale.",
      responsibilities: [
        "Concevoir et entraîner des modèles CNN/Transformer pour l'analyse d'IRM",
        "Optimiser les performances et la précision des algorithmes de détection",
        "Collaborer avec l'équipe médicale pour valider les résultats cliniques",
        "Contribuer à la recherche et publier dans des conférences internationales",
      ],
      requirements: [
        "Master ou Doctorat en IA/ML ou domaine connexe",
        "Expérience avec PyTorch/TensorFlow et le traitement d'images médicales",
        "Connaissance des architectures CNN, Vision Transformers",
        "Publications scientifiques appréciées",
      ],
    },
    {
      id: 2,
      title: "Développeur Full-Stack Senior",
      department: "Ingénierie",
      location: "Toulon ou Remote",
      type: "CDI",
      experience: "5+ ans",
      salary: "50-65k€",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      description: "Construire la plateforme web sécurisée permettant aux professionnels de santé d'accéder à nos outils de diagnostic IA.",
      responsibilities: [
        "Développer des interfaces utilisateur intuitives avec React/TypeScript",
        "Concevoir des APIs robustes et sécurisées",
        "Assurer la scalabilité et la performance de la plateforme",
        "Mentorer les développeurs juniors de l'équipe",
      ],
      requirements: [
        "5+ ans d'expérience en développement web full-stack",
        "Maîtrise de React, TypeScript, Node.js",
        "Expérience avec les bases de données SQL/NoSQL",
        "Sensibilité aux problématiques de sécurité et RGPD",
      ],
    },
    {
      id: 3,
      title: "Responsable Affaires Réglementaires",
      department: "Qualité & Réglementation",
      location: "Toulon, France",
      type: "CDI",
      experience: "5-8 ans",
      salary: "60-80k€",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      description: "Piloter la stratégie réglementaire pour l'obtention du marquage CE et les homologations internationales.",
      responsibilities: [
        "Préparer les dossiers de marquage CE (MDR) et FDA",
        "Assurer la conformité aux normes ISO 13485, IEC 62304",
        "Gérer les relations avec les organismes notifiés",
        "Anticiper les évolutions réglementaires IA/santé",
      ],
      requirements: [
        "5+ ans en affaires réglementaires dispositifs médicaux",
        "Connaissance approfondie du règlement MDR et norme AI Act",
        "Expérience des dispositifs médicaux logiciels (SaMD)",
        "Anglais courant indispensable",
      ],
    },
    {
      id: 4,
      title: "Médecin Conseil - Neurologie",
      department: "Médical",
      location: "Toulon, France",
      type: "CDI ou Temps partiel",
      experience: "10+ ans",
      salary: "Sur profil",
      icon: Stethoscope,
      color: "from-amber-500 to-orange-500",
      description: "Accompagner le développement clinique de notre solution et assurer la validation médicale des algorithmes.",
      responsibilities: [
        "Superviser les études cliniques et validations",
        "Contribuer à l'interprétation des résultats diagnostiques",
        "Former les équipes aux enjeux médicaux",
        "Représenter DiagMind auprès des professionnels de santé",
      ],
      requirements: [
        "Docteur en médecine, spécialité neurologie",
        "10+ ans d'expérience clinique",
        "Intérêt pour l'innovation et les technologies IA",
        "Expérience en recherche clinique appréciée",
      ],
    },
    {
      id: 5,
      title: "Data Engineer",
      department: "Data",
      location: "Toulon ou Remote",
      type: "CDI",
      experience: "2-4 ans",
      salary: "45-55k€",
      icon: Laptop,
      color: "from-indigo-500 to-violet-500",
      description: "Construire et maintenir l'infrastructure data permettant l'entraînement de nos modèles IA à grande échelle.",
      responsibilities: [
        "Concevoir des pipelines de données robustes et scalables",
        "Gérer l'infrastructure cloud (GCP/AWS)",
        "Assurer la qualité et la traçabilité des données médicales",
        "Optimiser les processus ETL pour le ML",
      ],
      requirements: [
        "2+ ans en ingénierie data",
        "Maîtrise de Python, SQL, Spark",
        "Expérience cloud (GCP, AWS, ou Azure)",
        "Connaissance des bonnes pratiques MLOps appréciée",
      ],
    },
    {
      id: 6,
      title: "Stagiaire Recherche IA",
      department: "R&D IA",
      location: "Toulon, France",
      type: "Stage 6 mois",
      experience: "Bac+5",
      salary: "Gratification légale",
      icon: GraduationCap,
      color: "from-rose-500 to-red-500",
      description: "Participer aux travaux de recherche sur les nouvelles architectures de deep learning pour l'imagerie médicale.",
      responsibilities: [
        "Explorer les dernières avancées en vision par ordinateur",
        "Implémenter et tester de nouvelles approches",
        "Contribuer à la rédaction d'articles scientifiques",
        "Présenter vos résultats à l'équipe R&D",
      ],
      requirements: [
        "En cours de Master 2 ou école d'ingénieur",
        "Spécialisation IA/ML/Deep Learning",
        "Maîtrise de Python et PyTorch",
        "Curiosité et rigueur scientifique",
      ],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Mutuelle premium",
      description: "Couverture santé complète prise en charge à 100%",
    },
    {
      icon: Laptop,
      title: "Télétravail flexible",
      description: "Jusqu'à 3 jours par semaine en remote",
    },
    {
      icon: Coffee,
      title: "Bureaux modernes",
      description: "Espaces de travail inspirants à Toulon",
    },
    {
      icon: TreePine,
      title: "RTT & Congés",
      description: "12 RTT + 25 jours de congés payés",
    },
    {
      icon: GraduationCap,
      title: "Formation continue",
      description: "Budget formation et conférences annuel",
    },
    {
      icon: Rocket,
      title: "BSPCE",
      description: "Participation au capital de la startup",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Candidature envoyée avec succès !", {
      description: "Nous reviendrons vers vous sous 48h.",
    });
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="pt-32 pb-20 bg-gradient-to-b from-primary/5 via-background to-background relative overflow-hidden"
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div className="text-center space-y-6 max-w-4xl mx-auto" variants={itemVariants}>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Users className="w-4 h-4 inline mr-2" />
              Rejoignez l'aventure DiagMind
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Construisez le futur de la{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                médecine IA
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous recherchons des talents passionnés pour révolutionner le diagnostic
              précoce des maladies neurodégénératives grâce à l'intelligence artificielle.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Badge variant="outline" className="px-3 py-1.5">
                <Building2 className="w-4 h-4 mr-2" />
                {jobs.length} postes ouverts
              </Badge>
              <Badge variant="outline" className="px-3 py-1.5">
                <MapPin className="w-4 h-4 mr-2" />
                Toulon & Remote
              </Badge>
              <Badge variant="outline" className="px-3 py-1.5">
                <Rocket className="w-4 h-4 mr-2" />
                Startup en croissance
              </Badge>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* PACS Integration Storytelling Section */}
      <motion.section
        ref={storyRef}
        className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
        initial="hidden"
        animate={storyInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-1/4 right-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-4">
              <Monitor className="w-4 h-4 inline mr-2" />
              Notre Vision Produit
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              L'IA qui s'intègre à votre{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">workflow existant</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              DiagMind s'intègre directement dans les systèmes PACS des établissements de santé, 
              révolutionnant le quotidien des radiologues sans bouleverser leurs habitudes.
            </p>
            
            {/* PACS Interface Mockup */}
            <motion.div 
              className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-border"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={pacsInterfaceMockup} 
                alt="Interface PACS avec intégration DiagMind - analyse IRM cérébrale avec annotations IA" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                  <Monitor className="w-3 h-3 mr-1" />
                  Interface PACS avec overlay DiagMind
                </Badge>
              </div>
            </motion.div>
          </motion.div>

          {/* Storytelling Timeline */}
          <div className="max-w-5xl mx-auto">
            {/* Step 1 */}
            <motion.div 
              className="flex flex-col lg:flex-row items-center gap-8 mb-16"
              variants={itemVariants}
            >
              <div className="flex-1 order-2 lg:order-1">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Le radiologue ouvre un examen IRM</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    7h30, CHU de Toulon. Le Dr. Martin commence sa journée. Elle ouvre son viewer PACS habituel 
                    et charge une IRM cérébrale. Rien ne change dans son interface — elle travaille comme d'habitude.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Monitor className="w-4 h-4" />
                    <span>Interface PACS inchangée</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 order-1 lg:order-2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Connector Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/50 to-primary/20" style={{ marginTop: "-3rem" }} />

            {/* Step 2 */}
            <motion.div 
              className="flex flex-col lg:flex-row items-center gap-8 mb-16"
              variants={itemVariants}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">DiagMind analyse en temps réel</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    En arrière-plan, notre IA analyse automatiquement les coupes cérébrales. En quelques secondes, 
                    elle détecte des patterns invisibles à l'œil nu, signes précoces de pathologies neurodégénératives.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Timer className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">Analyse en 3 min</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Brain className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">IA deep learning</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="flex flex-col lg:flex-row items-center gap-8 mb-16"
              variants={itemVariants}
            >
              <div className="flex-1 order-2 lg:order-1">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Résultats intégrés au rapport</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Les résultats apparaissent directement dans le viewer : zones d'intérêt surlignées, 
                    score de risque calculé, rapport pré-rempli. Le Dr. Martin n'a plus qu'à valider et affiner son diagnostic.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="bg-primary/5">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Zones annotées
                    </Badge>
                    <Badge variant="outline" className="bg-primary/5">
                      <Activity className="w-3 h-3 mr-1" />
                      Score de risque
                    </Badge>
                    <Badge variant="outline" className="bg-primary/5">
                      <ArrowRight className="w-3 h-3 mr-1" />
                      Rapport généré
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 order-1 lg:order-2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Impact Stats */}
            <motion.div 
              className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-foreground text-center mb-8">
                L'impact au quotidien
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                    6x
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Plus d'examens analysés<br />par radiologue/jour
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                    -15 min
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Temps gagné<br />par analyse
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                    0
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Changement d'outil<br />pour le praticien
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              className="text-center mt-12"
              variants={itemVariants}
            >
              <p className="text-lg text-muted-foreground mb-4">
                Vous voulez contribuer à cette révolution ?
              </p>
              <Button size="lg" className="group" onClick={() => document.getElementById('jobs-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Découvrir nos postes
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        className="py-16 bg-muted/30"
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Pourquoi nous rejoindre ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des avantages pensés pour votre bien-être et votre épanouissement professionnel
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-background rounded-xl p-4 text-center border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{benefit.title}</h3>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Jobs Section */}
      <motion.section
        id="jobs-section"
        ref={jobsRef}
        className="py-20"
        initial="hidden"
        animate={jobsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Nos opportunités
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les postes ouverts et trouvez votre place dans notre équipe
            </p>
          </motion.div>

          <motion.div className="space-y-4 max-w-4xl mx-auto" variants={containerVariants}>
            {jobs.map((job) => {
              const Icon = job.icon;
              return (
                <motion.div key={job.id} variants={itemVariants}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/30 group">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        <div className="flex-grow">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="font-bold text-lg text-foreground">{job.title}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {job.department}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {job.description}
                          </p>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.experience}
                            </span>
                            <span className="flex items-center gap-1">
                              <Euro className="w-4 h-4" />
                              {job.salary}
                            </span>
                          </div>
                        </div>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              className="flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground"
                              variant="outline"
                              onClick={() => setSelectedJob(job)}
                            >
                              Voir l'offre
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <div className="flex items-center gap-3 mb-2">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center`}>
                                  <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <DialogTitle className="text-xl">{job.title}</DialogTitle>
                                  <DialogDescription className="flex items-center gap-2">
                                    <Badge variant="secondary">{job.department}</Badge>
                                    <span>{job.location}</span>
                                  </DialogDescription>
                                </div>
                              </div>
                            </DialogHeader>

                            <div className="space-y-6 py-4">
                              <div className="flex flex-wrap gap-3">
                                <Badge variant="outline">
                                  <Briefcase className="w-3 h-3 mr-1" />
                                  {job.type}
                                </Badge>
                                <Badge variant="outline">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {job.experience}
                                </Badge>
                                <Badge variant="outline">
                                  <Euro className="w-3 h-3 mr-1" />
                                  {job.salary}
                                </Badge>
                              </div>

                              <p className="text-muted-foreground">{job.description}</p>

                              <div>
                                <h4 className="font-semibold text-foreground mb-3">Responsabilités</h4>
                                <ul className="space-y-2">
                                  {job.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                      {resp}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-semibold text-foreground mb-3">Profil recherché</h4>
                                <ul className="space-y-2">
                                  {job.requirements.map((req, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="border-t border-border pt-6">
                                <h4 className="font-semibold text-foreground mb-4">Postuler à cette offre</h4>
                                <form onSubmit={handleApply} className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="firstName">Prénom</Label>
                                      <Input id="firstName" placeholder="Jean" required />
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor="lastName">Nom</Label>
                                      <Input id="lastName" placeholder="Dupont" required />
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="jean.dupont@email.com" required />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="linkedin">LinkedIn (optionnel)</Label>
                                    <Input id="linkedin" placeholder="https://linkedin.com/in/..." />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="message">Message de motivation</Label>
                                    <Textarea
                                      id="message"
                                      placeholder="Présentez-vous brièvement et expliquez pourquoi ce poste vous intéresse..."
                                      className="min-h-[100px]"
                                      required
                                    />
                                  </div>
                                  <Button type="submit" className="w-full">
                                    <Send className="w-4 h-4 mr-2" />
                                    Envoyer ma candidature
                                  </Button>
                                </form>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Vous ne trouvez pas le poste idéal ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Envoyez-nous une candidature spontanée, nous sommes toujours à la recherche de talents exceptionnels.
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:careers@diagmind.ai">
              <Send className="w-4 h-4 mr-2" />
              Candidature spontanée
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
