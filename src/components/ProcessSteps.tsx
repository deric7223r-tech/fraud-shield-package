const steps = [
  {
    number: "01",
    title: "Scoping & Context",
    description: "Define organisational boundaries, key processes, and stakeholder priorities. Establish the assessment parameters aligned with your risk appetite."
  },
  {
    number: "02",
    title: "Data Collection",
    description: "Gather relevant documentation, policies, and controls information. Conduct interviews with key personnel across departments."
  },
  {
    number: "03",
    title: "Risk Identification",
    description: "Apply the Fraud Triangle framework (opportunity, motive, rationalisation) to identify potential fraud scenarios across all risk areas."
  },
  {
    number: "04",
    title: "Risk Assessment",
    description: "Evaluate inherent and residual risk ratings. Categorise risks by impact and likelihood using GovS-013 methodology."
  },
  {
    number: "05",
    title: "Control Evaluation",
    description: "Assess existing controls for design and operating effectiveness. Identify gaps and areas requiring strengthening."
  },
  {
    number: "06",
    title: "Reporting & Roadmap",
    description: "Deliver the Fraud Risk Register with heat map visualisation, clear recommendations, and a prioritised 3–6 month action plan."
  }
];

const ProcessSteps = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider mb-4 block">
            Our Methodology
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Six-Step FRA Process
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A structured approach that mirrors professional standards, progressing 
            logically from scoping to a comprehensive Fraud Risk Register.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative"
              >
                {/* Step card */}
                <div className="bg-card rounded-xl p-8 border border-border shadow-soft hover:shadow-card transition-all duration-300 h-full">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-hero text-cream font-serif text-xl font-bold mb-6">
                    {step.number}
                  </div>
                  
                  <h3 className="font-serif text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && index !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-12 -translate-y-1/2 z-10">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-secondary">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            <span className="font-medium text-foreground">Annual Review Recommended:</span> We suggest refreshing your FRA annually or following significant organisational changes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
