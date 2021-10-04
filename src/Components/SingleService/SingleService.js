import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleService = (props) => {
    const{courseTitle, price, img, mentor} = props.service;
    return (
        <div>
          <Col >
              <Card height="600px">
                 <Card.Img height="300px"  variant="top" src={img} />
               <Card.Body>
                <Card.Title>Course-Name:{courseTitle}</Card.Title>
                <Card.Title>Instructor:{mentor}</Card.Title>
                <Card.Text>Price:{price}</Card.Text>
              </Card.Body>
              </Card>
           </Col>
      </div>
    );
};

export default SingleService;