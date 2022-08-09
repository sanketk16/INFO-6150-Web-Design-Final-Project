import React, {useState, useEffect} from 'react'
// import './conferenceInsert.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { conferenceAdd } from '../../actions/conferenceAction'
import Message from '../../components/Message.js'
import Loader from '../../components/Loader.js'
import { Form } from 'react-bootstrap'
import Swal from 'sweetalert2'


const ConInsertScreen = ({ location, history }) => {


      const [conName, setName] = useState('')
      const [conSeats, setSeats] = useState('')
      const [conDes, setDes] = useState('')
      const [conPrice, setPrice] = useState('')
      const [confeatures, setFeatures] = useState('')
      const [conImg1, setImg1] = useState('')
      const [conImg2, setImg2] = useState('')
      const [conImg3, setImg3] = useState('')
      const [uploading, setUploading] = useState(false)

      const dispatch = useDispatch()

      const conferenceInsert = useSelector(state => state.conferenceInsert)
      const { loading, error, conferenceInfo } = conferenceInsert

      useEffect(() => {
            if (conferenceInfo) {
                  Swal.fire('Successful', 'Successfully Inserted Conference Room', 'success').then(result => {
                        window.location.href = '/wedEveMgt'
                  })
            }
      }, [history, conferenceInfo])

      const submitHandler = (e) => {
            e.preventDefault()
                  dispatch(conferenceAdd( conName, conDes, conSeats, conPrice, confeatures, conImg1, conImg2, conImg3 ))
      }

      const uploadFileHandler1 = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            // const config = {
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            // }
            const { data } = await axios.post('http://localhost:6500/api/uploads/image', formData)
            setImg1(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    const uploadFileHandler2 = async (e) => {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('image', file)
      setUploading(true)

      try {
          // const config = {
          //     headers: {
          //         'Content-Type': 'multipart/form-data'
          //     }
          // }
          const { data } = await axios.post('http://localhost:6500/api/uploads/image', formData)
          setImg2(data)
          setUploading(false)
      } catch (error) {
          console.error(error)
          setUploading(false)
      }
  }

  const uploadFileHandler3 = async (e) => {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('image', file)
      setUploading(true)

      try {
          // const config = {
          //     headers: {
          //         'Content-Type': 'multipart/form-data'
          //     }
          // }
          const { data } = await axios.post('http://localhost:6500/api/uploads/image', formData)
          setImg3(data)
          setUploading(false)
      } catch (error) {
          console.error(error)
          setUploading(false)
      }
  }

      return (
            
            <>
                  <center>
                        <div class="container-fluid">

                                    
                                          

                                                <div class="container">
                                                      <div class="row">
                                                            <div class="col-lg-10 col-xl-7 mx-auto">
                                                                  <div className='nm'>
                                                                  {error && <Message variant='danger'>{error}</Message>}
                                                                  {loading && <Loader />}
                                                                  </div>
                                                                  <center>
                                                                  <h4>Insert Conference Rooms</h4>
                                                                  </center>
                                                                  <br/>
                                                                  
                                                                  <form onSubmit={submitHandler}>
                                                                        <div class="form-group mb-3">
                                                                              < input id="Enter Wedding Hall Name" type="text" placeholder="Enter Conference Room Name" required="" autofocus="" className="form-control " 
                                                                              value={conName}
                                                                              onChange={(e) => setName(e.target.value)} />
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input seats" type="text" placeholder="Enter Maximum Seatings" required="" class="form-control" 
                                                                              value={conSeats}
                                                                              onChange={(e) => setSeats(e.target.value)}/>
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input description" type="text" placeholder="Enter Description" required="" class="form-control" 
                                                                              value={conDes}
                                                                              onChange={(e) => setDes(e.target.value)}/>
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input description" type="number" placeholder="Enter Price" required="" class="form-control" 
                                                                              value={conPrice}
                                                                              onChange={(e) => setPrice(e.target.value)}/>
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input description" type="text" placeholder="Enter Features" required="" class="form-control" 
                                                                              value={confeatures}
                                                                              onChange={(e) => setFeatures(e.target.value)}/>
                                                                        </div>
                                                                        <br/>
                                                                        <Form.Group controlId='image'>
                                                                            <div className="form-group bn">
                                                                                <Form.Label>Add Image</Form.Label>
                                                                                <Form.Control type='text' className="form-control" placeholder='Enter Image URL'
                                                                                    value={conImg1}
                                                                                    onChange={(e) => setImg1(e.target.value)}
                                                                                ></Form.Control>
                                                                            </div>
                                                                            
                                                                            <Form.File id="file" label='Choose File' custom onChange={uploadFileHandler1}></Form.File>
                                                                            {uploading && <Loader />}
                                                                        </Form.Group>
                                                                        <br/>
                                                                        <Form.Group controlId='image'>
                                                                            <div className="form-group bn">
                                                                                <Form.Label>Add Image</Form.Label>
                                                                                <Form.Control type='text' className="form-control" placeholder='Enter Image URL'
                                                                                    value={conImg2}
                                                                                    onChange={(e) => setImg2(e.target.value)}
                                                                                ></Form.Control>
                                                                            </div>
                                                                            <Form.File id="file" label='Choose File' custom onChange={uploadFileHandler2}></Form.File>
                                                                            {uploading && <Loader />}
                                                                        </Form.Group>
                                                                        <br/>
                                                                        <Form.Group controlId='image'>
                                                                            <div className="form-group bn">
                                                                                <Form.Label>Add Image</Form.Label>
                                                                                <Form.Control type='text' className="form-control" placeholder='Enter Image URL'
                                                                                    value={conImg3}
                                                                                    onChange={(e) => setImg3(e.target.value)}
                                                                                ></Form.Control>
                                                                            </div>
                                                                            <Form.File id="file" label='Choose File' custom onChange={uploadFileHandler3}></Form.File>
                                                                            {uploading && <Loader />}
                                                                        </Form.Group>

                                                                        <br/>
                                                                        <button type="submit" class="btn btn-outline-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm">Submit</button>

                                                                        
                                                                  </form>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    
                              
                        
                        </center>
            </>
      )
}

export default ConInsertScreen