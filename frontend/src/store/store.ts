import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import api from './middleware/api'
import rootReducer from './reducers/rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), api],
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
