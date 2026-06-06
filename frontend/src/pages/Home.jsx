import Hero from "../components/home/Hero/Hero";
import Stats from "../components/home/Stats/Stats";
import Products from "../components/home/Products/Products";
import Services from "../components/home/Services/Services";
import WhyChooseUs from "../components/home/WhyChooseUs/WhyChooseUs";
import Process from "../components/home/Process/Process";
import CTASection from "../components/common/CTASection/CTASection";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Stats /> */}
      <Products />
      <Services />
      <WhyChooseUs />
      <Process />
      <CTASection />
    </>
  );
};

export default Home;