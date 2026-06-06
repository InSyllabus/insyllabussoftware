import AboutHero from "../components/about/AboutHero/AboutHero";
import CompanyStory from "../components/about/CompanyStory/CompanyStory";
import MissionVision from "../components/about/MissionVision/MissionVision";
import CoreValues from "../components/about/CoreValues/CoreValues";
import TechStack from "../components/about/TechStack/TechStack";
import FutureVision from "../components/about/FutureVision/FutureVision";
import CTASection from "../components/common/CTASection/CTASection";

const About = () => {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <TechStack />
      <FutureVision />
      <CTASection />
    </>
  );
};

export default About;