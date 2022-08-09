import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './restaurantDisplay.css'
import Aos from 'aos'

Aos.init()
Aos.refresh()

const Rest = ({ restaurant }) => {
      return (
           
            <div data-aos="zoom-in-down" className='restaurant_container'>
                  <Card className='my-3 p-3 rounded card_container'>
                        <Link to={`/restaurant/${restaurant._id}`}>
                              <Card.Img className='card_img' src={restaurant.images[0]} variant='top' />
                        </Link>

                        <Card.Body>
                              <Link to={`/restaurant/${restaurant._id}`}>
                                    <Card.Title className='card_title'>{restaurant.name}</Card.Title>
                              </Link>
                        </Card.Body>
                  </Card>
            </div>
      )
}

export default Rest
