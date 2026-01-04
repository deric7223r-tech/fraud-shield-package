import { Check, FileText, AlertTriangle, Folder, Presentation, MapPin } from "lucide-react";

const deliverables = [
  {
    icon: FileText,
    title: "Standardised FRA Report",
    description: "comprehensive assessment document"
  },
  {
    icon: AlertTriangle,
    title: "Key Risks Summary",
    description: "Prioritised mitigation recommendations with heat map"
  },
  {
    icon: Folder,
    title: "Evidence Pack",
    description: "Audit-ready documentation for compliance records"
  },
  {
    icon: Presentation,
    title: "Awareness Briefing",
    description: "Template slide deck + 30-minute workshop outline"
  },
  {
    icon: MapPin,
    title: "Clear Roadmap",
    description: "Actionable next steps for 3–6 months ahead"
  }
];

const Deliverables = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
              What You Receive
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-6">
              Comprehensive Deliverables
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-8">
              Every FRA engagement produces tangible outputs designed for 
              immediate use—whether for board reporting, regulatory compliance, 
              or operational improvement.
            </p>
            
            {/* Key highlight */}
            <div className="bg-cream/5 rounded-xl p-6 border border-cream/10">
              <p className="text-cream/90 leading-relaxed">
                <span className="font-semibold text-gold">Fraud Risk Register:</span>{" "}
                The core deliverable includes inherent/residual ratings, control owners, 
                timelines, and metrics—designed to integrate seamlessly into your 
                enterprise risk register.
              </p>
            </div>
          </div>

          {/* Right content - deliverables list */}
          <div className="space-y-4">
            {deliverables.map((item, index) => (
              <div 
                key={item.title}
                className="flex items-start gap-4 p-6 rounded-xl bg-cream/5 border border-cream/10 hover:bg-cream/10 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-cream font-medium text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-cream/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
