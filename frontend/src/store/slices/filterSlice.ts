import { createSlice } from '@reduxjs/toolkit'
import { IFilterData } from './../../Interfaceses/IFilterData'
import titleReducer from './titleSlice'
import filterReducer from './filterSlice'
import { apiCallBegan } from '../actions/api'

const initialState: IFilterData = {
  generes: [],
  statuses: [],
  types: [],
  yearRange: {
    from: 0,
    to: 0,
  },
}
//сделать универсальный редьюсер
export const filterSlice = createSlice({
  name: 'titleFilter',
  initialState,
  reducers: {
    titleFilterRecevied: (state: any, action) => {
      state = action.payload
    },
  },
})

export const loadFilterData = () => {
  const apiData: any = {
    url: '/filterData',
    onSuccess: filterSlice.actions.titleFilterRecevied.type,
  }

  return apiCallBegan(apiData)
}

export default filterSlice.reducer
export const { titleFilterRecevied } = filterSlice.actions
