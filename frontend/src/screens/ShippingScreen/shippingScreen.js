import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
// import { Form, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import CheckoutSteps from '../../components/CheckoutSteps/checkoutSteps'
import { saveShippingAddress } from '../../actions/cartAction'

const ShippingScreen = ({ history }) => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }

    const handleChangeCityName = (e) => {
        if(e.target.value.match("^[a-zA-Z ]*$")!=null) {
            setCity (e.target.value)
        }
        else {
            e.target.value = "";
            alert ('Invalid City Name');
        }
    }

    const handleChangeCountryName = (e) => {
        if(e.target.value.match("^[a-zA-Z ]*$")!=null) {
            setCountry (e.target.value)
        }
        else {
            e.target.value = "";
            alert ('Invalid Country Name');
        }
    }

    const handleChangeZipcode = (e) => {
        if(e.target.value.match("^[0-9]*$")!=null) {
            setPostalCode (e.target.value)
        }
        else {
            e.target.value = "";
            alert ('Invalid Zipcode');
        }
    }
    

    //shipping details form

    return (

        <div className="container">
            <div className='op' data-aos="zoom-in">

                <FormContainer>
                    <CheckoutSteps step1 step2 />
                    <h1 style={{}}>Shipping</h1>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='address' className='py-1'>
                            <Form.Label>Enter Address</Form.Label>
                            <Form.Control type='text' placeholder='Enter address' value={address} required onChange={(e) => setAddress(e.target.value)}></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please enter valid address info.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId='city' className='py-2'>
                            <Form.Label>Enter City Name</Form.Label>
                            <Form.Control type='text' placeholder='Enter City Name' value={city} required onChange={(e) => handleChangeCityName(e)}></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId='country' className='py-2'>
                            <Form.Label>Enter Country Name</Form.Label>
                            <Form.Control type='text' placeholder='Enter country' value={country} required onChange={(e) => handleChangeCountryName(e)}></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid country name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId='postalCode' className='py-2'>
                            <Form.Label>Enter Zipcode</Form.Label>
                            <Form.Control type='text' placeholder='Enter zipcode' value={postalCode} required onChange={(e) => handleChangeZipcode(e)}></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zipcode value.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <center>
                            <Form.Group className='py-3'>
                                <button className='btn btn-warning'>
                                    Next
                                </button>
                            </Form.Group>
                        </center>
                    </Form>
                </FormContainer>
            </div>
        </div >


    )
}

export default ShippingScreen