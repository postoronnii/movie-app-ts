import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import genresReducer from './genresSlice'
import addMovieReducer from './addMovieSlice'
import submitModalReducer from './submitModalSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    genres: genresReducer,
    addMovie: addMovieReducer,
    submitModal: submitModalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
