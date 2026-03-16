import { Card, CardHeader, CardTitle } from "./ui/card";
import { Building, Ruler, HardHat, Mountain, Factory, Hammer } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Architectural Design",
    number: "01",
  },
  {
    icon: HardHat,
    title: "Civil Engineering",
    number: "02",
  },
  {
    icon: Hammer,
    title: "Structural Engineering",
    number: "03",
  },
  {
    icon: Mountain,
    title: "Geotechnical Services",
    number: "04",
  },
  {
    icon: Factory,
    title: "Industrial Projects",
    number: "05",
  },
  {
    icon: Ruler,
    title: "Construction Management",
    number: "06",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <div className="w-16 h-1 bg-black mb-8"></div>
          <h2 className="text-6xl md:text-7xl mb-6 tracking-tight">SERVICES</h2>
          <p className="text-xl text-gray-600 max-w-2xl tracking-wide">
            Comprehensive engineering solutions for complex challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="rounded-none border-0 bg-white hover:bg-black hover:text-white transition-all duration-500 group">
                <CardHeader className="p-12">
                  <div className="flex items-start justify-between mb-12">
                    <div className="text-6xl tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity">
                      {service.number}
                    </div>
                    <Icon className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-2xl tracking-wide uppercase">{service.title}</CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}