import React, { useState } from "react";
import { Globe, Github } from "lucide-react";
import "./Projects.css";
import sonoraimages from "../images/projectimages/SonoraContruction.png";
import stimages from "../images/projectimages/Securitytraximg.jpg";
import wpimages from "../images/projectimages/whatsremimg.jpg";
import barimages from "../images/projectimages/barPatrolimg.jpg";
import bdspimages from "../images/projectimages/bdsp.jpg";
import pulldogimages from "../images/projectimages/clcimg.jpg";
import portfolioimages from "../images/projectimages/portfolioimg.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Sonora Construction",
      image: sonoraimages,
      shortDescription:
        "A multi-tenant construction management platform streamlining operations and client communication.",
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
        "Unified multiple websites into a single multi-functional platform, improving user experience.",
        "Integrated SyncFusion for UI components, reducing development time by 35%.",
        "Implemented multi-tenancy for seamless client domain switching.",
        "Enhanced user satisfaction by 40% with AJAX-driven rendering.",
      ],
      description:
        "Sonora Construction is a robust platform designed to optimize construction operations and improve client communication. It features multi-tenant capabilities, advanced UI components, and seamless domain switching for enhanced efficiency.",
      year: "2023 - Present",
      client: "Sonora Industries",
      role: "Full Stack Developer",
      duration: "8 months",
      website: "http://sonoratest.sonoraconstruction.net/",
      githubUrl: "",
    },
    {
      title: "Subscription WhatsApp Notifier",
      image: wpimages,
      shortDescription:
        "An automated system for subscription billing and WhatsApp notifications.",
      technologies: ["ASP.NET", "Web Forms", "C#", "ADO.NET", "SQL Server"],
      achievements: [
        "Automated daily billing cycles, reducing manual work by 80%.",
        "Integrated Gupshup API for automated WhatsApp notifications.",
      ],
      description:
        "This system automates subscription billing and enhances customer engagement through WhatsApp notifications. It streamlines operations and reduces manual intervention, ensuring timely communication with customers.",
      year: "2021 - 2022",
      client: "Subscription Services Ltd.",
      role: "Full Stack Developer",
      duration: "10 months",
      website: "",
      githubUrl: "",
    },
    {
      title: "Security Trax",
      image: stimages,
      shortDescription:
        "A security service management platform with advanced scheduling and reporting.",
      technologies: [
        "React",
        ".NET Core",
        "C#",
        "Bootstrap",
        "SQL Server",
        "Entity Framework",
      ],
      achievements: [
        "Developed a dynamic React.js dashboard for managing appointments and generating reports.",
        "Optimized RESTful APIs with .NET Core, improving data retrieval speed by 30%.",
      ],
      description:
        "Security Trax is an all-in-one platform for managing security services. It features advanced scheduling, reporting, and data communication through scalable RESTful APIs.",
      year: "2022 - 2023",
      client: "Security Trax Inc.",
      role: "Full Stack Developer",
      duration: "12 months",
      website: "https://st.bulldogsecurityservice.com/login",
      githubUrl: "",
    },
    {
      title: "Bar Patrol App",
      image: barimages,
      shortDescription:
        "A bar inventory management system with secure APIs and an intuitive UI.",
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
        "Flutter",
      ],
      achievements: [
        "Developed secure APIs with JWT-based authentication and authorization.",
        "Implemented CQRS and MediatR for improved performance and maintainability.",
        "Designed a Flutter-based mobile app for enhanced user experience.",
        "Leveraged AI tools to optimize inventory predictions and streamline order management.",
      ],
      description:
        "Bar Patrol App automates bar inventory management with secure APIs and a drag-and-drop UI. It simplifies order management and enhances inventory control for bar owners. AI tools were used to predict inventory needs and improve operational efficiency.",
      year: "2024 - Present",
      client: "Bar Patrol Inc.",
      role: "Full Stack Developer",
      duration: "12 months",
      website: "https://barpatrolonline.net/account/login",
      githubUrl: "",
    },
    {
      title: "React Portfolio Website",
      image: portfolioimages, // Replace with the actual image path
      shortDescription:
        "A personal portfolio website showcasing projects, skills, and achievements, built with React and AI tools.",
      technologies: ["React", "CSS", "Bootstrap", "HTML", "AI Tools"],
      achievements: [
        "Designed and developed a responsive portfolio website using React.",
        "Utilized AI tools to generate content and optimize the design process.",
        "Implemented dynamic project filtering and modal popups for detailed project views.",
      ],
      description:
        "This portfolio website is a personal project to showcase my skills, projects, and achievements. It features a responsive design, dynamic project filtering, and interactive modals for detailed project views. AI tools were used to streamline content creation and improve the overall design.",
      year: "2025",
      client: "Personal Project",
      role: "Frontend Developer",
      duration: "1 month",
      website: "https://work-portfolio.pages.dev/",
      githubUrl: "https://github.com/pkumar-234024/work-portfolio",
    },
    {
      title: "PullDog",
      image: pulldogimages, // Replace with the actual image path
      shortDescription:
        "An ASP.NET console application that scrapes data from Redfin and uploads it to Salesforce.",
      technologies: [
        "C#",
        "ASP.NET",
        "SQL Server",
        "Salesforce",
        "Windows Scheduler",
      ],
      achievements: [
        "Developed a Windows Scheduler-based ASP.NET console application.",
        "Integrated Salesforce API for seamless data uploads.",
        "Configured the scheduler to run multiple times a day for real-time updates.",
      ],
      description:
        "PullDog is an ASP.NET console application that functions as a Windows Scheduler to scrape data from the Redfin website and upload it to Salesforce. The scheduler ensures data is updated multiple times a day, improving data accuracy and availability.",
      year: "2023",
      client: "Real Estate Solutions Inc.",
      role: "Backend Developer",
      duration: "6 months",
      website: "",
      githubUrl: "",
    },
    {
      title: "Bulldog Solar",
      image: bdspimages, // Replace with the actual image path
      shortDescription:
        "A Windows Scheduler-based ASP.NET console application for data integration with HubSpot.",
      technologies: [
        "C#",
        "ASP.NET Console Application",
        "SQL Server",
        "Twilio",
        "HubSpot",
        "Windows Scheduler",
      ],
      achievements: [
        "Developed a scheduler-based application to fetch and upload data to HubSpot.",
        "Integrated Twilio email services for lead notifications.",
        "Automated lead assignment to team members in HubSpot.",
      ],
      description:
        "Bulldog Solar is an ASP.NET console application that fetches data from an external API and uploads it to HubSpot at scheduled intervals. The application automates lead assignment and sends notifications via Twilio email services, streamlining the lead management process.",
      year: "2023",
      client: "Solar Energy Solutions Ltd.",
      role: "Backend Developer",
      duration: "5 months",
      website: "",
      githubUrl: "",
    },
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
                  <div className="info-item">
                    <h4>Year</h4>
                    <p>&nbsp;&nbsp;{selectedProject.year}</p>
                  </div>
                </div>
                <div className="web-repo-buttons">
                  {selectedProject.website && (
                    <a
                      href={selectedProject.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="web-repo-button left"
                    >
                      <Globe size={18} className="icon" />
                      Visit Website
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="web-repo-button right"
                    >
                      <Github size={18} className="icon" />
                      Visit Repo
                    </a>
                  )}
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
