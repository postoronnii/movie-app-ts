import { createSlice } from '@reduxjs/toolkit'

export type AddMovieState = {
  value: boolean
}

const initialState: AddMovieState = {
  value: false,
}

export const addMovieSlice = createSlice({
  name: 'addMovie',
  initialState,
  reducers: {
    openModal: (state) => {
      state.value = true
    },
    closeModal: (state) => {
      state.value = false
    },
  },
})

export const { openModal, closeModal } = addMovieSlice.actions

export default addMovieSlice.reducer
