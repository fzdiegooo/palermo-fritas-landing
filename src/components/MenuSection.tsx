
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Flame } from 'lucide-react';

const MenuSection = () => {
  const clasicas = [
    { name: "Jamón y Queso", price: 400, ingredients: "Jamón cocido y queso cremoso" },
    { name: "Cabanossi c/ Queso", price: 400, ingredients: "Cabanossi especiado con queso" },
    { name: "Ají de Gallina", price: 400, ingredients: "Pollo desmenuzado en salsa de ají amarillo" },
    { name: "Salchicha de Huacho", price: 400, ingredients: "Salchicha artesanal tradicional" },
    { name: "Chorizo c/ Queso", price: 400, ingredients: "Chorizo parrillero con queso" },
    { name: "Pizza", price: 400, ingredients: "Salsa de tomate, queso y orégano" }
  ];

  const especiales = [
    { name: "Parrillera", price: 500, ingredients: "Mezcla de carnes asadas con especias", popular: true },
    { name: "Pollo a la Brasa", price: 500, ingredients: "Pollo marinado a la brasa con hierbas", popular: true }
  ];

  const saltado = [
    { name: "Lomo Saltado", price: 400, ingredients: "Trozos de lomo, cebolla, tomate" },
    { name: "Lasagna", price: 400, ingredients: "Capas de pasta, carne, cebolla, tomate" },
    { name: "Hawaiana", price: 400, ingredients: "Jamón, piña, queso y orégano" },
    { name: "Peperoni", price: 400, ingredients: "Salami, salsa de tomate, queso y orégano" },
    { name: "Pollo c/ Champiñones", price: 400, ingredients: "Trozos de pollo, champiñones, salsa blanca y queso" }
  ];

  return (
    <section id="empanadas" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d152d] mb-6">
            Nuestra Variedad Irresistible
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            En Empanadas Fritas de Palermo, cada empanada es una explosión de sabor. 
            Elaboradas con ingredientes frescos y la receta tradicional que nos hace únicos.
          </p>
        </div>

        {/* Clásicas */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Star className="w-6 h-6 text-amber-500 mr-2" />
            <h3 className="text-3xl font-bold text-[#0d152d]">Clásicas</h3>
            <Star className="w-6 h-6 text-amber-500 ml-2" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clasicas.map((empanada, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-amber-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-[#0d152d] group-hover:text-amber-600 transition-colors">
                      {empanada.name}
                    </h4>
                    <Badge className="bg-amber-100 text-amber-800 font-bold">
                      ${empanada.price}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {empanada.ingredients}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Especiales */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Flame className="w-6 h-6 text-red-500 mr-2" />
            <h3 className="text-3xl font-bold text-[#0d152d]">Especiales</h3>
            <Flame className="w-6 h-6 text-red-500 ml-2" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {especiales.map((empanada, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-red-300 relative overflow-hidden">
                {empanada.popular && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-bold transform rotate-12 translate-x-3 translate-y-3">
                    ¡POPULAR!
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-[#0d152d] group-hover:text-red-600 transition-colors">
                      {empanada.name}
                    </h4>
                    <Badge className="bg-red-100 text-red-800 font-bold text-lg">
                      ${empanada.price}
                    </Badge>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {empanada.ingredients}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Saltado */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mr-2"></div>
            <h3 className="text-3xl font-bold text-[#0d152d]">Lomo Saltado y Más</h3>
            <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full ml-2"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saltado.map((empanada, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-amber-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-[#0d152d] group-hover:text-amber-600 transition-colors">
                      {empanada.name}
                    </h4>
                    <Badge className="bg-amber-100 text-amber-800 font-bold">
                      ${empanada.price}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {empanada.ingredients}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mini Empanadas */}
        <div className="text-center">
          <Card className="max-w-md mx-auto bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#0d152d] mb-4">Mini Empanadas</h3>
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-600 mb-2">8 x $2000</p>
                <p className="text-gray-600">Perfectas para compartir</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
