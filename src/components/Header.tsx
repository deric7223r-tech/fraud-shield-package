import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-cream/10">
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-cream">
            <Shield className="w-8 h-8 text-gold" />
            <span className="font-serif text-xl font-semibold">Safeguard Advisory</span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-cream/70 hover:text-cream transition-colors">
              Services
            </a>
            <a href="#process" className="text-cream/70 hover:text-cream transition-colors">
              Process
            </a>
            <a href="#pricing" className="text-cream/70 hover:text-cream transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-cream/70 hover:text-cream transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button variant="hero" size="default">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-cream p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-cream/10">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-cream/70 hover:text-cream transition-colors py-2">
                Services
              </a>
              <a href="#process" className="text-cream/70 hover:text-cream transition-colors py-2">
                Process
              </a>
              <a href="#pricing" className="text-cream/70 hover:text-cream transition-colors py-2">
                Pricing
              </a>
              <a href="#contact" className="text-cream/70 hover:text-cream transition-colors py-2">
                Contact
              </a>
              <Button variant="hero" className="mt-2">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
