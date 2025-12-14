import { Button } from "@/components/ui/button";
import { Shield, Scale, FileCheck, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Scale,
    title: "ECCTA 2023 Compliance",
    description: "The 'failure to prevent fraud' offence means organisations are now accountable for having reasonable fraud prevention procedures."
  },
  {
    icon: Shield,
    title: "Independent Assurance",
    description: "Demonstrate to auditors, regulators and trustees that you've taken proportionate steps to identify and mitigate fraud risks."
  },
  {
    icon: FileCheck,
    title: "Tangible Evidence",
    description: "Walk away with audit-ready documentation that proves your commitment to fraud prevention—not just good intentions."
  }
];

const WhyItMatters = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-secondary font-medium text-sm uppercase tracking-wider mb-4 block">
              The Bigger Picture
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Why This Matters
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Organisations are increasingly expected to have 'reasonable fraud prevention procedures' 
              in place. Our FRA pilot gives you affordable, independent assurance and tangible 
              evidence for auditors, regulators, and trustees.
            </p>

            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - CTA card */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-elevated border border-border">
            <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Complete our brief intake questionnaire and we'll be in touch within 48 hours 
              to discuss your requirements.
            </p>

            {/* Timeline */}
            <div className="bg-muted/50 rounded-xl p-6 mb-8">
              <h4 className="font-medium text-foreground mb-4">Next Steps</h4>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <p className="font-medium text-foreground">Initial Consultation</p>
                    <p className="text-sm text-muted-foreground">Discuss your needs and scope</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <p className="font-medium text-foreground">FRA Delivery</p>
                    <p className="text-sm text-muted-foreground">Within 3–4 weeks</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <p className="font-medium text-foreground">Optional Subscription</p>
                    <p className="text-sm text-muted-foreground">Dashboard and training follow-up</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="navy" size="lg" className="flex-1">
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
