import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";


const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}

          <div className="col-lg-6">
            <motion.span
              className="hero-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              🚀 Let's Innovate The Future
            </motion.span>

            <motion.h1
              className="hero-title mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Building Custom Software & AI-Powered Business Solutions
            </motion.h1>

            <motion.p
              className="hero-description mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We create powerful software, web applications, mobile apps, and AI
              automation solutions that help businesses scale faster.
            </motion.p>

            <motion.div
              className="d-flex gap-3 mt-5 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/services" className="btn btn-primary btn-lg px-4">
                Explore Services
              </Link>

              <Link to="/contact" className="btn btn-outline-dark btn-lg px-4">
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Right Side */}

          <div className="col-lg-6">
            <motion.div
              className="hero-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="dashboard-window">
                <div className="window-header">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="dashboard-content">
                  <div className="dashboard-item">AI Automation</div>

                  <div className="dashboard-item">Web Applications</div>

                  <div className="dashboard-item">Mobile Apps</div>

                  <div className="dashboard-item">Cloud Solutions</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
