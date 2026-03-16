import { Building2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border-2 border-white flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl tracking-wider uppercase">[Company Name]</h3>
              </div>
            </div>
            <p className="text-gray-500 max-w-md tracking-wide">
              [Company tagline or description]
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500 tracking-wider">
            © {currentYear} [COMPANY NAME]. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}