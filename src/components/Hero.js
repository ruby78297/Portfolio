import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import "../../src/Skills.css";
import "aos/dist/aos.css"; // Import AOS styles
import Aos from "aos";
const Hero = () => {
    
  return (
    <section id="home" className="d-flex align-items-center vh-100 text-white bg-dark"   style={{

        color: 'black', // Optional: If you want to make sure text is white for better contrast
      }}>
      <Container className="text-center" data-aos="fade-up">
        <h1 data-aos="fade-right">
          Hello, I'm <span className="text-info" data-aos="fade-left">Ruby Devi</span>
        </h1>
        <h2>Frontend Developer | React Enthusiast</h2>

       
        <div className="d-flex flex-column flex-lg-row justify-content-center gap-3 mt-3">
          <Button 
            variant="info" 
            href="#projects" 
                      className=" mb-2 mb-lg-0 btn-dw"
                      data-aos="fade-right"
          >
            View My Work
          </Button>

          
          <Button
            variant="info"
            href="/Ruby_Devi_Resume.pdf" 
            download="Ruby_Devi_Resume.pdf"
                      className=" d-flex align-items-center justify-content-center btn-dw"
                      data-aos="fade-left"
          >
            <FaDownload className="me-2" />
            Download Resume
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
