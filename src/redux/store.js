import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlise'

//Хранилище
export const store = configureStore({   
  reducer: {filter},
})


