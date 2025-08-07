import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Store, Home, Wrench, Shield, Clock } from "lucide-react";

export default function Services() {
  const commercialServices = [
    {
      title: "Boulangeries & Pâtisseries",
      description: "Solutions spécialisées pour la conservation de vos produits de boulangerie",
      features: [
        "Vitrines réfrigérées pour viennoiseries",
        "Chambres froides positives pour stockage",
        "Systèmes de refroidissement rapide",
        "Maintenance préventive adaptée",
        "Dépannage d'urgence 24h/7j"
      ],
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Supermarchés & Grandes Surfaces",
      description: "Systèmes de réfrigération centralisés pour la grande distribution",
      features: [
        "Systèmes centralisés haute capacité",
        "Meubles frigorifiques professionnels",
        "Chambres froides négatives",
        "Gestion de la chaîne du froid",
        "Monitoring et télésurveillance"
      ],
      image: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Restaurants & Hôtels",
      description: "Équipements professionnels pour la restauration et l'hôtellerie",
      features: [
        "Chambres froides modulaires",
        "Équipements de cuisine professionnels",
        "Systèmes de conservation sur mesure",
        "Conformité aux normes HACCP",
        "Formation du personnel"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    }
  ];

  const residentialServices = [
    {
      title: "Climatisation Résidentielle",
      description: "Solutions de confort thermique pour votre domicile",
      features: [
        "Climatisation réversible",
        "Pompes à chaleur air/air",
        "Systèmes multi-split",
        "Installation et pose professionnelle",
        "Conseils personnalisés"
      ],
      image: "https://pixabay.com/get/g4c2ebbee5c5a6c720f75c9fe8692efd0133e434da3440b94be9c20d753b85d4c2d0315ec76121b406fdded2d370fc2779267921cbc54f5908648a4d55c0698ac_1280.jpg"
    },
    {
      title: "Maintenance & Réparation",
      description: "Entretien et dépannage de tous vos équipements",
      features: [
        "Diagnostic complet gratuit",
        "Réparation toutes marques",
        "Pièces détachées d'origine",
        "Contrats de maintenance",
        "Intervention rapide"
      ],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Installation & Mise en Service",
      description: "Installation professionnelle de vos équipements",
      features: [
        "Étude technique préalable",
        "Installation aux normes",
        "Mise en service complète",
        "Formation à l'utilisation",
        "Garantie installation"
      ],
      image: "https://pixabay.com/get/gc5aad3a9d441ad6ffd506a387f1054566948cbb8d8fae6061701d0c4b2ed760ce9a09a0d778006dc577fa684ddc76d1e7bc6ded3d601f6514f13dad49e8f22ef_1280.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cefco-blue to-blue-700 text-white py-20" data-testid="services-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Solutions complètes en réfrigération et climatisation pour professionnels et particuliers
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                10 ans d'expérience
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Certifié RGE
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20 bg-white" data-testid="commercial-services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-cefco-blue text-white w-16 h-16 rounded-full flex items-center justify-center">
                <Store className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Commerciaux</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous accompagnons les professionnels dans tous leurs projets de réfrigération
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow" data-testid={`commercial-service-${index}`}>
                <div className="aspect-video">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-cefco-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-20 bg-gray-50" data-testid="residential-services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-cefco-green text-white w-16 h-16 rounded-full flex items-center justify-center">
                <Home className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Résidentiels</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Votre confort thermique, notre priorité depuis plus de 10 ans
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow" data-testid={`residential-service-${index}`}>
                <div className="aspect-video">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-cefco-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi Choisir CEFCO ?</h2>
            <p className="text-xl text-gray-600">Nos garanties pour votre tranquillité d'esprit</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="guarantee-experience">
              <div className="bg-cefco-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">10 Ans d'Expérience</h3>
              <p className="text-gray-600">
                Une décennie d'expertise au service de nos clients, avec des centaines d'installations réussies.
              </p>
            </div>

            <div className="text-center" data-testid="guarantee-quality">
              <div className="bg-cefco-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Qualité Certifiée</h3>
              <p className="text-gray-600">
                Certifiés RGE, nous respectons les normes les plus strictes pour tous nos travaux.
              </p>
            </div>

            <div className="text-center" data-testid="guarantee-emergency">
              <div className="bg-cefco-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service d'Urgence</h3>
              <p className="text-gray-600">
                Disponibles 24h/7j pour tous vos dépannages urgents, partout en Île-de-France.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
