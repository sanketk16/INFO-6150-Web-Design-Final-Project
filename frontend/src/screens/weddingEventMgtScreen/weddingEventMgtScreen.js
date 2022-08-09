import React from 'react'
import { Tabs } from "antd";
import { Button, Row, Col } from 'react-bootstrap'
import WeddingListScreen from '../weddingListScreen/weddingListScreen'
import SignupScreen from '../WeddingInsertScreen/weddingInsertScreen'
import ConInsertScreen from '../conferenceInsertScreen/conferenceInsert'
import ConferenceListScreen from '../conferenceListScreen/conferenceListScreen'
import { Container } from 'react-bootstrap';
import ConferenceReport from '../ConferenceReport/ConferenceReport.js'
import WeddingReport from '../WeddingReportScreen/WeddingReportScreen.js'

const { TabPane } = Tabs;


const WedEventMgtScreen = () => {
    return (
          <Container>
                <div className="ml-3">
                      <h2 className="text-center m-2" style={{ fontSize: "35px" }}>WEDDING & CONFERENCE MANAGEMENT</h2>

                      <Tabs defaultActiveKey="1">
                            <TabPane tab="Event Hall List" key="1">
                                  <div className="row">
                                        <WeddingListScreen />

                                  </div>
                            </TabPane>
                            <TabPane tab="Add new hall" key="2">

                                  <div className="row">
                                        <SignupScreen />
                                  </div>

                            </TabPane>

                            <TabPane tab="Available hall list report" key="6">
                                  <div className="row">
                                        <WeddingReport/>

                                  </div>
                            </TabPane>
                            
                            
                      </Tabs>
                </div>
          </Container>
    )
}

export default WedEventMgtScreen