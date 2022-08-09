import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Row, Col, ListGroup } from 'react-bootstrap'
import { getRoomDetails } from '../../actions/roomAction.js'
import '../ViewRoomScreen/viewrooms.css'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import Aos from 'aos'
import 'aos/dist/aos.css'
Aos.init()
Aos.refresh()

const ViewRoomScreen = ({ match, history }) => {

      const dispatch = useDispatch()

      const roomDetails = useSelector((state) => state.roomDetails)
      const { loading, error, rooms } = roomDetails

      useEffect(() => {

            dispatch(getRoomDetails(match.params.id))
      }, [dispatch, match])


      return (
            <>
                  <div>
                        {loading ? (
                              <Loader />
                        ) : error ? (
                              <Message />
                        ) : (
                              <>
                                    <div className="container">
                                          <div className='bn' data-aos="zoom-in">
                                                <Row>
                                                      <Col md={12}>
                                                            <Carousel nextLabel="" prevLabel="">
                                                                  {rooms.imageUrls && rooms.imageUrls.map((url) => {
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
                                                                  <div className="jk">
                                                                        <h6>Bistro Hotel</h6>
                                                                        <h1> {rooms.name}</h1>
                                                                  </div>
                                                            </div>
                                                            <hr></hr>

                                                            <hr></hr>
                                                            <h6>About The Room</h6>
                                                            <p>{rooms.description}</p>

                                                            <h6>Features</h6>
                                                            <ul class="b">
                                                                  <li>{rooms.features1}</li>
                                                                  <li>{rooms.features2}</li>
                                                                  <li>{rooms.features3}</li>
                                                                  <li>{rooms.features4}</li>
                                                                  <li>{rooms.features5}</li>
                                                            </ul>


                                                      </Col>


                                                      <Col >
                                                            <p className='km'>
                                                                  <b>For reservation, please call (+94) 11 357 1446</b></p>
                                                            <ListGroup as="ul" align="center">
                                                                  <ListGroup.Item as="li" variant="secondary">
                                                                        <b>Details</b>
                                                                  </ListGroup.Item>
                                                                  <ListGroup.Item as="li" disabled><b>Max Count: </b> {rooms.maxcount}</ListGroup.Item>
                                                                  <ListGroup.Item as="li" disabled>
                                                                        <b>Room Type: </b> {rooms.type}
                                                                  </ListGroup.Item>
                                                                  <ListGroup.Item as="li" disabled >From <b>USD {rooms.rentperday}/= </b>Average Per Night</ListGroup.Item>
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

export default ViewRoomScreen
