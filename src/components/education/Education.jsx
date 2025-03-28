import React from "react";
import "./Education.css"; // We'll create this CSS file next
import upboard_logo from "../../assets/upboard_logo.png";
import bundelkhan_logo from "../../assets/bundelkhan_logo.png";

function Education() {
  const educationData = [
    {
      degree: "B.Tech (Computer Science & Engineering)",
      institution: "Bundelkhand University",
      year: "2017-2021",
      score: "CGPA— 7.5/10.0",
      logo: bundelkhan_logo, // You'll need to add this image
    },
    {
      degree: "Intermediate",
      institution: "Board Of High and Intermediate Education (U.P)",
      year: "March-2016",
      score: "Percentage—79%",
      logo: upboard_logo, // You'll need to add this image
    },
    {
      degree: "High School",
      institution: "Board Of High and Intermediate Education (U.P)",
      year: "March-2014",
      score: "Percentage—85%",
      logo: upboard_logo, // You'll need to add this image
    },
  ];

  return (
    <div className="education-container">
      <h2 className="education-heading" style={{ color: "white" }}>
        Education
      </h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="education-logo-container">
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="education-logo"
              />
            </div>
            <div className="education-details">
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-institution">{edu.institution}</h4>
              <div className="education-info">
                <span className="education-year">{edu.year}</span>
                <span className="education-score">{edu.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
