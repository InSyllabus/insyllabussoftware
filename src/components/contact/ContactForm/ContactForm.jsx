import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="bg-light">

      <div className="container">

        <div className="text-center mb-5">

          <h2>
            Start Your Project
          </h2>

          <p>
            Tell us about your requirements.
          </p>

        </div>

        <div className="form-wrapper">

          <iframe
            title="Google Form"
            src="YOUR_GOOGLE_FORM_EMBED_URL"
            width="100%"
            height="900"
            frameBorder="0"
          />

        </div>

      </div>

    </section>
  );
};

export default ContactForm;