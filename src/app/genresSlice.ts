import { createSlice } from '@reduxjs/toolkit'

const genresSlice = createSlice({
  name: 'genres',
  initialState: ['all', 'documentary', 'comedy', 'horror', 'crime'],
  reducers: {},
})

export const {} = genresSlice.actions

export default genresSlice.reducer
