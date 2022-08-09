import React from 'react'
import { Carousel } from 'react-bootstrap';

import Room1 from '../assets/images/room1.jpg'
import Room2 from '../assets/images/room2.jpg'
import Room3 from '../assets/images/room3.jpg'
import Room4 from '../assets/images/room4.jpg'
import Room5 from '../assets/images/room5.jpg'

const RoomsCarousel = () => {
      return (
            <Carousel fade={true} pause={false}>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src="https://cdn.pixabay.com/photo/2018/01/23/06/58/modern-minimalist-lounge-3100785_960_720.jpg"
                              alt="First slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              {/* <h3>First slide label</h3> */}
                              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              // src={Room2}
                              src="https://cdn.pixabay.com/photo/2013/02/27/23/06/cafe-86681_960_720.jpg"
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              {/* <h3>Second slide label</h3> */}
                              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              // src={Room3}
                              src="https://cdn.pixabay.com/photo/2018/01/28/04/17/relaxing-3112750_960_720.jpg"
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              {/* <h3>Third slide label</h3> */}
                              {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              // src={Room4}
                              src="https://cdn.pixabay.com/photo/2016/02/26/16/16/chandelier-1224248_960_720.jpg"
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              {/* <h3>Third slide label</h3> */}
                              {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                  </Carousel.Item>
                  
            </Carousel>


      )
}

export default RoomsCarousel
