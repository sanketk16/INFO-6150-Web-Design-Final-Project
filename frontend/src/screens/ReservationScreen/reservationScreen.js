import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Select, Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import FormContainer from '../../components/FormContainer'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { creatTableBooking } from '../../actions/tableBookinAction'
import { getRestDetails } from '../../actions/restaurantsActions'
import Swal from 'sweetalert2'
import moment from 'moment'
import Aos from 'aos'
import { v4 as uuidv4 } from 'uuid';

Aos.init()





const ReservationScreen = ({ match, history }) => {

   


      const dispatch = useDispatch()


      const createTbookings = useSelector((state) => state.createTbookings)
      const { loading, error, tbookings } = createTbookings

      const restDetails = useSelector((state) => state.restDetails)
      const { restaurants } = restDetails

   
      const [userid, setUserid] = useState(JSON.parse(localStorage.getItem('userInfo'))._id)
      const [userName, setUserName] = useState(JSON.parse(localStorage.getItem('userInfo')).name)
      
      const [reservationID, setReservation] = useState (restaurants.reservationID)
      const [restaurantid,setRestaurant] = useState(restaurants._id)
      const [restaurantName,setRestaurantName] = useState(restaurants.name)
      const [date, setDate] = useState('')
      const [phoneNo, setPhoneNo] = useState('')
      const [adults, setAdults] = useState(0)
      const [childrens, setChildrens] = useState(0)
      const [time, setTime] = useState('')
     

    

      useEffect(() => {
            if (tbookings) {
                  Swal.fire('Congrats', 'SUCCESSFULY', 'success').then(result => {
                        window.location.href = '/restaurants'
                  })
            }
            dispatch(getRestDetails(match.params.id))
      }, [history, tbookings, match])

      const handleChangePhNo = (e) => {
            if(e.target.value.match("^[0-9]*$")!=null) {
                  setPhoneNo(e.target.value)
            }
            else {
                  e.target.value = "";
                  alert ("Invalid Phone Number Format");
            }
      }

      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(creatTableBooking(userid,userName,restaurants._id,restaurants.name,date,phoneNo, adults, childrens, time ))
            // dispatch(creatTableBooking(reservationID, userName, restaurantName, date, phoneNo, adults, childrens, time));
      }



      
    
     
      return (
            <>
            <div data-aos="zoom-out">
                    <FormContainer>
                        <h1 style={{ textAlign: "center"}}>Booking Details</h1>
                        <br />
                        {loading && <Loader />}
                        {error && <Message variant='danger'>{error} </Message>}
                        {loading ? (
                              <Loader />
                        ) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (
                              <Form onSubmit={submitHandler} className="shadow p-3 mb-5 bg-white rounded">
                                    {/* <Form.Group controlId='userid'>
                                          <Form.Label>User ID</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder=''
                                                value={userid}
                                                onChange={(e) => setUserid(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group> */}

                                    
                                    {/* <Form.Group controlId='restaurantid'>
                                          <Form.Label>restaurant ID</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder=''
                                                value={restaurants._id}
                                                // restaurantid = {uuidv4()}
                                                // value={restaurantid}
                                                onChange={(e) => setRestaurant(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group> */}

                                    {/* <Form.Group controlId='reservationID'>
                                          <Form.Label>Reservation ID</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder=''
                                                // value={restaurants._id}
                                                // restaurantid = {uuidv4()}
                                                value={uuidv4()}
                                                onChange={(e) => setReservation(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group> */}

                                    <Form.Group controlId='username'>
                                          <Form.Label>User Name</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder=''
                                                value={userName}
                                                onChange={(e) => setUserName(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                  

                                     <Form.Group controlId='restaurantid'>
                                          <Form.Label>Cuisine Name</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder=''
                                                value={restaurants.name}
                                                onChange={(e) => setRestaurant(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='date'>
                                          <Form.Label>Date</Form.Label>
                                          <Form.Control
                                                type='date'
                                                placeholder='Date'
                                                value= {date}
                                                onChange={(e) => setDate(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='time'>
                                          <Form.Label>Timing</Form.Label>
                                          <Form.Control
                                                type='time'
                                                placeholder='At what time?'
                                                value={time}
                                                onChange={(e) => setTime(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='adults'>
                                          <Form.Label>No. of Adults</Form.Label>
                                          <Form.Control
                                                type='number'
                                                placeholder='Adults'
                                                value={adults}
                                                onChange={(e) => setAdults(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='childrens'>
                                          <Form.Label>No. of minors</Form.Label>
                                          <Form.Control
                                                type='number'
                                                placeholder='Childrens '
                                                value={childrens}
                                                onChange={(e) => setChildrens(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='phoneNo'>
                                          <Form.Label>Phone Number</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Phone number'
                                                value={phoneNo}
                                                onChange={(e) => handleChangePhNo(e)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Button type='submit' variant='primary' style={{ width: "100%", height: "35px" }} >
                                          CONFIRM
                                    </Button>
                              </Form>
                        )}
                  </FormContainer>
                  </div>
            </>
      )
}

export default ReservationScreen