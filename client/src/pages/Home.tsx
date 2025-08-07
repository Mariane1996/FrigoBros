import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Store, Home, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cefco-blue to-blue-800 text-white" data-testid="hero-section">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full px-6 py-2 inline-block mb-6">
              <span className="text-lg font-semibold">10 ans d'expérience</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Experts en <span className="text-blue-200">Réfrigération</span><br />
              et <span className="text-blue-200">Climatisation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              Deux frères passionnés au service de votre confort thermique.
              Solutions professionnelles pour commerces et particuliers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-cefco-blue hover:bg-gray-100">
                <Link href="/services" data-testid="services-cta">
                  Découvrir nos services
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-cefco-blue">
                <Link href="/contact" data-testid="quote-cta">
                  Demander un devis
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white" data-testid="services-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Domaines d'Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fort de 10 années d'expérience, nous proposons des solutions complètes
              en réfrigération et climatisation adaptées à vos besoins spécifiques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Commercial Services */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200" data-testid="commercial-services">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="bg-cefco-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Store className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Services Commerciaux</h3>
                  <p className="text-gray-600">Solutions professionnelles pour entreprises</p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <img
                        src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                        alt="Réfrigération de boulangerie"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                        data-testid="bakery-image"
                      />
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Boulangeries</h4>
                      <p className="text-gray-600 mb-4">
                        Installation et maintenance de vitrines réfrigérées, chambres froides pour pâtisseries et viennoiseries.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-cefco-green mr-2" />
                          Vitrines réfrigérées
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-cefco-green mr-2" />
                          Chambres froides positives
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-cefco-green mr-2" />
                          Maintenance préventive
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <img
                        src="https://images.unsplash.com/photo-1601599561213-832382fd07ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                        alt="Réfrigération de supermarché"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                        data-testid="supermarket-image"
                      />
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Supermarchés & Restaurants</h4>
                      <p className="text-gray-600 mb-4">
                        Systèmes de réfrigération industriels, chambres froides et équipements spécialisés pour la restauration.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-cefco-green mr-2" />
                          Systèmes centralisés
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-cefco-green mr-2" />
                          Chambres froides négatives
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-cefco-green mr-2" />
                          Équipements sur mesure
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Residential Services */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200" data-testid="residential-services">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="bg-cefco-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Services Résidentiels</h3>
                  <p className="text-gray-600">Confort climatique pour particuliers</p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <img
                        src="https://pixabay.com/get/g4c2ebbee5c5a6c720f75c9fe8692efd0133e434da3440b94be9c20d753b85d4c2d0315ec76121b406fdded2d370fc2779267921cbc54f5908648a4d55c0698ac_1280.jpg"
                        alt="Climatisation résidentielle"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                        data-testid="residential-ac-image"
                      />
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Climatisation Résidentielle</h4>
                      <p className="text-gray-600 mb-4">
                        Installation de systèmes de climatisation efficaces pour un confort optimal toute l'année.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-cefco-green mr-2" />
                          Climatisation réversible
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-cefco-green mr-2" />
                          Pompes à chaleur
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-cefco-green mr-2" />
                          Systèmes multi-split
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <img
                        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                        alt="Techniciens HVAC professionnels"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                        data-testid="hvac-technicians-image"
                      />
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Réparation d'Appareils</h4>
                      <p className="text-gray-600 mb-4">
                        Diagnostic et réparation de tous types d'équipements de réfrigération et climatisation.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-cefco-green mr-2" />
                          Diagnostic gratuit
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-cefco-green mr-2" />
                          Pièces d'origine
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-cefco-green mr-2" />
                          Garantie sur réparations
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
