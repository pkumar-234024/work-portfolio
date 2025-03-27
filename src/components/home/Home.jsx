import React from "react";
import About from "../about/About";
import Projects from "../projects/Projects";
import Experience from "../experience/Experience";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Skills from "../skills/Skills";
import Education from "../education/Education";

function Home() {
  return (
    <>
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
