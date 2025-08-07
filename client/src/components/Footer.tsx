import { Link } from "wouter";
import { Phone, Mail, MapPin, TriangleAlert } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-2">CEFCO</div>
            <div className="text-sm text-gray-400 mb-4">10 ans d'expérience</div>
            <p className="text-gray-400 text-sm">
              Experts en réfrigération et climatisation, nous mettons notre savoir-faire 
              au service de votre confort thermique depuis 2014.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services Commerciaux</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Boulangeries
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Supermarchés
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Chambres froides
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services Résidentiels</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Climatisation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Pompes à chaleur
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Réparations
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                01 23 45 67 89
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                contact@cefco.fr
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Île-de-France
              </p>
              <div className="mt-4">
                <p className="text-cefco-red font-semibold flex items-center">
                  <TriangleAlert className="w-4 h-4 mr-2" />
                  Urgences 24h/7j
                </p>
                <p className="text-cefco-red">06 12 34 56 78</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CEFCO. Tous droits réservés. | Certifié RGE
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="social-facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="social-linkedin"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="social-google"
            >
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
