import "./ContactMap.css";

const ContactMap = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-5">
          <h2>Based In Pune, Serving Worldwide</h2>

          <p>
            We work with startups, businesses, and organizations across India and globally.
          </p>
        </div>

        <div className="map-wrapper">
          <iframe
            title="InSyllabus Softwares Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.0513785515996!2d73.85230447465507!3d18.646719265309866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7003ed1e4cb%3A0x77e150c54d13265b!2sTechnotree%20Engineers%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1780654868302!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
