import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [services, setServices] = useServices();
    return (
        <div>
            <Container>
             <Row xs={1} md={3} className="g-4" >
               {
                    services.map(service =>  <SingleService service={service}></SingleService>)
                }
              </Row>
           </Container>
        </div>
    );
};

export default Services;