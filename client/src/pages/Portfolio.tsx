import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Building, Home, Utensils, ShoppingCart } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Boulangerie Artisanale du Centre",
      category: "Boulangerie",
      description: "Installation complète d'une vitrine réfrigérée sur mesure et d'une chambre froide positive pour une boulangerie artisanale.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      details: [
        "Vitrine réfrigérée 3m linéaires",
        "Chambre froide positive 12m³",
        "Système de refroidissement économe",
        "Maintenance incluse 2 ans"
      ],
      type: "commercial"
    },
    {
      title: "Supermarché Local",
      category: "Grande Distribution",
      description: "Rénovation complète du système de réfrigération avec installation d'un système centralisé moderne.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      details: [
        "Système centralisé CO2",
        "15 meubles frigorifiques",
        "Chambres froides négatives",
        "Économie d'énergie 30%"
      ],
      type: "commercial"
    },
    {
      title: "Villa Moderne - Climatisation",
      category: "Résidentiel",
      description: "Installation d'un système de climatisation réversible multi-split pour une maison de 180m².",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      details: [
        "Système réversible 5 zones",
        "Pompe à chaleur haute performance",
        "Unités murales design",
        "Programmation intelligente"
      ],
      type: "residential"
    },
    {
      title: "Restaurant Gastronomique",
      category: "Restauration",
      description: "Équipement complet d'une cuisine professionnelle avec chambres froides modulaires.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      details: [
        "2 chambres froides modulaires",
        "Équipements cuisine professionnels",
        "Conformité normes HACCP",
        "Télésurveillance température"
      ],
      type: "commercial"
    },
    {
      title: "Appartement Parisien",
      category: "Résidentiel",
      description: "Rénovation d'un système de climatisation dans un appartement haussmannien avec contraintes techniques.",
      image: "https://pixabay.com/get/g4c2ebbee5c5a6c720f75c9fe8692efd0133e434da3440b94be9c20d753b85d4c2d0315ec76121b406fdded2d370fc2779267921cbc54f5908648a4d55c0698ac_1280.jpg",
      details: [
        "Adaptation architecture ancienne",
        "Unités discrètes intégrées",
        "Isolation phonique renforcée",
        "Contrôle smartphone"
      ],
      type: "residential"
    },
    {
      title: "Pâtisserie Créative",
      category: "Pâtisserie",
      description: "Installation spécialisée pour une pâtisserie créative avec besoins spécifiques de conservation.",
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      details: [
        "Vitrines à température variable",
        "Chambre de fermentation contrôlée",
        "Système de choc thermique",
        "Design sur mesure"
      ],
      type: "commercial"
    }
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case "Boulangerie":
      case "Pâtisserie":
        return Building;
      case "Grande Distribution":
        return ShoppingCart;
      case "Restauration":
        return Utensils;
      case "Résidentiel":
        return Home;
      default:
        return Building;
    }
  };

  const getColor = (type: string) => {
    return type === "commercial" ? "bg-cefco-blue" : "bg-cefco-green";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="from-cefco-blue to-blue-700 text-white py-20 bg-[#111827]" data-testid="portfolio-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Notre Portfolio</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Découvrez nos réalisations récentes et la satisfaction de nos clients
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                1000+ installations
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                500+ clients satisfaits
              </Badge>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="py-20 bg-white" data-testid="projects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Réalisations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque projet est unique et bénéficie de notre expertise technique et de notre attention aux détails
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = getIcon(project.category);
              return (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300" data-testid={`project-${index}`}>
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getColor(project.type)} text-white`}>
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className={`${getColor(project.type)} text-white w-10 h-10 rounded-full flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="space-y-1">
                      {project.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-cefco-blue rounded-full mr-2 flex-shrink-0"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 bg-gray-50" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages Clients</h2>
            <p className="text-xl text-gray-600">Ce que nos clients disent de nous</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6" data-testid="testimonial-0">
              <CardContent className="p-0">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-600 mb-4 italic">
                  "Installation parfaite de notre vitrine réfrigérée. L'équipe CEFCO est professionnelle 
                  et respecte les délais. Je recommande vivement !"
                </p>
                <div className="font-semibold text-gray-900">Marie Dubois</div>
                <div className="text-sm text-gray-600">Boulangerie du Centre</div>
              </CardContent>
            </Card>

            <Card className="p-6" data-testid="testimonial-1">
              <CardContent className="p-0">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-600 mb-4 italic">
                  "Intervention rapide pour notre panne de climatisation. Techniciens compétents 
                  et prix très correct. Merci CEFCO !"
                </p>
                <div className="font-semibold text-gray-900">Jean Martin</div>
                <div className="text-sm text-gray-600">Particulier - Paris 15e</div>
              </CardContent>
            </Card>

            <Card className="p-6" data-testid="testimonial-2">
              <CardContent className="p-0">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-600 mb-4 italic">
                  "Rénovation complète de notre système de réfrigération. Économies d'énergie 
                  significatives et équipe très professionnelle."
                </p>
                <div className="font-semibold text-gray-900">Pierre Legrand</div>
                <div className="text-sm text-gray-600">Supermarché Legrand</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 bg-cefco-blue text-white" data-testid="cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Votre Projet Nous Intéresse</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Confiez-nous votre projet de réfrigération ou climatisation. 
              Devis gratuit et personnalisé sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-cefco-blue hover:bg-gray-100">
                <Link href="/contact" data-testid="contact-project-cta">
                  Demander un devis gratuit
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-cefco-blue">
                <a href="tel:+33123456789" data-testid="call-cta">
                  Nous appeler
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
