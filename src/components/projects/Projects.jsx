import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Sonora Construction",
      technologies: [
        ".NET MVC Core",
        "C#",
        "Entity Framework",
        "Ajax",
        "JavaScript",
        "SyncFusion",
        "SQL Server",
      ],
      achievements: [
        "Consolidated multiple websites into a single, multi-functional platform, improving user experience through a unified and streamlined interface",
        "Integrated SYNC FUSION for UI development, creating a user-friendly interface and reducing development costs by 35% through predefined features",
        "Implemented multitenancy feature enabling client domain switching from a single codebase",
        "Elevated user satisfaction by 40% through seamless rendering with AJAX",
      ],
    },
    {
      title: "Security Trax",
      technologies: [
        "React",
        ".NET Core",
        "C#",
        "Bootstrap",
        "SQL Server",
        "Entity Framework",
      ],
      achievements: [
        "Developed a React.js dashboard for appointment scheduling and security services report generation",
        "Designed and deployed scalable RESTful API using .NET Core with Entity Framework, achieving 30% improvement in data retrieval speed",
      ],
    },
    {
      title: "Subscription WhatsApp Notifier",
      technologies: ["ASP.NET", "Web Forms", "C#", "ADO.NET", "SQL Server"],
      achievements: [
        "Developed Windows service to automate billing cycle for subscriptions, reducing manual work by 80%",
        "Integrated Gupshup API for automated WhatsApp notifications via Windows service",
      ],
    },
    {
      title: "Bulldog Solar",
      technologies: [
        "ASP.NET Core",
        "MVC",
        "C#",
        "SQL Server",
        "Entity Framework",
        "Twilio",
      ],
      achievements: [
        "Developed Windows service to sync API data with Hubspot at scheduled intervals, eliminating manual work",
        "Designed and deployed RESTful API using .NET Core with Entity Framework for Twilio integration enabling SMS communication",
      ],
    },
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>

              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="achievements-list">
                {project.achievements.map((achievement, achieveIndex) => (
                  <li key={achieveIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
