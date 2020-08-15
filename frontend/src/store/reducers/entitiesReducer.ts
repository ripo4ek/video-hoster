import { combineReducers } from '@reduxjs/toolkit'
import titleReducer from '../slices/titleSlice'
import filterReducer from '../slices/filterSlice'

let rootReducer = combineReducers({
  titles: titleReducer,
  filter: filterReducer,
})

export default rootReducer
