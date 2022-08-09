import React from 'react'
import { Container } from 'react-bootstrap';
import { Tabs } from "antd";
import { Button, Row, Col } from 'react-bootstrap'
import UserRoomBookings from '../UserRoomBookings/userRoomBookings';
import UserTableReservations from '../UserTableReservations/UserTableReservations';
import UserFoodOrders from '../UserFoodOrders/UserFoodOrders';

const { TabPane } = Tabs;

const UserProfile = () => {
      const user = JSON.parse(localStorage.getItem('userInfo'))

      return (
            <>
                  <Container>

                        <div className="ml-3">
                              <h2 className="text-center m-2" style={{ fontSize: "35px" }}>User Profile</h2>
                              <Row className='align-items-center'>
                                    <Col className='text-right'>

                                    </Col>
                              </Row>
                              <Tabs defaultActiveKey="1">
                                    <TabPane tab="Profile Info" key="1">
                                          <div className="row">

                                                <h1>Name : {user.name}</h1>
                                                <h1>Email : {user.email}</h1>
                                          </div>
                                    </TabPane>
                                    <TabPane tab="Rooms or Suite Bookings" key="2">
                                          <div className="row">

                                                <UserRoomBookings />
                                          </div>
                                    </TabPane>
                                    <TabPane tab="Cuisine Bookings" key="3">

                                          <div className="row">
                                                <UserTableReservations />
                                          </div>

                                    </TabPane>
                                    <TabPane tab="Hall Bookings" key="4">

                                          <div className="row">

                                          </div>

                                    </TabPane>
                                    <TabPane tab="Online Order Status" key="5">

                                          <div className="row">
                                                <UserFoodOrders />
                                          </div>

                                    </TabPane>
                              </Tabs>
                        </div>
                  </Container >
            </>
      )
}

export default UserProfile