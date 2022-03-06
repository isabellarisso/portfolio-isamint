import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import React from "react";

function App() {
  return (
    <>
      <main className="text-sky-900 bg-stone-50 body-font">
        <Navbar />

        <About />
        <Skills />
        <Projects />

       {/*  <Contact /> */}
        <Footer />
      </main>
    </>
  );
}
export default App;
