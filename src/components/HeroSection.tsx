
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('empanadas');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d97706' fill-opacity='0.1'%3E%3Cpath d='M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 35C11.178 35 5 28.822 5 20S11.178 5 20 5s15 6.178 15 15-6.178 15-15 15z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-gray-600 ml-2">Calidad Premium</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0d152d] mb-6 leading-tight">
              Empanadas Fritas de Palermo:
              <span className="text-amber-600 block">
                Crocantes por Fuera,
              </span>
              <span className="text-amber-600 block">
                Irresistibles por Dentro
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              El sabor auténtico de Palermo en cada bocado.
              <span className="block text-amber-700 font-semibold">
                ¡Recién hechas, directo a tu mesa!
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToMenu}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                ¡Ver Nuestra Carta!
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-[#0d152d] text-[#0d152d] hover:bg-[#0d152d] hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
              >
                ¡Hacer un Pedido!
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-amber-600">500+</p>
                <p className="text-sm text-gray-600">Empanadas Diarias</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-600">15</p>
                <p className="text-sm text-gray-600">Variedades</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-600">100%</p>
                <p className="text-sm text-gray-600">Frescas</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80" 
                alt="Empanadas fritas doradas y crujientes"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                <div className="text-center">
                  <p className="text-lg font-bold text-amber-600">$400</p>
                  <p className="text-xs text-gray-600">desde</p>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-[#0d152d] text-white rounded-full p-3 shadow-lg">
                <div className="text-center">
                  <p className="text-sm font-bold">HOT</p>
                  <p className="text-xs">Recién Fritas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
