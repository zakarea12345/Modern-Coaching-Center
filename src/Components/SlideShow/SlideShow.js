import React from 'react';
import { Carousel } from 'react-bootstrap';
import image from '../../images/1.png';
import image1 from '../../images/2.png';
import image2 from '../../images/3.png' 


const SlideShow = () => {
    return (
        <div className="mb-5">
          <Carousel>
            <Carousel.Item>
              <img
                className = "d-block w-100"
                src={image}
                alt="First slide"
              />
             <Carousel.Caption>
               <p>Mathematics (from Greek: μάθημα, máthēma, 'knowledge, study, learning') includes the study of such topics as quantity (number theory),[1] structure (algebra),[2] space (geometry),[1] and change (analysis).</p> 
             </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className = "d-block w-100"
                src={image1}
                alt="First slide"
              />
             <Carousel.Caption>
               <p>Physics is the basic physical science. Until rather recent times physics and natural philosophy were used interchangeably for the science whose aim is the discovery and formulation of the fundamental laws of nature.</p> 
             </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className = "d-block w-100"
                src={image2}
                alt="First slide"
              />
             <Carousel.Caption>
               <p>Chemistry is the scientific study of the properties and behavior of matter.[1] It is a natural science that covers the elements that make up matter to the compounds composed of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances.</p> 
             </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    );
};

export default SlideShow;