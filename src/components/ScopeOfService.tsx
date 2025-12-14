import { FileSearch, Users, ClipboardList, Lightbulb, FileCheck, BarChart3 } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Initial Consultation",
    description: "Comprehensive intake questionnaire to understand your organisation's unique risk profile and compliance needs."
  },
  {
    icon: ClipboardList,
    title: "Templated FRA",
    description: "Standards-aligned Fraud Risk Assessment following UK GovS-013 and the Fraud Prevention Standard."
  },
  {
    icon: Users,
    title: "Priority Risk Areas",
    description: "Identification of key risks across process, people, and controls—with clear owners and target risk ratings."
  },
  {
    icon: Lightbulb,
    title: "Actionable Recommendations",
    description: "Proportional, practical steps tailored to your organisation's size and resources."
  },
  {
    icon: FileCheck,
    title: "Evidence Pack",
    description: "Audit-ready summary report plus training awareness outline for trustees and senior leadership."
  },
  {
    icon: BarChart3,
    title: "Quarterly Dashboard",
    description: "Optional subscription add-on: ongoing prevention dashboard with metrics and trend analysis."
  }
];

const ScopeOfService = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider mb-4 block">
            What We Deliver
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Scope of Service
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Everything you need to demonstrate fraud prevention, reduce risk, 
            and align with UK standards—delivered in one focused engagement.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-secondary/30 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScopeOfService;
