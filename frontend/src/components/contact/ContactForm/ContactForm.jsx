import { useState } from "react";
import { submitContactForm } from "../../../api/contactApi";
import toast from "react-hot-toast";
import "./ContactForm.css";

const ContactForm = () => {
  const MAX_MESSAGE_LENGTH = 1000;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await submitContactForm(formData);

      toast.success(res.message);

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Contact Us</h2>

          <p>
            Send us a message and our team will get back to you as soon as
            possible.
          </p>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              <div className="col-md-6">
                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label>Phone</label>

                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <label>Message</label>

                <textarea
  rows="6"
  name="message"
  className="form-control"
  placeholder="Write your message here..."
  value={formData.message}
  onChange={handleChange}
  maxLength={MAX_MESSAGE_LENGTH}
  required
/>
              </div>
              <div className="message-counter">
  {formData.message.length}/{MAX_MESSAGE_LENGTH}
</div>

              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Send Message"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
