import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'

const SingleService = (props) => {
    const{courseTitle, price, img, mentor} = props.service;
    const history =  useHistory();
    const handleSeatBooking = () => {
      history.push('/contact')
    }
    return (
        <div>
          <Col >
              <Card height="600px" className= "shadow-lg" >
                 <Card.Img height="300px"  variant="top" src={img} />
               <Card.Body>
                <Card.Title>Course-Name:{courseTitle}</Card.Title>
                <Card.Title>Instructor:{mentor}</Card.Title>
                <Card.Text>Price:{price}</Card.Text>
                <Button onClick={handleSeatBooking} 
                        className="border-none"
                >Book your seat.</Button>
              </Card.Body>
              </Card>
           </Col>
      </div>
    );
};

export default SingleService;