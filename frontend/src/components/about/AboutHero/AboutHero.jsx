import { motion } from "framer-motion";
import "./AboutHero.css";
import aboutHeroImg from "../../../assets/images/hero/hero-digital-transformation.jpg";

const AboutHero = () => {
  return (
    <section className="about-hero">

      <div className="container text-center">

        <motion.span
          className="section-tag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ABOUT INSYLLABUS SOFTWARES
        </motion.span>

        <motion.h1
          className="hero-title mt-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let's Innovate
          The Future
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Building innovative software products,
          custom applications, websites,
          and AI-powered business solutions.
        </motion.p>

        <div className="about-hero-image">
  <img src={aboutHeroImg} alt="Digital Transformation" />
</div>

      </div>

    </section>
  );
};

export default AboutHero;