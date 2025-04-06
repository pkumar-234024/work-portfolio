import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaPaperPlane,
  FaSpinner,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
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

  const [notification, setNotification] = useState({
    visible: false,
    success: false,
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    let timer;
    if (notification.visible) {
      timer = setTimeout(() => {
        setNotification({
          visible: false,
          success: false,
          message: "",
        });
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [notification.visible]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Create request body matching the new API structure
    const emailData = {
      toEmail: "praveen991210@gmail.com", // You can change this to formData.email if needed
      name: formData.name,
      body: formData.message,
    };

    try {
      // Using the new API endpoint from your curl example
      const response = await fetch(
        "https://rajshreepress.runasp.net/EmailSender",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(emailData),
        }
      );

      if (response.ok) {
        // Show success notification
        setNotification({
          visible: true,
          success: true,
          message: "Message sent successfully! Thank you for reaching out.",
        });

        // Reset form on success
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // Show error notification
        setNotification({
          visible: true,
          success: false,
          message: "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      // Show error notification
      setNotification({
        visible: true,
        success: false,
        message: "An error occurred. Please try again later.",
      });
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-section">
      {/* Modern notification alert */}
      {notification.visible && (
        <div
          className={`notification-alert ${
            notification.success ? "success" : "error"
          }`}
        >
          {notification.success ? (
            <FaCheckCircle className="notification-icon" />
          ) : (
            <FaExclamationTriangle className="notification-icon" />
          )}
          <span>{notification.message}</span>
          <button
            className="close-notification"
            onClick={() =>
              setNotification({ visible: false, success: false, message: "" })
            }
          >
            ×
          </button>
        </div>
      )}

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
                  rel="noopener noreferrer"
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
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                  disabled={isLoading}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="button-icon spinner" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="button-icon" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
