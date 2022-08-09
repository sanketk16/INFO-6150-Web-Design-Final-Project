import React from 'react'
import moment from "moment"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import '../LandingScreen/landing.css'

AOS.init({
      duration: '2000'
});

const LandingScreen = () => {
      return (
            <div className="">
                  <div className="landing row justify-content-center text-center bg-image">
                        <div className="col-md-9 my-auto">
                              <h2 style={{ color: "white", fontSize: "130px" }} data-aos='zoom-in'>Bistro Hotel</h2>
                              <h1 style={{ color: "white" }} data-aos='zoom-out' >Experience the best lounge and dining facilities</h1>
                              {/* <Link to="/homescreen">
                                    <button className='btn btn-outline-warning'>Find out more..</button>
                              </Link> */}
                        </div>



                  </div>

            </div>
      );
}

export default LandingScreen