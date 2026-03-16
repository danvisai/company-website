import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1755018237309-bb3f5efeb2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3NzM1NjQxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern architecture"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-6 z-10 text-white">
        <div className="max-w-5xl">
          <div className="mb-12">
            <div className="w-20 h-1 bg-white mb-8"></div>
            <h2 className="text-7xl md:text-8xl lg:text-9xl mb-8 tracking-tight leading-none">
              PRECISION<br/>
              IN EVERY<br/>
              STRUCTURE
            </h2>
            <div className="w-20 h-1 bg-white mb-8"></div>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl tracking-wide">
            Civil Engineering · Architecture · Structural Design
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-white text-black hover:bg-gray-200 text-base uppercase tracking-widest group"
            >
              View Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black text-base uppercase tracking-widest"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-12 text-white">
        <div className="flex items-center gap-4">
          <div className="w-px h-24 bg-white/30"></div>
          <p className="text-xs tracking-widest uppercase rotate-90 origin-center translate-x-12">Scroll</p>
        </div>
      </div>
    </section>
  );
}