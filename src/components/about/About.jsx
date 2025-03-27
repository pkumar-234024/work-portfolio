import React from "react";
import {
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import profileImage from "../../assets/profile-image.png"; // Make sure to add your image
import resumePDF from "../../assets/SDE_praveen.pdf"; // Add your resume PDF
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          {/* Left Column */}
          <div className="about-left">
            <div className="profile-image-container">
              <img
                src={profileImage}
                alt="Praveen Kumar"
                className="profile-image"
              />
            </div>
            <h2 className="profile-name">Praveen Kumar</h2>
            <p className="profile-title">Software Developer</p>
            <a href={resumePDF} download className="download-resume">
              <FaDownload className="download-icon" />
              Download Resume
            </a>
          </div>

          {/* Right Column */}
          <div className="about-right">
            <h3 className="section-title">About Me</h3>

            <p className="about-description">
              I am a passionate software developer with expertise in .NET,
              React, and modern web technologies. With a strong foundation in
              full-stack development, I strive to create efficient and scalable
              solutions that make a difference.
            </p>

            <div className="personal-info">
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div className="info-content">
                  <span className="info-label">Email</span>
                  <span className="info-text">praveen991210@gmail.com</span>
                </div>
              </div>

              <div className="info-item">
                <FaPhone className="info-icon" />
                <div className="info-content">
                  <span className="info-label">Phone</span>
                  <span className="info-text">+91 8005241110</span>
                </div>
              </div>

              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div className="info-content">
                  <span className="info-label">Location</span>
                  <span className="info-text">Noida, UP, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
