import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './gameSlices/gameSlice'

export const store = configureStore({
  reducer: {
  game: gameSlice,
},
})