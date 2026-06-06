import ServicesHero from "../components/services/ServicesHero/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid/ServicesGrid";
import TechnologyStack from "../components/services/TechnologyStack/TechnologyStack";
import WhyChooseService from "../components/services/WhyChooseService/WhyChooseService";
import Process from "../components/home/Process/Process";
import CTASection from "../components/common/CTASection/CTASection";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <TechnologyStack />
      <Process />
      <WhyChooseService />
      <CTASection />
    </>
  );
};

export default Services;