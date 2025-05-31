
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5411XXXXXXXX?text=¡Hola! Me gustaría hacer un pedido de empanadas fritas', '_blank');
  };

  return (
    <section id="ubicacion" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d152d] mb-6">
            ¡Encuéntranos en Palermo!
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Visitanos en nuestro local o pedí delivery. También hacemos delivery. 
            <span className="text-amber-600 font-semibold">¡Consúltanos por tu zona!</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2 border-amber-200 hover:border-amber-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0d152d] mb-2">Dirección</h3>
                    <p className="text-gray-700">
                      Av. [Nombre de Calle], [Número]<br />
                      Palermo, Buenos Aires, Argentina
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:border-amber-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0d152d] mb-3">Horarios de Atención</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Lunes a Viernes:</span>
                        <span className="font-semibold">[Horario]</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábados:</span>
                        <span className="font-semibold">[Horario]</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingos:</span>
                        <span className="font-semibold">[Horario]</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:border-amber-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0d152d] mb-3">Contacto</h3>
                    <p className="text-gray-700 mb-4">
                      Teléfono: <span className="font-semibold">+54 11 XXXX-XXXX</span>
                    </p>
                    <Button 
                      onClick={openWhatsApp}
                      className="bg-green-500 hover:bg-green-600 text-white w-full"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contactar por WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <Card className="border-2 border-amber-200">
              <CardContent className="p-0">
                <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-amber-600" />
                    <h4 className="text-xl font-bold mb-2">Mapa Interactivo</h4>
                    <p className="text-sm">
                      Aquí se integrará un mapa de Google Maps<br />
                      mostrando la ubicación exacta del local
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Badge */}
            <div className="absolute -top-4 -right-4 bg-[#0d152d] text-white rounded-full p-4 shadow-lg animate-pulse">
              <div className="text-center">
                <p className="text-sm font-bold">DELIVERY</p>
                <p className="text-xs">Disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
