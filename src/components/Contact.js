import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <Container>
        <h2 className="text-center">Contact Me</h2>
        <Form>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="info" type="submit" className="mt-3">Send</Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
