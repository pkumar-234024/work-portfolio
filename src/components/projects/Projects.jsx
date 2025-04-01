import React, { useState } from "react";
import "./Projects.css";
import sonoraimages from "../images/projectimages/SonoraContruction.png";
import stimages from "../images/projectimages/Securitytraximg.jpg";
import wpimages from "../images/projectimages/whatsremimg.jpg";
import barimages from "../images/projectimages/barPatrolimg.jpg";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Sonora Construction",
      image: sonoraimages,
      shortDescription:
        "A modern construction management platform with a multi-tenant architecture for streamlined operations.",
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
        "Consolidated multiple websites into a unified, multi-functional platform, enhancing user experience with a streamlined interface.",
        "Integrated SyncFusion for UI development, reducing development time and costs by 35%.",
        "Implemented multi-tenancy to enable seamless client domain switching from a single codebase.",
        "Boosted user satisfaction by 40% through smooth, AJAX-driven rendering.",
      ],
      description:
        "A robust construction management system that optimizes operations and enhances client communication with multi-tenant capabilities.",
      year: "2023 - Present",
      client: "Sonora Industries",
      role: "Full Stack Developer",
      duration: "8 months",
    },
    {
      title: "Subscription WhatsApp Notifier",
      image: wpimages,
      shortDescription:
        "An automated notification system for subscription billing and WhatsApp alerts.",
      technologies: ["ASP.NET", "Web Forms", "C#", "ADO.NET", "SQL Server"],
      achievements: [
        "Developed a Windows service to automate the daily billing cycle for subscriptions, reducing manual work by 80%.",
        "Integrated the Gupshup API to send automated WhatsApp notifications through the Windows service.",
      ],
      description:
        "A subscription management system that automates billing and enhances customer engagement using WhatsApp notifications.",
      year: "2021 - 2022",
      client: "Subscription Services Ltd.",
      role: "Full Stack Developer",
      duration: "10 months",
    },
    {
      title: "Security Trax",
      image: stimages,
      shortDescription:
        "A security service management platform with advanced scheduling and reporting capabilities.",
      technologies: [
        "React",
        ".NET Core",
        "C#",
        "Bootstrap",
        "SQL Server",
        "Entity Framework",
      ],
      achievements: [
        "Developed a dynamic dashboard using React.js to manage appointments and generate detailed security reports.",
        "Designed and optimized a scalable RESTful API with .NET Core and Entity Framework, improving data retrieval speed by 30%.",
      ],
      description:
        "An all-in-one security service management system that streamlines scheduling, reporting, and enhances data communication via RESTful APIs.",
      year: "2022 - 2023",
      client: "Security Trax Inc.",
      role: "Full Stack Developer",
      duration: "12 months",
    },
    {
      title: "BarpatrolAPP",
      image: barimages,
      shortDescription:
        "A bar inventory management application with secure API and drag-and-drop UI.",
      technologies: [
        "ASP.NET Core Web API",
        "C#",
        "SQL Server",
        "Flutter",
        "CQRS",
        "MediatR",
        "JWT Authentication",
        "Dependency Injection",
        "SOLID Principles",
      ],
      achievements: [
        "Developed secure APIs using ASP.NET Core with JWT token-based authentication and authorization.",
        "Implemented CQRS and MediatR to improve system performance and maintainability.",
        "Designed a mobile app in Flutter to enhance user experience.",
      ],
      description:
        "A bar inventory management system that automates order management and enhances inventory control through secure APIs and an intuitive UI.",
      year: "2024 - Present",
      client: "Barpatrol Inc.",
      role: "Full Stack Developer",
      duration: "12 months",
    },
    // ... other projects
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title" style={{ color: "white" }}>
          Projects
        </h2>
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
                  {/* <div className="info-item">
                    <h4>Duration</h4>
                    <p>&nbsp;&nbsp;{selectedProject.duration}</p>
                  </div> */}
                  <div className="info-item">
                    <h4>Year</h4>
                    <p>&nbsp;&nbsp;{selectedProject.year}</p>
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Technologies Used</h3>
                  <hr style={{ border: "2px solid rgb(255, 255, 255)" }} />
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
                  <hr style={{ border: "2px solid rgb(255, 255, 255)" }} />
                  <ul className="achievements-list">
                    {selectedProject.achievements.map((achievement, idx) => (
                      <li key={idx} style={{ color: "black" }}>
                        {achievement}
                      </li>
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
