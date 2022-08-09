import React from 'react'
import { Tabs } from "antd";
import { Button, Row, Col } from 'react-bootstrap'
import RestaurantList from '../AllRestaurant/restaurantTable'
import AddRestaurant from '../RestaurantAdd/restaurantAdd'
import TableBookings from '../TableBookingListScreen/tableBookinglistScreen'
import ReservationReport from '../RestaurantTableBookingReport/ReservationReport'
import { Container } from 'react-bootstrap';





const { TabPane } = Tabs;


const RestaurantgementScreen = () => {



      return (
            <Container>
                  <div className="ml-3">
                        <h2 className="text-center m-2" style={{ fontSize: "35px" }}>Dining Location Management</h2>
                        <br />

                        <br />
                        <Tabs defaultActiveKey="1">
                              <TabPane tab="Dining Places List" key="1">
                                    <div className="row">
                                          <RestaurantList />

                                    </div>
                              </TabPane>
                              <TabPane tab="Add a new dining place" key="2">

                                    <div className="row">
                                          <AddRestaurant />
                                    </div>

                              </TabPane>

                              <TabPane tab="Dining Booking" key="3">


                                    <div className='row'>

                                          <TableBookings />

                                    </div>

                              </TabPane>

                              <TabPane tab="Dining Reservation Report" key="4">

                                    <div className="row">

                                          <ReservationReport />

                                    </div>

                              </TabPane>

                        </Tabs>
                  </div>
            </Container>
      )
}

export default RestaurantgementScreen
