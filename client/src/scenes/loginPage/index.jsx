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
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import FlexBetween from 'components/FlexBetween'
import { useState } from 'react'
import Form from './Form'
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
    <Stack width='100%' height='calc(100% - 80px)' display='flex' padding={'5rem 6%'} flexDirection={'row'} justifyContent={'center'}>
      <Form></Form>
    </Stack>
  )
}

export default LoginPage
