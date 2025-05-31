
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-[#0d152d] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center font-bold text-[#0d152d] text-xl">
                E
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-400">Empanadas Fritas</h3>
                <p className="text-sm text-amber-200">de Palermo</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              El sabor auténtico de Palermo en cada bocado. Empanadas fritas 
              artesanales hechas con ingredientes frescos y mucho amor.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-amber-400 mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Av. [Nombre de Calle], [Número], Palermo, CABA
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+54 11 XXXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@empanadaspalermo.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold text-amber-400 mb-4">Síguenos</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-amber-600 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-amber-600 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              ¡Seguinos en nuestras redes para ver las empanadas del día y ofertas especiales!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Empanadas Fritas de Palermo. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Hecho con ❤️ en Buenos Aires
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
