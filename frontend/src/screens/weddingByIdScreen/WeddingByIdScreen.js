import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Row, Col, ListGroup } from 'react-bootstrap'
import { weddingById } from '../../actions/weddingAction'
import './weddingById.css'
import { LinkContainer } from 'react-router-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'
Aos.init()
Aos.refresh()

const WeddingByIdScreen = ({ match, history }) => {

      const dispatch = useDispatch()

      const wedById = useSelector((state) => state.wedById)
      const { loading, error, weddings } = wedById

      useEffect(() => {

            dispatch(weddingById(match.params.id))
      }, [dispatch, match])


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
                                                {/* <Row>
                                                      <Col md={12}>
                                                            <img src = {weddings.wedImage}/>
                                                      </Col>


                                                </Row> */}
                                                <Row>
                                                      <Col md={12}>
                                                            <Carousel nextLabel="" prevLabel="">
                                                                 {weddings.wedImages && weddings.wedImages.map((url1) => {
                                                                       return (
                                                                        <Carousel.Item>
                                                                              <img
                                                                                    src={url1}
                                                                                    className="img-fluid d-block w-100"
                                                                                    style={{ height: "500px" }}

                                                                                    />
                                                                        </Carousel.Item>
                                                                       )
                                                                 })}
                                                                       
                                                                              
                                                                       
                                                                  
                                                            </Carousel>
                                                      </Col>


                                                </Row>


                                                <Row>
                                                      <Col >
                                                      <br/>
                                                            <div class="vl">
                                                                 <div className="hk">
                                                                  <h6 > Bistro Hotel </h6>
                                                                  <h1 > {weddings.wedHallName}</h1>
                                                                  </div>
                                                            </div>            <hr></hr>

                                                            <hr></hr>
                                                            <p>{weddings.wedDes}</p>
                                                            <br/>
                                                            <h6>Seat Strength: </h6> <p>{weddings.wedSeats} Seats</p>
                                                      </Col>


                                                      <Col className='form-fill'>                                                            
                                                            <ListGroup as="ul">
                                                                  <ListGroup.Item as="li" variant="secondary"></ListGroup.Item>
                                                                  <ListGroup.Item as="li" disabled><p>Please fill out the form so that we receive your event requirements</p></ListGroup.Item>
                                                                  <ListGroup.Item><LinkContainer to='/requestPropsal'><button type="button" className='submit'>Click Here</button></LinkContainer></ListGroup.Item>
                                                            </ListGroup>
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

export default WeddingByIdScreen
