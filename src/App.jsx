import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import Testimonials from "./components/testimonials/Testimonials";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Education from "./components/education/Education";
function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: false,
  //     mirror: true,
  //   });
  // }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
