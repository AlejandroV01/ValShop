import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CartPage from 'scenes/cartPage'
import HomePage from 'scenes/homePage'
import LikePage from 'scenes/likePage'
import LoginPage from 'scenes/loginPage'
import Navbar from 'scenes/navbar'
import ProfilePage from 'scenes/profilePage'
import { themeSettings } from './theme'
function App() {
  const mode = useSelector(state => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path='/' element={<LoginPage />}></Route>
            <Route path='/home' element={<HomePage />}></Route>
            <Route path='/profile/:userId' element={<ProfilePage />}></Route>
            <Route path='/cart' element={<CartPage />}></Route>
            <Route path='/likes' element={<LikePage />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
