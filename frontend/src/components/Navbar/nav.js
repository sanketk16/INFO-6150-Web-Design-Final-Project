import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../Navbar/nav.css'


const Nav1 = () => {
      return (
            <Navbar className="py-1 justify-content-center nav_bar" >
                  <Nav >
                        < li class="nav-item" >
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/rooms'>Browse our stay collection </a>
                        </li>

                        < li class="nav-item" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/restaurants'>Dining and Drinks</a>
                        </li>

                        < li class="nav-item" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/foods'>Products for delivery</a>
                        </li>

                        < li class="nav-item" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/weddings'>Hall for special occasions</a>
                        </li>

                  </Nav>
            </Navbar >
      )
}

export default Nav1
