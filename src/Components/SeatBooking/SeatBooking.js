import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SeatBooking = () => {
    const history = useHistory()
    const handleConfirmBooking = () =>{
            history.push('/confirmSeat')
    }
    return (
        <div>
            <Form className="w-50 mx-auto border p-5 bg-secondary my-auto">
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Name:</Form.Label>
                 <Form.Control type="email" placeholder="Type Your Name" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Email address:</Form.Label>
                 <Form.Control type="email" placeholder="Type your email" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Date of Birthday:</Form.Label>
                 <Form.Control type="email" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Course Name:</Form.Label>
                 <Form.Control type="email" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Payment Code:</Form.Label>
                 <Form.Control type="email" />
               </Form.Group>
               <Button onClick={handleConfirmBooking}>Confirm Booking</Button>
            </Form>
        </div>
    );
};

export default SeatBooking;