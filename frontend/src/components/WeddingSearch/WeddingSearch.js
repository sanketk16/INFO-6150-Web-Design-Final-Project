import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterweddings } from '../../actions/weddingAction'



 const WedSearch = () => {

    const dispatch = useDispatch()
    const [searchKey, setSearchKey] = useState('')


    return (

        <>

            <div className='container'>
                <div className='row justify-content-center shadow-sm p-3 mb-5 bg-white rounded'>
                    <div className='col-md-3'>
                        <input value={searchKey} onChange={(e) => setSearchKey(e.target.value)} type="text" className='form-control' placeholder="What type of hall?" />
                    </div>

                    <div className='col-md-3 mt-2'>
                        <button className="btn btn-outline-success" style={{width: '35%' }} onClick={() => (dispatch(filterweddings(searchKey)))}>
                            Find
                        </button>
                    </div>

                </div>

            </div>

        </>

    )

}



export default WedSearch