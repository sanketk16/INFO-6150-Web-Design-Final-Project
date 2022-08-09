import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { weddingAdd } from '../../actions/weddingAction.js'
import Message from '../../components/Message.js'
import Loader from '../../components/Loader.js'
import { Form, Col, Row, Button, Card } from 'react-bootstrap'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'
import FormContainer from '../../components/FormContainer.js'

const ReqScreen = () => {

      function submitHandler(e){
        e.preventDefault()
         
        emailjs.sendForm('service_qsuktma', 'template_0rztha8', e.target, 'rxLPHQolaDfLmUuwv')
        .then(res =>{
            console.log(res)
            Swal.fire('Successful', 'We have received your form. We will stay in Touch.', 'success').then(result => {
                  window.location.href = '/'
            })
        }).catch(err => console.log(err))
    }
     

      return (
            
      <>
      <br/>
      <center><h2>Request a proposal</h2>
      <br/>
      </center>
      <FormContainer>
            
                  <form onSubmit={submitHandler} class="row g-3">
                  <h4>Contact Information</h4>
                  
                  <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="inputPassword4" name="fName"/>
                  </div>

                  <div class="col-md-6">    
                  <label for="inputEmail4" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="inputEmail4" name="sName"/>
                  </div>

                  <div class="col-md-6">    
                  <label for="inputEmail4" class="form-label">E-mail ID</label>
                  <input type="email" class="form-control" id="inputEmail4" name="email"/>
                  </div>
                  <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Phone Number</label>
                  <input type="number" class="form-control" id="inputPassword4" name="phone"/>
                  </div>


                  <div class="col-12">
                  <label for="inputAddress" class="form-label">Address</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="ABC Road" name="address1"/>
                  </div>

                  <div class="col-md-6">
                  <label for="inputCity" class="form-label">City</label>
                  <input type="text" class="form-control" id="inputCity" name="city"/>
                  </div>

                  <div class="col-md-6">
                  <label for="inputZip" class="form-label">ZipCode</label>
                  <input type="text" class="form-control" id="inputZip" name="zip"/>
                  <br/>
                  <br/>
                  </div>
                  
                  <h4>Event Information</h4>

                  <div class="col-12">
                  <label for="inputAddress2" class="form-label">Event Name</label>
                  <input type="text" class="form-control" id="inputAddress2" name="evName"/>
                  </div>

                  <div class="col-md-6">    
                  <label for="inputEmail4" class="form-label">Event starting date</label>
                  <input type="date" class="form-control" id="inputEmail4" name="sDate"/>
                  </div>
                  <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Event ending date</label>
                  <input type="date" class="form-control" id="inputPassword4" name="eDate"/>
                  </div>

                  <div class="col-md-5">
                  <label for="inputPassword4" class="form-label">How many people are expected?</label>
                  <input type="text" class="form-control" id="inputPassword4" name="noAtend"/>
                  </div>

                  <div class="col-12">
                  <div class="form-check">
                        <br />
                        <input class="form-check-input" type="checkbox" id="gridCheck" required="true"/>
                        <label class="form-check-label" for="gridCheck">
                        
                              I agree to receive promotional mails from bistro.com                        
                        
                        <br/>
                        <br/>
                        </label>

                   

                  </div>
                  </div>
                  <div class="col-12">
                  <button type="submit" class="btn btn-lg btn-info">Submit</button>
                  </div>
                  </form>
</FormContainer>                  
      </> 
      )
}

export default ReqScreen