import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        &copy; {new Date().getFullYear()} Ruby Devi | Frontend Developer
      </Container>
    </footer>
  );
};

export default Footer;
