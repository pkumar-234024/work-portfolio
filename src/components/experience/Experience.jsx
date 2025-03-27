import React from "react";
import "./Experience.css"; // We'll create this for styling

function Experience() {
  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>

        <div className="experience-card">
          <div className="experience-header">
            <h3>Software Developer</h3>
            <div className="company-details">
              <span className="company-name">Intellisoft Technologies</span>
              <span className="location">Noida, UP</span>
            </div>
            <div className="duration">September 2021 - Present</div>
          </div>

          <ul className="achievements-list">
            <li>
              Led 40% improvement in project delivery efficiency and reduced
              development cycle time by 20%
            </li>
            <li>
              Orchestrated optimizations leading to a 20% boost in query
              performance and a 25% improvement in overall system performance
            </li>
            <li>
              Leveraged ASP.NET, MVC, C#, and Clean Architecture, adopting a
              Code-First approach, Database-First approach
            </li>
            <li>
              Mentored interns, fostering a 30% increase in their skills and
              capabilities
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
