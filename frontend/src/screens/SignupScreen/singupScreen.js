import React, {useState, useEffect} from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import { register } from '../../actions/userAction.js'
import Message from '../../components/Message.js'
import Loader from '../../components/Loader.js'
import Navbar from '../../components/Navbar/navbar.js'


const SignupScreen = ({ location, history }) => {


      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [confirmPassword, setConfirmPassword] = useState('')
      const [message, setMessage] = useState(null)

      const dispatch = useDispatch()

      const userRegister = useSelector(state => state.userLogin)
      const { loading, error, userInfo } = userRegister

      const redirect = location.search ? location.search.split('=')[1] : '/'

      useEffect(() => {
            if (userInfo) {
                  history.push(redirect)
            }

      }, [history, userInfo, redirect])

      const submitHandler = (e) => {
            e.preventDefault()
            if (password !== confirmPassword) {
                  setMessage('Password do not match')
                  Swal.fire('Error, passwords do not match.')
            }
            else {
                  dispatch(register(name, email, password))
            }
      }

      // const handleChangeEmail = (e) => {
      //       if (e.target.value.match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')!=null) {
      //             setEmail(e.target.value)
      //       }
      //       else {
      //             e.target.value = "";
      //             alert ("Invalid Email format");
                  
      //             // Swal.fire ('Email format invalid', 'error');
      //       }
      // }
      return (
            
            <>
  
                  <div className="maincontainer">
                        <div class="container-fluid">
                              <div class="row no-gutter">


                                    <div class="col-md-6 d-none d-md-flex bg-image1"></div>

                                    <div class="col-md-6 bg-light">
                                          <div class="signup d-flex align-items-center py-5">

                                                <div class="container">
                                                      <div class="row">
                                                            <div class="col-lg-10 col-xl-7 mx-auto">
                                                                  <div className='nm'>
                                                                  {error && <Message variant='danger'>{message}</Message>}
                                                                  {error && <Message variant='danger'>{error}</Message>}
                                                                  {loading && <Loader />}
                                                                  </div>
                                                                  <center>
                                                
                                                                  <h3 className='display-4'>Create an account with us</h3>
                                                                  </center>
                                                                  <br/>
                                                                  
                                                                  <form onSubmit={submitHandler}>
                                                                        <div class="form-group mb-3">
                        
                                                                              < input id="inputName" type="text" placeholder="Enter Your Full Name" required="" autofocus="" className="form-control shadow-sm px-4" 
                                                                              value={name}
                                                                              onChange={(e) => setName(e.target.value)} />
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              
                                                                              <input id="inputEmail" type="email" placeholder="Enter Your Email ID" required="" class="form-control shadow-sm px-4 text-primary" 
                                                                              value={email}
                                                                              onChange = {(e) => setEmail(e.target.value)} />

                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              
                                                                              <input id="inputPassword" type="password" placeholder="Enter Password" required="" class="form-control shadow-sm px-4 text-primary" 
                                                                              value={password}
                                                                              onChange={(e) => setPassword(e.target.value)}/>
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              
                                                                              <input id="inputPassword" type="password" placeholder="Confirm Password" required="" class="form-control shadow-sm px-4 text-primary" 
                                                                              value={confirmPassword}
                                                                              onChange={(e) => setConfirmPassword(e.target.value)}/>
                                                                        </div>
                                                                        <br/>
                                                                        <button type="submit" class="btn btn-info btn-inline text-uppercase rounded-pill shadow-sm">Sign up</button>

                                                                        
                                                                        {/* <center><p class="text-muted mb-4">Create an Account using Social Links.</p></center>

                                                                        <div class="social-media">
                                                                              <a href="https://twitter.com/" class="social-icon">
                                                                                    <i class="fab fa-twitter"></i>
                                                                              </a>
                                                                              <a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp" class="social-icon">
                                                                                    <i class="fab fa-google"></i>
                                                                              </a>
                                                                              <a href="https://www.facebook.com/" class="social-icon">
                                                                                    <i class="fab fa-facebook"></i>
                                                                              </a>
                                                                              <a href="https://www.linkedin.com/home" class="social-icon">
                                                                                    <i class="fab fa-linkedin-in"></i>
                                                                              </a>
                                                                        </div> */}
                                                                  </form>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default SignupScreen