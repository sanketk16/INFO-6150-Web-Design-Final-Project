import React from 'react'
import './footer.css'


const Footer = () => {
    return(
        <>
        <footer>
        <div className= "container">
            <div className= "sec aboutus">
                <h4>About Us</h4>
                <p>Bistro is a website for booking hotel rooms online and by telephone. The company has 85 websites in 34 languages, and lists over 325,000 hotels in approximately 19,000 locations. Its inventory includes hotels and B&Bs, and some condos and other types of commercial lodging.</p>
                
                <ul className="sci">
                <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
            </ul>
            
            </div>

            <div className= "sec contact">
           <h4>Contact Us</h4>
           <ul className="info"> 
                <li>
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    <span>Boston, MA</span>
                </li>
                <li>
                    <span><i class="fas fa-phone-alt"></i></span>
                    <span>+1 (865) 400-2922</span>
                </li>
                <li>
                    <span><i class="fas fa-envelope"></i></span>
                    <span>bistro@gmail.com</span>
                </li>
                {/* <li>
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    <span>119/2, moratuwa</span>
                </li> */}
            </ul>
            </div>

            {/* <div className= "sec quickLinks">
                <h4>Created By</h4>
                <ul>
                    <li><a href="#">Shreya</a></li>
                    <li><a href="#">Shriya</a></li>
                    <li><a href="#">Harshita</a></li>
                    <li><a href="#">Ayushi</a></li>
                    <li><a href="#">Sanket</a></li>
                </ul>
           </div> */}
           
        </div>
        </footer>
        </>
    )
}

export default Footer