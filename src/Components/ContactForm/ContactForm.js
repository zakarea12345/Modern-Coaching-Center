import React from 'react';
import { Button, Form } from 'react-bootstrap';

// this is for crating a form where any one can ask me question and it will be show in contact page 
const ContactForm = () => {
    return (
        <div>
            <h1 className="text-primary text-center">Contact Me</h1>
            <Form className="w-50 mx-auto mb-2">
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="email" placeholder="Type Your Name" />
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>Your Message</Form.Label>
               <Form.Control as="textarea" rows={3} />
             </Form.Group>
             <Button> Submit </Button>
            </Form>
            
        </div>
    );
};

export default ContactForm;