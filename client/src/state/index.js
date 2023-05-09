import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'light',
  user: null,
  token: null,
  cart: ['item'],
  likes: [],
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMode: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
    setLogin: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    setLogout: state => {
      state.user = null
      state.token = null
    },
    setFavoriteSkins: (state, action) => {
      if (state.user) {
        state.user.favoriteSkins = action.payload.favoriteSkins
      } else {
        console.error('error in setFavoriteSkins')
      }
    },
    setCart: (state, action) => {
      state.cart = action.payload.cart
    },
    setLikes: (state, action) => {
      state.likes = action.payload.likes
    },
  },
})

export const { setMode, setLogin, setLogout, setFavoriteSkins, setCart, setLikes } = authSlice.actions
export default authSlice.reducer
