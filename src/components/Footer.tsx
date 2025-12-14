import { Shield, Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-cream mb-4">
              <Shield className="w-8 h-8 text-gold" />
              <span className="font-serif text-xl font-semibold">Safeguard Advisory</span>
            </div>
            <p className="text-cream/60 leading-relaxed max-w-md mb-6">
              Helping organisations demonstrate fraud prevention, reduce risk, 
              and align with UK standards. Independent assurance for charities, 
              housing associations, and public sector bodies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center text-cream/60 hover:text-gold hover:bg-cream/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-cream/60 hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-cream/60 hover:text-gold transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-cream/60 hover:text-gold transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cream/60 hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-cream/60">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:hello@safeguardadvisory.co.uk" className="hover:text-gold transition-colors">
                  hello@safeguardadvisory.co.uk
                </a>
              </li>
              <li className="flex items-center gap-3 text-cream/60">
                <Phone className="w-5 h-5 text-gold" />
                <span>+44 (0)20 1234 5678</span>
              </li>
              <li className="flex items-start gap-3 text-cream/60">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 text-sm">
              © 2024 Safeguard Advisory Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-cream/40 hover:text-cream/60 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/40 hover:text-cream/60 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
