import { createAction } from '@reduxjs/toolkit'
import * as Redux from 'redux'

export const apiCallBegan = createAction<IApiData>('api/CallBegan')
export const apiCallSuccess = createAction<object>('api/CallSuccess')
export const apiCallFailed = createAction<object>('api/CallFailed')

export interface IApiData {
  url: string
  onSuccess?: string
  onError?: string
  method?: string
  data?: any
  params?: any
}
