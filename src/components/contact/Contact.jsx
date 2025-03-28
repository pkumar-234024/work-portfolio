import React, { useState } from "react";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = (name) => {
    setFocused((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleBlur = (name) => {
    setFocused((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title" style={{ color: "white" }}>
              Get in Touch
            </h2>
            <p className="contact-description">
              Feel free to reach out to me for any questions or opportunities.
              I'll get back to you as soon as possible.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  target="_blank"
                >
                  <FaEnvelope className="contact-icon" />
                </a>
                <span>praveen991210@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaUser className="contact-icon" />
                <span>Praveen Kumar</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div
                className={`input-container ${focused.name ? "focused" : ""}`}
              >
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                  required
                  placeholder="Your Name"
                />
              </div>
            </div>

            <div className="form-group">
              <div
                className={`input-container ${focused.email ? "focused" : ""}`}
              >
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                  required
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="form-group">
              <div
                className={`input-container ${
                  focused.message ? "focused" : ""
                }`}
              >
                <FaComment className="input-icon" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                  required
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit-button">
              <FaPaperPlane className="button-icon" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
