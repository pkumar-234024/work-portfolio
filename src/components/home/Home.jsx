import React from "react";
import About from "../about/About";
import Projects from "../projects/Projects";
import Experience from "../experience/Experience";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Skills from "../skills/Skills";

function Home() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
