import { Email, Key, RememberMe, Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  FormControl,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import FlexBetween from 'components/FlexBetween'
import { useState } from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
const LoginPage = () => {
  const theme = useTheme()
  const neutralLight = theme.palette.neutral.light
  const dark = theme.palette.neutral.dark
  const background = theme.palette.background.default
  const primaryLight = theme.palette.primary.light
  const alt = theme.palette.background.alt
  const [showLoginPage, setShowLoginPage] = useState(false)
  const toggleLoginPage = () => {
    setShowLoginPage(!showLoginPage)
  }
  return (
    <Box width='100%' height='calc(100% - 80px)' display='flex'>
      <Box display='flex' justifyContent='flex-start' flexDirection='column' padding={'5rem 6%'}>
        {!showLoginPage ? <SignUp toggleLoginPage={toggleLoginPage} /> : <LogIn toggleLoginPage={toggleLoginPage} />}
      </Box>
    </Box>
  )
}

export default LoginPage
