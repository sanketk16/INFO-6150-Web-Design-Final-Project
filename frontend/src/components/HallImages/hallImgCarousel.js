import React from 'react';
import { Carousel } from 'react-bootstrap';

const hallCarouselContainer = () => {
    return (
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/02/17/05/53/room-2073428_960_720.jpg"
            alt="First slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2014/05/11/20/55/salle-des-fetes-342202_960_720.jpg"
            alt="Third slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2018/09/08/05/37/wedding-3661949_960_720.jpg"
            alt="Third slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
  
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
  
  export default hallCarouselContainer;