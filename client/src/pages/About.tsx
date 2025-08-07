import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Tag, Wrench, Clock, Users, Award, MapPin } from "lucide-react";

export default function About() {
  const certifications = [
    {
      name: "Certification RGE",
      description: "Reconnu Garant de l'Environnement",
      icon: Tag
    },
    {
      name: "Qualification Frigoriste",
      description: "Experts en manipulation de fluides frigorigènes",
      icon: Wrench
    },
    {
      name: "Service d'Urgence",
      description: "Disponibilité 24h/7j pour les interventions critiques",
      icon: Clock
    }
  ];

  const values = [
    {
      title: "Excellence Technique",
      description: "Nous utilisons uniquement des équipements de dernière génération et respectons scrupuleusement les normes en vigueur."
    },
    {
      title: "Relation Client",
      description: "Chaque projet est unique. Nous prenons le temps d'écouter vos besoins pour proposer la solution la plus adaptée."
    },
    {
      title: "Engagement Durable",
      description: "Nos installations respectent l'environnement et optimisent votre consommation énergétique."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cefco-blue to-blue-700 text-white py-20" data-testid="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              Fondée par deux frères passionnés
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de CEFCO</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              10 ans d'expérience au service de l'excellence en réfrigération et climatisation
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-white" data-testid="company-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 mb-6">
                CEFCO est née en 2014 de la passion partagée de deux frères pour les métiers du froid. 
                Formés dans les meilleures écoles techniques, nous avons souhaité créer une entreprise 
                à taille humaine, capable d'offrir un service personnalisé et de qualité.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Depuis 10 ans, nous mettons notre expertise technique et notre savoir-faire 
                au service de nos clients, qu'ils soient professionnels ou particuliers. 
                Notre réputation s'est construite sur la qualité de nos installations, 
                la rapidité de nos interventions et la satisfaction de nos clients.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Aujourd'hui, CEFCO c'est une équipe de spécialistes certifiés, des centaines 
                d'installations réussies et la confiance de nombreux professionnels en Île-de-France.
              </p>
              
              <div className="flex gap-4">
                <Button asChild className="bg-cefco-blue hover:bg-blue-800">
                  <Link href="/contact" data-testid="contact-cta">
                    Nous contacter
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-cefco-blue text-cefco-blue hover:bg-cefco-blue hover:text-white">
                  <Link href="/portfolio" data-testid="portfolio-cta">
                    Voir nos réalisations
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://pixabay.com/get/gc5aad3a9d441ad6ffd506a387f1054566948cbb8d8fae6061701d0c4b2ed760ce9a09a0d778006dc577fa684ddc76d1e7bc6ded3d601f6514f13dad49e8f22ef_1280.jpg"
                alt="Équipe de techniciens HVAC professionnels"
                className="rounded-2xl shadow-xl"
                data-testid="team-image"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cefco-blue">10</div>
                  <div className="text-sm text-gray-600">Années<br />d'expérience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50" data-testid="certifications-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Certifications</h2>
            <p className="text-xl text-gray-600">
              La garantie d'un service professionnel et conforme aux réglementations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`certification-${index}`}>
                  <CardContent className="pt-8 pb-6">
                    <div className="bg-cefco-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-gray-600">{cert.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600">
              Ce qui guide notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow" data-testid={`value-${index}`}>
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-cefco-blue text-white" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-experience">
              <div className="text-4xl font-bold mb-2">10</div>
              <div className="text-lg">Années d'expérience</div>
            </div>
            <div data-testid="stat-clients">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Clients satisfaits</div>
            </div>
            <div data-testid="stat-installations">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Installations réalisées</div>
            </div>
            <div data-testid="stat-availability">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Service d'urgence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gray-50" data-testid="service-area-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-cefco-green text-white w-16 h-16 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Zone d'Intervention</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Nous intervenons dans toute l'Île-de-France et les régions limitrophes 
              pour tous vos projets de réfrigération et climatisation.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {["Paris", "Seine-et-Marne", "Yvelines", "Essonne", "Hauts-de-Seine", "Seine-Saint-Denis", "Val-de-Marne", "Val-d'Oise"].map((department) => (
                <Badge key={department} variant="secondary" className="text-base px-4 py-2">
                  {department}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
