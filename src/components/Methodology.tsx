import { Database, Users2, Scale, Layers } from "lucide-react";

const methodologyItems = [
  {
    icon: Database,
    title: "Data Sources",
    description: "Document review, policy analysis, financial records, and existing control frameworks."
  },
  {
    icon: Users2,
    title: "Workshops & Interviews",
    description: "Structured sessions with key personnel across finance, operations, and governance."
  },
  {
    icon: Scale,
    title: "Scoring Scale",
    description: "5×5 likelihood/impact matrix aligned with GovS-013 methodology for inherent and residual risk ratings."
  },
  {
    icon: Layers,
    title: "Multi-Level Assessment",
    description: "Enterprise, functional, and thematic layers—showing how this FRA integrates into your broader risk architecture."
  }
];

const assessmentLevels = [
  {
    level: "Enterprise",
    description: "Organisation-wide fraud risk posture and culture",
    color: "bg-primary"
  },
  {
    level: "Functional",
    description: "Departmental risks: finance, HR, procurement, IT",
    color: "bg-secondary"
  },
  {
    level: "Thematic",
    description: "Deep-dive into high-risk areas (e.g., payments, grants)",
    color: "bg-accent"
  }
];

const Methodology = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider mb-4 block">
            How We Work
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Our Methodology
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A transparent, auditor-friendly approach that demonstrates exactly how 
            your FRA was conducted—aligned with UK GovS-013 practice notes.
          </p>
        </div>

        {/* Methodology grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {methodologyItems.map((item, index) => (
            <div 
              key={item.title}
              className="p-6 rounded-xl bg-background border border-border hover:border-secondary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Multi-level assessment visual */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-xl text-foreground text-center mb-8">
            Three-Level Assessment Framework
          </h3>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
            
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              {assessmentLevels.map((level, index) => (
                <div 
                  key={level.level}
                  className="bg-background rounded-xl p-6 border border-border text-center"
                >
                  <div className={`w-12 h-12 ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-cream font-serif font-bold">{index + 1}</span>
                  </div>
                  <h4 className="font-serif text-lg text-foreground mb-2">
                    {level.level}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {level.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-center text-muted-foreground text-sm mt-8">
            Our FRA integrates seamlessly across all three levels, providing a complete picture 
            that satisfies GovS-013 multi-level assessment requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
