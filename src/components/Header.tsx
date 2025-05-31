
import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#0d152d] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center font-bold text-[#0d152d] text-xl">
              E
            </div>
            <div>
              <h1 className="text-xl font-bold text-amber-400">Empanadas Fritas</h1>
              <p className="text-sm text-amber-200">de Palermo</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('empanadas')}
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Nuestras Empanadas
            </button>
            <button 
              onClick={() => scrollToSection('ubicacion')}
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Ubicación
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Pedidos
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm">
              <Phone className="w-4 h-4" />
              <span>+54 11 XXXX-XXXX</span>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Palermo, CABA</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left py-2 hover:text-amber-400 transition-colors duration-200"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('empanadas')}
              className="block w-full text-left py-2 hover:text-amber-400 transition-colors duration-200"
            >
              Nuestras Empanadas
            </button>
            <button 
              onClick={() => scrollToSection('ubicacion')}
              className="block w-full text-left py-2 hover:text-amber-400 transition-colors duration-200"
            >
              Ubicación
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left py-2 hover:text-amber-400 transition-colors duration-200"
            >
              Pedidos
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
