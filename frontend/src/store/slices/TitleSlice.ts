import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan, IApiData } from '../actions/api'
import { ITitleBase } from '../../Interfaceses/ITitleBase'
import { store } from '../store'
import { stat } from 'fs'
import { ITitleFilter } from '../../Interfaceses/ITitleFilter'
import filterToApi from '../../helperFunctions/FilterToApi'

interface TitleBaseSliceState {
  titleBases: Array<ITitleBase>
}

const initialState: TitleBaseSliceState = {
  titleBases: [],
}
export const titleSlice = createSlice({
  name: 'titleBases',
  initialState,
  reducers: {
    titleBasesRecevied: (state: TitleBaseSliceState, action) => {
      state.titleBases = action.payload
    },
  },
})

export default titleSlice.reducer
export const { titleBasesRecevied } = titleSlice.actions

export const loadTitleBases = (filter?: ITitleFilter) => {
  const params = typeof filter === 'undefined' ? null : filterToApi(filter)

  const apiData: IApiData = {
    url: '/titleBases',
    onSuccess: titleSlice.actions.titleBasesRecevied.type,
    params,
  }

  return apiCallBegan(apiData)
}
