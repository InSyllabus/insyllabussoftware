import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          className="cta-box"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
        >
          <h2>Ready To Transform Your Ideas Into Reality?</h2>

          <p>
            Partner with InSyllabus Softwares to build scalable software, modern
            web applications, mobile apps, and AI-powered solutions that drive
            business growth.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contact" className="btn btn-light btn-lg">
              Schedule Consultation
            </Link>

            <Link to="/services" className="btn btn-outline-light btn-lg">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
