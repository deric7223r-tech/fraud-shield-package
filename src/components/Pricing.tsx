import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const pricingTiers = [
  {
    name: "Health Check FRA",
    price: "£1,200 – £1,800",
    description: "Essential fraud risk assessment for smaller organisations",
    features: [
      "Full Six-Step FRA Process",
      "10–12 page FRA report",
      "Fraud Risk Register with heat map",
      "Key risks and mitigation summary",
      "Audit-ready evidence pack",
      "3–4 week delivery"
    ],
    highlighted: false
  },
  {
    name: "FRA + Awareness",
    price: "£2,000 – £2,500",
    description: "Complete assessment with staff training materials",
    features: [
      "Everything in Health Check",
      "Awareness briefing slide deck",
      "30-minute workshop outline",
      "Tailored to trustees & leadership",
      "Budget-holder guidance"
    ],
    highlighted: true
  },
  {
    name: "FRA + Dashboard",
    price: "£3,000 – £3,500",
    description: "Full package with 12 months ongoing monitoring",
    features: [
      "Everything in FRA + Awareness",
      "Quarterly prevention dashboard",
      "Metrics and trend analysis",
      "12-month subscription included",
      "Annual FRA refresh reminder",
      "Implementation support"
    ],
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider mb-4 block">
            Pilot Pricing
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Accessible for Charities & Small Organisations
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our pilot packages are designed to make professional fraud risk assessment 
            affordable. Pricing varies based on organisation size and complexity.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                tier.highlighted 
                  ? 'bg-gradient-hero text-cream shadow-elevated scale-105' 
                  : 'bg-card border border-border shadow-card'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gold text-accent-foreground text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-serif text-2xl mb-2 ${tier.highlighted ? 'text-cream' : 'text-foreground'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-4 ${tier.highlighted ? 'text-cream/70' : 'text-muted-foreground'}`}>
                  {tier.description}
                </p>
                <p className={`font-serif text-3xl font-bold ${tier.highlighted ? 'text-gold' : 'text-secondary'}`}>
                  {tier.price}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-gold' : 'text-secondary'}`} />
                    <span className={tier.highlighted ? 'text-cream/90' : 'text-foreground'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.highlighted ? "hero" : "teal"} 
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Custom pricing note */}
        <p className="text-center text-muted-foreground mt-12">
          <span className="font-medium text-foreground">Multi-site or complex organisations?</span>{" "}
          Custom pricing available for NHS bodies, local authorities, and large grant-makers.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
