import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScopeOfService from "@/components/ScopeOfService";
import Methodology from "@/components/Methodology";
import ProcessSteps from "@/components/ProcessSteps";
import Deliverables from "@/components/Deliverables";
import Pricing from "@/components/Pricing";
import WhyItMatters from "@/components/WhyItMatters";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="services">
          <ScopeOfService />
        </section>
        <section id="methodology">
          <Methodology />
        </section>
        <section id="process">
          <ProcessSteps />
        </section>
        <Deliverables />
        <section id="pricing">
          <Pricing />
        </section>
        <section id="contact">
          <WhyItMatters />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
