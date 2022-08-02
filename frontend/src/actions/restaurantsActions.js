import axios from 'axios'
import {
      REST_ALL_REQUEST,
      REST_ALL_SUCCESS,
      REST_ALL_FAIL,
      REST_BYID_REQUEST,
      REST_BYID_SUCCESS,
      REST_BYID_FAIL,
      REST_CREATE_REQUEST,
      REST_CREATE_SUCCESS,
      REST_CREATE_FAIL,
      REST_DELETE_REQUEST,
      REST_DELETE_SUCCESS,
      REST_DELETE_FAIL,
      REST_UPDATE_REQUEST,
      REST_UPDATE_SUCCESS,
      REST_UPDATE_FAIL,


} from '../constants/restaurentsConstants'


export const allRestaurants = () => async (dispatch) => {
      try {
            dispatch({
                  type: REST_ALL_REQUEST,
            })

            const { data } = await axios.get('/api/restaurents/')

            console.log(data)

            dispatch({
                  type: REST_ALL_SUCCESS,
                  payload: data
            })
      } catch (error) {
            console.log(error)

            dispatch({
                  type: REST_ALL_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,

            })
      }
}


export const getRestDetails = (id) => async (dispatch, getState) => {
    try {
          dispatch({
                type: REST_BYID_REQUEST,
          })

          const { data } = await axios.get(`/api/restaurents/${id}`)

          dispatch({
                type: REST_BYID_SUCCESS,
                payload: data
          })

    } catch (error) {
          dispatch({
                type: REST_BYID_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
          })
    }
}
