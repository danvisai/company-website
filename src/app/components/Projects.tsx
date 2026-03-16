import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Metropolitan Bridge",
    category: "Infrastructure",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600965581129-eef8a214ec9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGJlYW0lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzczNjMxNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Commercial Tower",
    category: "Architecture",
    year: "2024",
    image: "https://images.unsplash.com/photo-1630915845140-7d60b67256dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzM2MzE1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Concrete Complex",
    category: "Civil Engineering",
    year: "2024",
    image: "https://images.unsplash.com/photo-1638376007478-83141a1eddd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHN0cnVjdHVyZSUyMG1vZGVybnxlbnwxfHx8fDE3NzM2MzE1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <div className="w-16 h-1 bg-white mb-8"></div>
          <h2 className="text-6xl md:text-7xl mb-6 tracking-tight">PROJECTS</h2>
          <p className="text-xl text-gray-400 max-w-2xl tracking-wide">
            Selected works that define our commitment to excellence
          </p>
        </div>

        <div className="space-y-px bg-gray-800">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer bg-black hover:bg-gray-900 transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-[600px] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex flex-col justify-between p-12 lg:p-16">
                  <div>
                    <div className="text-sm tracking-widest uppercase text-gray-500 mb-4">
                      {project.category}
                    </div>
                    <h3 className="text-5xl lg:text-6xl mb-6 tracking-tight">{project.title}</h3>
                    <div className="text-7xl tracking-tighter text-gray-800 group-hover:text-gray-700 transition-colors">
                      {project.year}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm tracking-widest uppercase mt-8">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}