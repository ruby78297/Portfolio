import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center vh-100 text-white bg-dark">
      <Container className="text-center">
        <h1>Hello, I'm <span className="text-info">Ruby Devi</span></h1>
        <h2>Frontend Developer | React Enthusiast</h2>
        <Button variant="info" href="#projects" className="mt-3">View My Work</Button>
      </Container>
    </section>
  );
};

export default Hero;
