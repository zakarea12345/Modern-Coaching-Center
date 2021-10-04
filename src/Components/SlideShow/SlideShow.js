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
            </Carousel.Item>
            <Carousel.Item>
              <img
                className = "d-block w-100"
                src={image1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className = "d-block w-100"
                src={image2}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
    );
};

export default SlideShow;