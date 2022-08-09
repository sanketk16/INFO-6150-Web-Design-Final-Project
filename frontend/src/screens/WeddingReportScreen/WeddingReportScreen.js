import React, { useEffect, useRef } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { allWeddings } from '../../actions/weddingAction.js'
import logo from './bistro.png'
import './weddingreport.css'
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const WeddingReport = (history) => {
    const dispatch = useDispatch()

    let count = 1
    let tot = 0

    const wedAll = useSelector((state) => state.wedAll)
    const { loading, error, weddings } = wedAll






    useEffect(() => {
        dispatch(allWeddings())
    }, [dispatch])

    const pdfExportComponent = useRef(null)

    const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save()


    }

    return (
        <>
            <div>
                <Row className=''>

                    <Col className='genr'>
                        <Button className='repo' primary={true} onClick={handleExportWithComponent}>Generate Report</Button>
                    </Col>
                </Row>
            </div>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                : (
                    <PDFExport ref={pdfExportComponent} paperSize="A3" margin='100'>
                        <div style={{ background: 'white' }}>
                            <Container className='tb' style={{ boxSizing: 'border-box' }}>

                                <Container className='justify-content-center' style={{ width: '50%' }}>
                                    <img style={{ width: '50px' }} src={logo} className='smallimg'></img>
                                </Container>

                                <p className='jt mt-4' ><b>~~~~~WEDDING HALL REPORT~~~~~</b></p>
                                <br /><center>
                                    <tr className='ptp'>
                                        <th style={{ paddingLeft: '20px' }}>Sr. No. </th>

                                        <th style={{ paddingLeft: '20px' }}>Hall name</th>
                                        <th style={{ paddingLeft: '20px' }}>Seating strength</th>
                                        <th style={{ paddingLeft: '20px' }}>Details</th>
                    
                                    </tr>


                                    {weddings.map((weddings) => (

                                        <tr className='tmmm' key={weddings._id} >
                                            <td style={{ paddingLeft: '10px' }}>{tot = count++}</td>

                                            <td style={{ paddingLeft: '10px' }}>{weddings.wedHallName}</td>
                                            <td style={{ paddingLeft: '10px' }}>{weddings.wedSeats}</td>
                                            <td style={{ paddingLeft: '10px' }}>{weddings.wedDes}</td>
                    
                                        </tr>

                                    ))}
                                </center>
                                <br />
            



                            </Container>
                        </div>
                    </PDFExport>
                )}


        </>
    )
}


export default WeddingReport