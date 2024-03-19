import { createSlice } from '@reduxjs/toolkit'

export type SubmitModalState = {
  value: boolean
}

const initialState: SubmitModalState = {
  value: false,
}

export const submitModalSlice = createSlice({
  name: 'submitModal',
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

export const { openModal, closeModal } = submitModalSlice.actions

export default submitModalSlice.reducer
