import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";

import logo from "../../../assets/logos/Logo.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-5">
          {/* Company */}
          <div className="col-lg-4">
            <img
              src={logo}
              alt="InSyllabus Softwares"
              className="footer-logo"
            />

            <p className="footer-tagline">Let's Innovate The Future.</p>

            <p className="footer-desc">
              We build custom software, web applications, mobile apps, and
              AI-powered solutions.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-4">
            <h5>Company</h5>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/products">Products</Link>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-lg-2 col-md-4">
            <h5>Products</h5>

            <ul>
              <li>
                <a
                  href="https://insyllabus.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  InSyllabus
                </a>
              </li>

              <li>
                <a href="https://ridotag.com/" target="_blank" rel="noreferrer">
                  RidoTag
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-4">
            <h5>Contact</h5>

            <div className="contact-item">
              <FaEnvelope />

              <a href="mailto:support@insyllabussoftwares.com">
                support@insyllabussoftwares.com
              </a>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />

              <a href="tel:+917722035103">+91 77220 35103</a>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />

              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} InSyllabus Softwares. All Rights
            Reserved.
          </p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/insyllabus-software/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/insyllabussoftware?igsh=MTQwM2FyZnM2dG52eg=="
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/share/1JnKyhgJW4/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
