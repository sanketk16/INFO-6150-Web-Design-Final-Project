import React, { useState, useEffect } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { login } from '../../actions/userAction'
import { Row, Col } from 'react-bootstrap'


const LoginScreen = ({ location, history }) => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')


      const dispatch = useDispatch()
      const userLogin = useSelector(state => state.userLogin)
      const { loading, error, userInfo } = userLogin

      const redirect = location.search ? location.search.split('=')[1] : '/'

      useEffect(() => {
            if (userInfo) {
                  history.push(redirect)
            }

      }, [history, userInfo, redirect])
     
      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(login(email, password))
      }


      return (
            <>
                  <div className="maincontainer">
                        <div class="container-fluid">
                              <div class="row no-gutter">

                                    <div class="col-md-6 d-none d-md-flex bg-image"></div>

                                    <div class="col-md-6 bg-light">
                                          <div class="login d-flex align-items-center py-5">

                                                <div class="container">
                                                      <div class="row">
                                                            <div class="col-lg-10 col-xl-7 mx-auto">
                                                                  <h3 class="display-4">Welcome, login to use our services.</h3>
                                                                  {error && <Message variant='danger'>{error}</Message>}
                                                                  {loading && <Loader />}                                                                  
                                                                  <form onSubmit={submitHandler} >
                                                                        <div class="form-group mb-3">
                                                                              <input id="inputEmail" type="email" placeholder="Enter Email ID" required="" autofocus="" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control border-2 px-3" />
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="inputPassword" type="password" placeholder="Enter Password" required=""  value={password} onChange={(e) => setPassword(e.target.value)} class="form-control border-2 px-3 text-primary" />
                                                                        </div>
                                                                        {/* <div class="custom-control custom-checkbox mb-3">
                                                                              <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
                                                                              <label for="customCheck1" class="custom-control-label">Remember password</label>
                                                                        </div> */}
                                                                        <button type="submit" class="btn btn-info btn-inline text-uppercase rounded-pill shadow-sm">Sign in</button>
                                                                        <div class="text-center d-flex justify-content-between mt-4"><p>First Time Visiting? <a href="/signup" class=" text-muted">
                                                                              <u>Register Here</u></a></p></div>
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

export default LoginScreen