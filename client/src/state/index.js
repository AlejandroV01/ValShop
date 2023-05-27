import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'dark',
  user: null,
  token: null,
  likes: [],
  openSignUpModal: false,
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
    setLikedSkins: (state, action) => {
      if (state.user) {
        state.user.likedSkins = action.payload.likedSkins
      } else {
        console.error('error in setLikedSkins')
      }
    },
    setOwnedSkins: (state, action) => {
      if (state.user) {
        state.user.ownedSkins = action.payload.ownedSkins
      } else {
        console.error('error in setOwnedSkins')
      }
    },
    setLikes: (state, action) => {
      state.likes = action.payload.likes
    },
    toggleSignUpModalTrue: state => {
      state.openSignUpModal = true
    },
    toggleSignUpModalFalse: state => {
      state.openSignUpModal = false
    },
    setTotalValue: (state, action) => {
      if (state.user) {
        state.user.totalValue += action.payload.value
      } else {
        console.error('error in setTotalValue')
      }
    },
  },
})

export const { setMode, setLogin, setLogout, setLikedSkins, setTotalValue, setOwnedSkins, setLikes, toggleSignUpModalTrue, toggleSignUpModalFalse } =
  authSlice.actions
export default authSlice.reducer
