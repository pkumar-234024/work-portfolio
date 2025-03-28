import React, { useState } from "react";
import "./Projects.css";
import images from "../images/projectimages/sonora1.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Sonora Construction",
      image: images,
      shortDescription:
        "A modern construction management platform with multi-tenant architecture.",
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
        "Consolidated multiple websites into a single, multi-functional platform, improving user experience through a unified and streamlined interface.",
        "Integrated SyncFusion for UI development, reducing development costs by 35% through predefined features.",
        "Implemented a multi-tenancy feature, enabling client domain switching from a single codebase.",
        "Enhanced user satisfaction by 40% through seamless rendering with AJAX.",
      ],
      description:
        "A comprehensive construction management platform that streamlines operations and improves client communication.",
      year: "2023 - Present",
      client: "Sonora Industries",
      role: "Full Stack Developer",
      duration: "8 months",
    },
    {
      title: "Security Trax",
      image: images,
      shortDescription:
        "A security service management platform with scheduling and reporting features.",
      technologies: [
        "React",
        ".NET Core",
        "C#",
        "Bootstrap",
        "SQL Server",
        "Entity Framework",
      ],
      achievements: [
        "Developed a dashboard using React.js to create and schedule appointments and generate reports for security services.",
        "Designed and deployed a scalable RESTful API using .NET Core with Entity Framework, achieving a 30% improvement in data retrieval speed.",
      ],
      description:
        "A comprehensive security service management system that streamlines scheduling, reporting, and API communication.",
      year: "2022 - 2023",
      client: "Security Trax Inc.",
      role: "Full Stack Developer",
      duration: "12 months",
    },
    {
      title: "Subscription WhatsApp Notifier",
      image: images,
      shortDescription:
        "An automated notification system for subscription billing and WhatsApp alerts.",
      technologies: ["ASP.NET", "Web Forms", "C#", "ADO.NET", "SQL Server"],
      achievements: [
        "Developed a Windows service to automate the billing cycle per day for subscriptions, reducing 80% of manual work.",
        "Integrated the Gupshup API to send WhatsApp notifications using the Windows service.",
      ],
      description:
        "A subscription management system that automates billing and enhances customer engagement through WhatsApp notifications.",
      year: "2021 - 2022",
      client: "Subscription Services Ltd.",
      role: "Full Stack Developer",
      duration: "10 months",
    },
    {
      title: "Bulldog Solar",
      image: images,
      shortDescription:
        "An automated solar energy management system with API synchronization.",
      technologies: [
        "ASP.NET Core",
        "MVC",
        "C#",
        "SQL Server",
        "Entity Framework",
        "Twilio",
      ],
      achievements: [
        "Developed a Windows service to sync API data to HubSpot at scheduled intervals, eliminating 100% of manual work.",
        "Designed and deployed a scalable RESTful API using .NET Core with Entity Framework to facilitate communication with the Twilio messaging API for sending and receiving text messages.",
      ],
      description:
        "A solar management system that automates API synchronization and enhances communication through Twilio messaging.",
      year: "2020 - 2021",
      client: "Bulldog Solar Inc.",
      role: "Full Stack Developer",
      duration: "14 months",
    },
    // ... other projects
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="view-project">View Project</span>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <p className="project-description">
                  {project.shortDescription}
                </p>
                <div className="tech-stack">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-badge more">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <span>×</span>
            </button>

            <div className="modal-content">
              <div className="modal-hero">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className="modal-hero-content">
                  <h2>{selectedProject.title}</h2>
                  <p>{selectedProject.description}</p>
                </div>
              </div>

              <div className="modal-details">
                <div className="modal-info-grid">
                  <div className="info-item">
                    <h4>Role</h4>
                    <p>&nbsp;&nbsp;{selectedProject.role}</p>
                  </div>
                  <div className="info-item">
                    <h4>Duration</h4>
                    <p>&nbsp;&nbsp;{selectedProject.duration}</p>
                  </div>
                  <div className="info-item">
                    <h4>Year</h4>
                    <p>&nbsp;&nbsp;{selectedProject.year}</p>
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Technologies Used</h3>
                  <div className="technologies-grid">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="technology-item">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Key Achievements</h3>
                  <ul className="achievements-list">
                    {selectedProject.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
