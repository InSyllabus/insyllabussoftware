import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import "./ContactCards.css";

const ContactCards = () => {
  return (
    <section>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="contact-card">
              <FaEnvelope />

              <h4>Email</h4>

              <p>
                <a href="mailto:support@insyllabussoftwares.com">
                  support@insyllabussoftwares.com
                </a>
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="contact-card">
              <FaPhoneAlt />

              <h4>Phone</h4>

              <p>
                <a href="tel:+917722035103">+91 77220 35103</a>
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="contact-card">
              <FaMapMarkerAlt />

              <h4>Location</h4>

              <p>Pune, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
