import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Watermark from "@/components/Watermark";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Brain, Shield, Building2, CreditCard, FileCheck } from "lucide-react";

const FAQ = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqCategories = [
    {
      icon: Brain,
      title: "Technologie & Fonctionnement",
      questions: [
        {
          question: "Comment fonctionne l'IA de DiagMind.AI ?",
          answer: "DiagMind.AI utilise des réseaux de neurones convolutionnels (CNN) de dernière génération, entraînés sur des millions d'images médicales annotées par des experts. Notre algorithme analyse les IRM cérébrales pour détecter les anomalies avec une précision supérieure à 95%, en identifiant les zones suspectes et en fournissant un score de confiance pour chaque détection."
        },
        {
          question: "Quels types d'images médicales sont pris en charge ?",
          answer: "Notre plateforme prend en charge les IRM cérébrales dans les formats DICOM standard. Nous analysons les séquences T1, T2, FLAIR et T1 avec injection de gadolinium. D'autres modalités d'imagerie seront ajoutées progressivement dans les prochaines versions."
        },
        {
          question: "Quelle est la précision de détection de l'algorithme ?",
          answer: "Nos études cliniques démontrent une sensibilité de 95.2% et une spécificité de 97.8% pour la détection des tumeurs cérébrales. Ces performances ont été validées sur plus de 100 000 images en conditions cliniques réelles, en collaboration avec 15 CHU français."
        },
        {
          question: "L'IA peut-elle remplacer un radiologue ?",
          answer: "Non, DiagMind.AI est conçu comme un outil d'aide à la décision pour les professionnels de santé. Notre IA augmente les capacités des radiologues en leur fournissant une seconde lecture rapide et objective, mais le diagnostic final reste toujours de la responsabilité du médecin."
        }
      ]
    },
    {
      icon: Shield,
      title: "Sécurité & Confidentialité",
      questions: [
        {
          question: "Comment mes données médicales sont-elles protégées ?",
          answer: "Toutes les données sont chiffrées avec l'algorithme AES-256 pendant le transit et au repos. Nous utilisons une architecture Zero Trust, des serveurs HDS (Hébergement de Données de Santé) agréés en France, et nos systèmes sont surveillés 24/7 par notre SOC (Security Operations Center)."
        },
        {
          question: "DiagMind.AI est-il conforme au RGPD ?",
          answer: "Oui, nous sommes entièrement conformes au RGPD. Les données sont anonymisées avant analyse, vous disposez d'un droit d'accès, de rectification et d'effacement de vos données. Nous ne conservons aucune donnée personnelle au-delà de la durée nécessaire au traitement."
        },
        {
          question: "Où sont hébergées les données ?",
          answer: "Toutes les données sont hébergées exclusivement en France, sur des serveurs certifiés HDS (Hébergement de Données de Santé) et ISO 27001. Nous n'utilisons aucun service cloud américain pour le traitement des données médicales sensibles."
        }
      ]
    },
    {
      icon: FileCheck,
      title: "Certifications & Réglementation",
      questions: [
        {
          question: "DiagMind.AI dispose-t-il du marquage CE ?",
          answer: "Oui, notre solution est certifiée dispositif médical de classe IIa selon le règlement européen MDR 2017/745. Ce marquage CE garantit la conformité aux exigences essentielles de sécurité et de performance pour les dispositifs médicaux."
        },
        {
          question: "Qu'est-ce que la validation HAS ?",
          answer: "La Haute Autorité de Santé (HAS) évalue les technologies de santé pour déterminer leur utilité clinique et leur éligibilité au remboursement. DiagMind.AI a obtenu un avis favorable permettant la prise en charge par l'Assurance Maladie."
        },
        {
          question: "Quelles sont les certifications de sécurité ?",
          answer: "Nous disposons des certifications ISO 27001 (management de la sécurité de l'information), SOC 2 Type II, et nous suivons les recommandations de l'ANSSI. Des tests d'intrusion sont réalisés trimestriellement par des auditeurs externes certifiés."
        }
      ]
    },
    {
      icon: Building2,
      title: "Intégration & Déploiement",
      questions: [
        {
          question: "Comment intégrer DiagMind.AI dans mon établissement ?",
          answer: "Notre solution s'intègre facilement avec les systèmes PACS existants via des connecteurs standards (DICOM, HL7, FHIR). Notre équipe technique accompagne chaque établissement dans le déploiement, la formation des utilisateurs et la mise en production."
        },
        {
          question: "Quelle infrastructure est nécessaire ?",
          answer: "DiagMind.AI fonctionne en mode SaaS (Software as a Service). Aucune infrastructure spécifique n'est requise côté établissement, seule une connexion internet sécurisée est nécessaire. Les analyses sont effectuées sur nos serveurs haute performance."
        },
        {
          question: "Quel est le temps de traitement d'une analyse ?",
          answer: "Une analyse complète d'IRM cérébrale prend moins de 30 secondes, incluant le chargement de l'image, le traitement par l'IA et la génération du rapport détaillé avec les zones d'intérêt annotées."
        }
      ]
    },
    {
      icon: CreditCard,
      title: "Tarification & Remboursement",
      questions: [
        {
          question: "Quel est le modèle tarifaire ?",
          answer: "Nous proposons un modèle d'abonnement adapté à la taille de l'établissement, avec un tarif par analyse ou un forfait annuel illimité. Contactez notre équipe commerciale pour un devis personnalisé selon vos besoins."
        },
        {
          question: "L'analyse est-elle remboursée par la Sécurité Sociale ?",
          answer: "Oui, suite à la validation HAS, l'acte d'analyse par IA DiagMind.AI est inscrit à la nomenclature des actes médicaux et est remboursé dans le cadre du parcours de soins classique."
        },
        {
          question: "Y a-t-il une période d'essai ?",
          answer: "Oui, nous proposons une période d'évaluation gratuite de 30 jours pour permettre aux établissements de tester notre solution en conditions réelles avant tout engagement."
        }
      ]
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

  const itemVariants = {
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
                <HelpCircle className="w-4 h-4 inline mr-2" />
                Centre d'aide
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Questions <span className="bg-gradient-hero bg-clip-text text-transparent">Fréquentes</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Retrouvez les réponses aux questions les plus courantes sur DiagMind.AI, notre technologie, la sécurité des données et l'intégration dans votre établissement.
              </p>
            </div>
          </section>

          {/* FAQ Content */}
          <motion.section 
            ref={ref}
            className="py-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto space-y-12">
                {faqCategories.map((category, categoryIndex) => {
                  const Icon = category.icon;
                  return (
                    <motion.div 
                      key={categoryIndex}
                      variants={itemVariants}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-accent-light rounded-xl flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                      </div>
                      
                      <Accordion type="single" collapsible className="space-y-3">
                        {category.questions.map((faq, faqIndex) => (
                          <AccordionItem 
                            key={faqIndex} 
                            value={`${categoryIndex}-${faqIndex}`}
                            className="bg-background border border-border rounded-lg px-6 hover:shadow-medical transition-all duration-300"
                          >
                            <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-4">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </motion.div>
                  );
                })}
              </div>

              {/* Contact CTA */}
              <motion.div 
                variants={itemVariants}
                className="max-w-4xl mx-auto mt-16 text-center p-8 bg-gradient-to-r from-primary-light/20 to-accent-light/20 rounded-2xl border border-border"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Vous n'avez pas trouvé votre réponse ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions.
                </p>
                <a 
                  href="/#contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Contactez-nous
                </a>
              </motion.div>
            </div>
          </motion.section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;