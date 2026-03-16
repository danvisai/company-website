import { Building2, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border-2 border-white flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white text-xl tracking-wider uppercase">[Company Name]</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <button onClick={() => scrollToSection("home")} className="text-white text-sm tracking-wider uppercase hover:text-gray-300 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-white text-sm tracking-wider uppercase hover:text-gray-300 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-white text-sm tracking-wider uppercase hover:text-gray-300 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("about")} className="text-white text-sm tracking-wider uppercase hover:text-gray-300 transition-colors">
              About
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-white text-black hover:bg-gray-200 uppercase tracking-wider">
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-6 mt-8 pb-4">
            <button onClick={() => scrollToSection("home")} className="text-white text-sm tracking-wider uppercase hover:text-gray-300 transition-colors text-left">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-white text-sm tracking-wider uppercase hover:text-gray-300 transition-colors text-left">
              Services
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-white text-sm tracking-wider uppercase hover:text-gray-300 transition-colors text-left">
              Projects
            </button>
            <button onClick={() => scrollToSection("about")} className="text-white text-sm tracking-wider uppercase hover:text-gray-300 transition-colors text-left">
              About
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-white text-black hover:bg-gray-200 w-full uppercase tracking-wider">
              Contact
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}