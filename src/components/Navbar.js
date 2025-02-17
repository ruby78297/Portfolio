import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Ruby Devi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{fontSize:"1.2rem"}}>Home</Nav.Link>
            <Nav.Link href="#about" style={{fontSize:"1.2rem"}}>About</Nav.Link>
            <Nav.Link href="#skills" style={{fontSize:"1.2rem"}}>Skills</Nav.Link>
            <Nav.Link href="#projects" style={{fontSize:"1.2rem"}}>Projects</Nav.Link>
            <Nav.Link href="#contact" style={{fontSize:"1.2rem"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
