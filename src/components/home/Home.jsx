import React from "react";
import About from "../about/About";
import Projects from "../projects/Projects";
import Experience from "../experience/Experience";
import Contact from "../contact/Contact";
import Skills from "../skills/Skills";
import Education from "../education/Education";
import Acheivement from "../acheivement/Acheivement";

function Home() {
  return (
    <>
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Acheivement />
      <Contact />
    </>
  );
}

export default Home;
