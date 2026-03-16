import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll be in touch soon.");
  };

  return (
    <section id="contact" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="w-16 h-1 bg-white mb-8"></div>
            <h2 className="text-6xl md:text-7xl mb-12 tracking-tight">LET'S<br/>TALK</h2>
            
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <MapPin className="w-6 h-6" />
                  <h3 className="text-sm tracking-widest uppercase">Location</h3>
                </div>
                <p className="text-gray-400 text-lg ml-10">
                  123 Engineering Plaza<br />
                  Suite 500<br />
                  New York, NY 10001
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-3">
                  <Phone className="w-6 h-6" />
                  <h3 className="text-sm tracking-widest uppercase">Phone</h3>
                </div>
                <p className="text-gray-400 text-lg ml-10">+1 (555) 123-4567</p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-3">
                  <Mail className="w-6 h-6" />
                  <h3 className="text-sm tracking-widest uppercase">Email</h3>
                </div>
                <p className="text-gray-400 text-lg ml-10">info@company.com</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm tracking-widest uppercase mb-3">
                  Name *
                </label>
                <Input 
                  id="name" 
                  required 
                  className="bg-transparent border-0 border-b-2 border-gray-700 rounded-none px-0 focus:border-white focus-visible:ring-0 text-lg" 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm tracking-widest uppercase mb-3">
                  Email *
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  className="bg-transparent border-0 border-b-2 border-gray-700 rounded-none px-0 focus:border-white focus-visible:ring-0 text-lg" 
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm tracking-widest uppercase mb-3">
                  Company
                </label>
                <Input 
                  id="company" 
                  className="bg-transparent border-0 border-b-2 border-gray-700 rounded-none px-0 focus:border-white focus-visible:ring-0 text-lg" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm tracking-widest uppercase mb-3">
                  Message *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  className="bg-transparent border-0 border-b-2 border-gray-700 rounded-none px-0 focus:border-white focus-visible:ring-0 text-lg resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-white text-black hover:bg-gray-200 uppercase tracking-widest text-base mt-12"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}