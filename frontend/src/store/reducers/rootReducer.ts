import { combineReducers } from '@reduxjs/toolkit'
import entitiesReducer from './entitiesReducer'

let rootReducer = combineReducers({
  entities: entitiesReducer,
})

export default rootReducer
