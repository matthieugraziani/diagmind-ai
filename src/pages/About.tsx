import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Watermark from "@/components/Watermark";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award, Building2, Handshake } from "lucide-react";

import teamSophie from "@/assets/team-sophie-martin.jpg";
import teamAlexandre from "@/assets/team-alexandre-dubois.jpg";
import teamMarie from "@/assets/team-marie-chen.jpg";
import teamThomas from "@/assets/team-thomas-leroy.jpg";

const About = () => {
  const team = [
    {
      name: "Dr. Sophie Martin",
      role: "CEO & Co-fondatrice",
      description: "Neurologue et chercheuse en IA médicale, 15 ans d'expérience en imagerie cérébrale.",
      expertise: ["Neurologie", "IA Médicale", "Recherche Clinique"],
      photo: teamSophie
    },
    {
      name: "Alexandre Dubois",
      role: "CTO & Co-fondateur",
      description: "Expert en deep learning et vision par ordinateur, ancien chercheur au CNRS.",
      expertise: ["Deep Learning", "Computer Vision", "MLOps"],
      photo: teamAlexandre
    },
    {
      name: "Dr. Marie Chen",
      role: "Directrice Scientifique",
      description: "Spécialiste en radiologie interventionnelle et validation clinique des algorithmes IA.",
      expertise: ["Radiologie", "Validation Clinique", "Protocoles"],
      photo: teamMarie
    },
    {
      name: "Thomas Leroy",
      role: "Directeur Produit",
      description: "10 ans d'expérience dans le développement de solutions healthtech.",
      expertise: ["Product Management", "UX/UI", "HealthTech"],
      photo: teamThomas
    }
  ];

  const milestones = [
    { year: "2020", event: "Fondation de DiagMind.AI" },
    { year: "2021", event: "Première validation clinique sur 10 000 images" },
    { year: "2022", event: "Obtention du marquage CE Classe IIa" },
    { year: "2023", event: "Partenariat avec 15 CHU en France" },
    { year: "2024", event: "Expansion européenne et 1 million d'analyses" }
  ];

  const partners = [
    "AP-HP Paris",
    "CHU de Lyon",
    "Institut Curie",
    "CNRS",
    "INSERM",
    "CEA"
  ];

  return (
    <div className="min-h-screen relative">
      <Watermark />
      <div className="relative z-10">
        <Header />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-primary-light/30 to-background">
            <div className="container mx-auto px-6 text-center">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-6">
                🏢 À Propos de DiagMind.AI
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Notre Mission : <span className="bg-gradient-hero bg-clip-text text-transparent">Sauver des Vies</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                DiagMind.AI est une startup française deep-tech spécialisée dans l'intelligence artificielle appliquée au diagnostic médical. Notre objectif : démocratiser l'accès à des diagnostics précoces et précis.
              </p>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-background border-border hover:shadow-medical transition-all duration-300">
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

                <Card className="bg-background border-border hover:shadow-medical transition-all duration-300">
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
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 bg-muted/20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-4">
                  <Users className="w-4 h-4 inline mr-2" />
                  Notre Équipe
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Des Experts Passionnés
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Notre équipe réunit des médecins, des chercheurs en IA et des ingénieurs pour créer des solutions qui font la différence.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((member, index) => (
                  <Card 
                    key={index} 
                    className="bg-background border-border hover:shadow-medical transition-all duration-300 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="text-center pb-2">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20 shadow-medical"
                      />
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <p className="text-sm text-primary font-medium">{member.role}</p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                      <div className="flex flex-wrap justify-center gap-1">
                        {member.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline / Milestones */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-4">
                  <Award className="w-4 h-4 inline mr-2" />
                  Notre Parcours
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  De la Recherche à l'Impact Clinique
                </h2>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent"></div>
                  
                  {milestones.map((milestone, index) => (
                    <div 
                      key={index} 
                      className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <Card className="bg-background border-border hover:shadow-medical transition-all duration-300 opacity-0 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                          <CardContent className="p-4">
                            <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                            <p className="text-muted-foreground mt-1">{milestone.event}</p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Partners */}
          <section className="py-16 bg-muted/20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-4">
                  <Handshake className="w-4 h-4 inline mr-2" />
                  Nos Partenaires
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Un Écosystème de Confiance
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nous collaborons avec les institutions de santé et de recherche les plus prestigieuses.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {partners.map((partner, index) => (
                  <Card 
                    key={index} 
                    className="bg-background border-border hover:shadow-medical transition-all duration-300 flex items-center justify-center p-6 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-center">
                      <Building2 className="h-10 w-10 text-primary mx-auto mb-2" />
                      <span className="text-sm font-medium text-foreground">{partner}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* R&D Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-4">
                  🔬 Recherche & Développement
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Innovation Continue
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-background border-border hover:shadow-medical transition-all duration-300">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">12+</div>
                    <div className="text-muted-foreground">Publications scientifiques</div>
                  </CardContent>
                </Card>
                <Card className="bg-background border-border hover:shadow-medical transition-all duration-300">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5</div>
                    <div className="text-muted-foreground">Brevets déposés</div>
                  </CardContent>
                </Card>
                <Card className="bg-background border-border hover:shadow-medical transition-all duration-300">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3</div>
                    <div className="text-muted-foreground">Projets ANR en cours</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;