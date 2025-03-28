import React from "react";
import {
  FaCode,
  FaReact,
  FaDatabase,
  FaTools,
  FaLaptopCode,
  FaBrain,
  FaJava,
  FaGit,
} from "react-icons/fa";
import { DiDotnet, DiDatabase } from "react-icons/di";
import { BiCodeAlt } from "react-icons/bi";
import { AiFillApi } from "react-icons/ai";
import { MdArchitecture } from "react-icons/md";
import { BsFiletypeXml, BsBootstrap } from "react-icons/bs";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "C#", icon: <DiDotnet /> },
        { name: "Java", icon: <FaJava /> },
        { name: "SQL Server", icon: <DiDatabase /> },
      ],
    },
    {
      title: "Frontend Technologies",
      icon: <FaReact />,
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Bootstrap", icon: <BsBootstrap /> },
        { name: "EJ2 Syncfusion", icon: <BsFiletypeXml /> },
      ],
    },
    {
      title: "Backend Technologies",
      icon: <FaDatabase />,
      skills: [
        { name: "ASP.NET", icon: <DiDotnet /> },
        { name: "ASP.NET Core", icon: <DiDotnet /> },
        { name: "MVC", icon: <DiDotnet /> },
        { name: "ASP.NET WebForms", icon: <DiDotnet /> },
        { name: "Entity Framework", icon: <DiDotnet /> },
        { name: "REST API", icon: <AiFillApi /> },
        { name: "Telerik", icon: <BsFiletypeXml /> },
      ],
    },
    {
      title: "Tools & Environments",
      icon: <FaTools />,
      skills: [
        { name: "Visual Studio", icon: <DiDotnet /> },
        { name: "SSMS", icon: <DiDatabase /> },
        { name: "RDLC Reports", icon: <BsFiletypeXml /> },
        { name: "Bitbucket", icon: <FaGit /> },
        { name: "Sourcetree", icon: <FaGit /> },
        { name: "Git", icon: <FaGit /> },
        { name: "Selenium", icon: <BiCodeAlt /> },
      ],
    },
    {
      title: "Core Competencies",
      icon: <FaBrain />,
      skills: [
        { name: "OOPS", icon: <MdArchitecture /> },
        { name: "Data Structures & Algorithms", icon: <FaLaptopCode /> },
      ],
    },
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title" style={{ color: "white" }}>
          Technical Skills
        </h2>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
