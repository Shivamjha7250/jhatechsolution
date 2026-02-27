import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import OurFamily from "./components/OurFamily"; 
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="bg-[#020617] text-white font-poppins selection:bg-blue-500/30">

     
      <Navbar />

      <main>
        
        <Hero />
        <About />
        <Services />
       <Achievements />
        <Projects />
        <OurFamily />
        <Contact />
        <Careers />
        <Footer />
        
      </main>

    </div>
  );
}

export default App;