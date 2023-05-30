import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ExplorePage from 'scenes/explorePage'
import HomePage from 'scenes/homePage'
import LoginPage from 'scenes/loginPage'
import Navbar from 'scenes/navbar'
import ProfilePage from 'scenes/profilePage'
import { themeSettings } from './theme'
function App() {
  const mode = useSelector(state => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const isAuth = Boolean(useSelector(state => state.token))

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/profile/:username' element={isAuth ? <ProfilePage /> : <Navigate to='/login' />}></Route>
            <Route path='/explore' element={<ExplorePage />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
