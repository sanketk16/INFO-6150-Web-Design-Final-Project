import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselContainer = () => {
    return (
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2018/07/14/21/30/club-sandwich-3538455_960_720.jpg"
            alt="First slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/08/06/19/59/people-2595757_960_720.jpg"
            alt="Third slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2019/08/02/15/10/burger-4379863_960_720.jpg"
            alt="Third slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
  
  export default CarouselContainer;