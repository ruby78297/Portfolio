import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCode, FaProjectDiagram, FaTools } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <h2  className="text-center mb-5"
          style={{ color: "black", fontSize: "2.5rem", fontWeight: "bold" }}>About Me</h2>
        <Row className="align-items-center">
          
          <Col md={6} className="text-center text-md-start ">
            <h3 className="text-primary">Frontend Developer</h3>
            <p className="lead">
              I'm a skilled frontend developer with <b>3+ years of experience</b> in building dynamic and scalable web applications.
            </p>
            <p>
              I specialize in React.js, Next.js, Redux, Bootstrap, Material-UI and API integration to create seamless user experiences.
            </p>
          </Col>

          
          <Col md={6}>
            <Row>
              {/* UI Development */}
              <Col md={6}>
                <Card className="mb-3 shadow-sm">
                  <Card.Body className="text-center">
                    <FaCode size={40} className="text-primary mb-2" />
                    <Card.Title>UI Development</Card.Title>
                    <Card.Text>
                      React.js, Next.js, Material UI, Bootstrap, Flexbox, CSS3
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* API Integration */}
              <Col md={6}>
                <Card className="mb-3 shadow-sm">
                  <Card.Body className="text-center">
                    <FaProjectDiagram size={40} className="text-success mb-2" />
                    <Card.Title>API Integration</Card.Title>
                    <Card.Text>
                      REST APIs, GraphQL, Axios, Fetch, Authentication
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Tools & Tech */}
              <Col md={12}>
                <Card className="mb-3 shadow-sm">
                  <Card.Body className="text-center">
                    <FaTools size={40} className="text-warning mb-2" />
                    <Card.Title>Tools & Technologies</Card.Title>
                    <Card.Text>
                      Git, JIRA, TypeScript, Redux, Hooks, Responsive Design
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
