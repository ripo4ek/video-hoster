import axios from 'axios'
import * as actions from '../actions/api'
import { EnhancedStore } from '@reduxjs/toolkit'
import { store } from '../store'
import queryString from 'query-string'
import qs from 'qs'

import { moment } from 'moment'

const api = (store) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action)

  next(action)
  const { url, method, data, onSuccess, onError, params } = action.payload
  try {
    const responce = await axios.request({
      baseURL: process.env.REACT_APP_API,
      url,
      method,
      data,
      params,
    })

    store.dispatch(actions.apiCallSuccess(responce.data))
    if (onSuccess) store.dispatch({ type: onSuccess, payload: responce.data })
  } catch (error) {
    store.dispatch(actions.apiCallFailed(error))

    if (onError) store.dispatch({ type: onError, payload: error })
  }
}

export default api
