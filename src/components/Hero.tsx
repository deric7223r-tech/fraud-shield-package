import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cream rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gold rounded-full blur-3xl" />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container relative z-10 flex flex-col justify-center min-h-[90vh] py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 border border-cream/20 text-cream/90 text-sm mb-8 animate-fade-up opacity-0">
            <Shield className="w-4 h-4" />
            <span>UK GovS-013 & ECCTA 2023 Compliant</span>
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream leading-tight mb-6 animate-fade-up opacity-0 animation-delay-100">
            Fraud Risk Assessment
            <span className="block text-gold mt-2">Made Accessible</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mb-8 leading-relaxed animate-fade-up opacity-0 animation-delay-200">
            A lightweight, standards-aligned FRA for charities and organisations. 
            Get the evidence auditors, funders and regulators require—without the 
            heavy consultancy price tag.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 animation-delay-300">
            <Button variant="hero" size="xl">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Pricing
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-cream/10 animate-fade-up opacity-0 animation-delay-400">
            <p className="text-cream/50 text-sm mb-4 uppercase tracking-wider">Trusted by organisations across the UK</p>
            <div className="flex flex-wrap gap-8 text-cream/40">
              <span className="font-serif text-xl">Charities</span>
              <span className="font-serif text-xl">Housing Associations</span>
              <span className="font-serif text-xl">NHS Bodies</span>
              <span className="font-serif text-xl">Local Authorities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
