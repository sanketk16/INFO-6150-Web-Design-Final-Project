import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listRooms } from '../../actions/roomAction'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import logo from './bistro.png'

import { Container } from 'react-bootstrap'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

const RoomsReport = () => {

      const dispatch = useDispatch()

      let count = 1;
      let tot = 0;
      const listAllRooms = useSelector((state) => state.listAllRooms)
      const { loading, error, rooms } = listAllRooms

      useEffect(() => {
            dispatch(listRooms())
      }, [dispatch])
      const pdfExportComponent = useRef(null);

      const handleExportWithComponent = (event) => {
            pdfExportComponent.current.save();
      }

      return (
            <div>
                  {
                        loading ? (
                              <Loader />
                        ) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (
                              <>
                                    <Container style={{ alignItems: 'center' }} >



                                          <img src={logo} className='smallimg'></img>

                                          <hr className='df'></hr>
                                          <center> <h1>List of rooms with respective rent</h1></center>
                                          <br />
                                          <tr>
                                                <th style={{ paddingLeft: '10px' }}>Sr. No. </th>
                                                {/* <th style={{ paddingLeft: '10px' }}>ID</th> */}
                                                <th style={{ paddingLeft: '10px' }}>Room</th>
                                                <th style={{ paddingLeft: '10px' }}>Maximum people</th>
                                                <th style={{ paddingLeft: '10px' }}>Rent per day</th>
                                                <th style={{ paddingLeft: '10px' }}>Room Type</th>
                                          </tr>


                                          {rooms.map((rooms) => (
                                                <tr key={rooms._id}>
                                                      <td style={{ paddingLeft: '10px' }}>{tot = count++}</td>
                                                      {/* <td style={{ paddingLeft: '10px' }}>{rooms._id}</td> */}
                                                      <td style={{ paddingLeft: '10px' }}>{rooms.name}</td>
                                                      <center>  <td style={{ paddingLeft: '10px' }}>{rooms.maxcount}</td></center>
                                                      <td style={{ paddingLeft: '10px' }}>USD {rooms.rentperday}</td>
                                                      <td style={{ paddingLeft: '10px' }}>{rooms.type}</td>

                                                </tr>
                                          ))}
                                          <br />
                                          <p><b>Total Number of Rooms: {tot}</b></p>

                                    </Container>

                              </>
                        )
                  }
            </div>
      )
}

export default RoomsReport
