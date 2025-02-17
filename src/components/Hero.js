import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa"; // Import the download icon

const Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center vh-100 text-white bg-dark">
      <Container className="text-center">
        <h1>
          Hello, I'm <span className="text-info">Ruby Devi</span>
        </h1>
        <h2>Frontend Developer | React Enthusiast</h2>
        
        {/* Buttons with spacing */}
        <div className="mt-3">
          <Button variant="info" href="#projects" className="mx-2">
            View My Work
          </Button>
          
          {/* Download Resume Button */}
          <Button
            variant="info"
            href="/myresume.pdf"  
            download="Ruby_Devi_Resume.pdf"
            className="mx-2"
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
