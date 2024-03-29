import {Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import SingleService from '../SingleService/SingleService';
import SlideShow from '../SlideShow/SlideShow';
// home page 
const Home = () => {
    const [services] = useServices();
    return (
       <div>
         <div className="text-center">
           <small className="text-primary fw-bold">Teachers have three loves: love of learning, love of learners, and the love of bringing the first two loves together.If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people.</small>
         </div>
         <div>
           <SlideShow></SlideShow>
           <Container>
             <Row xs={1} md={4} className="g-4" >
               {
                    services.slice(0, 4).map(service =>  <SingleService key ={service.key} service={service}></SingleService>)
                }
              </Row>
           </Container>
            
          </div>
        </div>
        
    );
};

export default Home;