import React, { useEffect } from 'react';
import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aos from "aos";
function App() {
   useEffect(() => {
    Aos.init({ duration: 1200 }); // Initialize AOS with animation duration (optional)
  }, []);
  return (
    <>
      <MyNavbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
