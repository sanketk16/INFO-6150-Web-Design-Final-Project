import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Row, Col, ListGroup, Form, Button } from 'react-bootstrap'
import { getRestDetails } from '../../actions/restaurantsActions'
import './restDetails.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
Aos.init()
Aos.refresh()

const RestaurantDetail = ({ match, history }) => {

    const dispatch = useDispatch()

    const restDetails = useSelector((state) => state.restDetails)
    const { loading, error, restaurants } = restDetails

    useEffect(() => {

        dispatch(getRestDetails(match.params.id))
    }, [dispatch, match])




    const bookNowHandler = () => {
        history.push(`/bookNow/${match.params.id}`)
    }


    return (
        <>
            <div>
                {loading ? (
                    <h1>loading...</h1>
                ) : error ? (
                    <h1>Error....</h1>
                ) : (
                    <>
                        <div className="container">
                            <div className='bn' data-aos="zoom-in">
                                <Row>
                                    <Col md={12}>
                                        <Carousel nextLabel="" prevLabel="">
                                            {restaurants.images && restaurants.images.map((url) => {
                                                return (
                                                    <Carousel.Item>
                                                        <img
                                                            src={url}
                                                            className="img-fluid d-block w-100"
                                                            style={{ height: "500px" }}
                                                        />
                                                    </Carousel.Item>
                                                );
                                            })}
                                        </Carousel>


                                    </Col>


                                </Row>

                                <Row>
                                    <Col >
                                        <br></br>
                                        <div class="vl">
                                            <div className="title">
                                                <h6>Bistro Hotels</h6>
                                                <h1> {restaurants.name}</h1>
                                            </div>
                                        </div>
                                        <hr></hr>

                                        <div className="about">
                                            
                                            <p>Location: {restaurants.location}</p>
                                            <br></br>
                                            <p>Lunch Timings: 12 noon to 3pm, Monday to Sunday</p>
                                            <br></br>
                                            <p>Dinner Timings: 6.00 pm to 10.00 pm, Monday to Sunday</p>
                                            <br></br>
                                            <p>Description: {restaurants.description}</p>
                                        </div>

                                        <Row>

                                        </Row>


                                    </Col>



                                    <Col className="de">

                                        <ListGroup.Item>
                                            <Button
                                                onClick={bookNowHandler}
                                                className='book-button'
                                                type='button'
                                                
                                            >
                                               Book A Seat
                                            </Button>
                                        </ListGroup.Item>


                                        <Row>



                                            <Form className="form">
                                                <div className="title">Name
                                                    <p >{restaurants.name}</p>
                                                </div>
                                                <div className="title">Type
                                                    <p >{restaurants.type}</p>
                                                </div>
                                                <div className="title">Tables
                                                    <p >{restaurants.tables}</p>
                                                </div>
                                                <div className="title">Phone Number
                                                    <p >{restaurants.phoneNo}</p>
                                                </div>
                                                <div className="title">Email
                                                    <p >{restaurants.email}</p>
                                                </div>
                                                <div className="title">Location
                                                    <p >{restaurants.location}</p>
                                                </div>
                                            </Form>




                                        </Row>



                                    </Col>


                                </Row>




                            </div>

                        </div>

                    </>
                )}

            </div>
        </>
    )
}

export default RestaurantDetail
