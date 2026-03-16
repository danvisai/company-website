import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { value: "500+", label: "Completed Projects" },
  { value: "150+", label: "Team Members" },
  { value: "28", label: "Awards Won" },
  { value: "30+", label: "Years Experience" },
];

export function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div>
            <div className="w-16 h-1 bg-black mb-8"></div>
            <h2 className="text-6xl md:text-7xl mb-8 tracking-tight">ABOUT<br/>[COMPANY]</h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-2xl leading-relaxed text-gray-800">
              Since 1995, we have been shaping skylines and infrastructure with precision engineering and innovative design.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Our multidisciplinary team combines decades of expertise in civil engineering, architectural design, and structural analysis to deliver projects that stand the test of time.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              We believe in the power of minimalism, functionality, and structural integrity. Every project is an opportunity to push boundaries while maintaining uncompromising quality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 mb-32">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-12 text-center">
              <div className="text-6xl mb-4 tracking-tight">{stat.value}</div>
              <div className="text-sm tracking-widest uppercase text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="relative h-[600px]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769147339214-076740872485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmFsJTIwZW5naW5lZXJpbmclMjBibHVlcHJpbnR8ZW58MXx8fHwxNzczNTg3NjcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Engineering blueprints"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}