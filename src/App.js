import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Testimonials from "./components/testimonials";
import JumpToTop from "./components/jumpToTop";

export default function App() {
  return (
    <main className="text-black bg-nintendoScheme-lightGray ">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <JumpToTop />
    </main>
  );
}
