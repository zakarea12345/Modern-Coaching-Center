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
               <p>Mathematics is very easy if you want to learn.</p> 
             </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className = "d-block w-100"
                src={image1}
                alt="First slide"
              />
             <Carousel.Caption>
               <p className="text-primary">Chemistry is very easy if you want to learn.</p> 
             </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className = "d-block w-100"
                src={image2}
                alt="First slide"
              />
             <Carousel.Caption>
               <p>Physics is very easy if you want to learn.</p> 
             </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    );
};

export default SlideShow;