import ContactHero from "../components/contact/ContactHero/ContactHero";
import ContactCards from "../components/contact/ContactCards/ContactCards";
import ContactForm from "../components/contact/ContactForm/ContactForm";
import ContactMap from "../components/contact/ContactMap/ContactMap";
import CTASection from "../components/common/CTASection/CTASection";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactCards />
      {/* <ContactForm /> */}
      <ContactMap />
      <CTASection />
    </>
  );
};

export default Contact;