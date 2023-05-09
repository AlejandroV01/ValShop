import { Email, Key, RememberMe, Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
  useTheme,
} from '@mui/material'
import FlexBetween from 'components/FlexBetween'
import React, { useState } from 'react'
import { colorTokens } from '../../theme'
const SignUp = ({ toggleLoginPage }) => {
  const theme = useTheme()
  const neutralLight = theme.palette.neutral.light
  const dark = theme.palette.neutral.dark
  const background = theme.palette.background.default
  const primaryLight = theme.palette.primary.light
  const alt = theme.palette.background.alt
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <Box display='flex' flexDirection='column' alignItems='flex-start' zIndex={10}>
        <Typography variant='h5' color={theme.palette.neutral.mediumMain}>
          SIGN UP NOW
        </Typography>
        <Typography variant='h1' margin='1rem 0'>
          Create new account.
        </Typography>
        <Typography variant='h5' color={theme.palette.neutral.mediumMain} marginBottom='2rem'>
          Already have an account?{' '}
          <Link
            underline='none'
            color='primary'
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
            onClick={toggleLoginPage}
          >
            Log In
          </Link>
        </Typography>
      </Box>
      <Box display='flex' flexDirection='column' gap='0.75rem' zIndex={10}>
        <Box display='flex' gap='0.75rem'>
          <FormControl sx={{ flexGrow: '1' }} variant='outlined'>
            <InputLabel>First Name</InputLabel>
            <OutlinedInput
              type='text'
              endAdornment={
                <InputAdornment position='end'>
                  <Icon edge='end'>
                    <RememberMe />
                  </Icon>
                </InputAdornment>
              }
              label='First Name'
            ></OutlinedInput>
          </FormControl>
          <FormControl sx={{ flexGrow: '1' }}>
            <InputLabel>Last Name</InputLabel>
            <OutlinedInput
              type='text'
              endAdornment={
                <InputAdornment position='end'>
                  <Icon edge='end'>
                    <RememberMe />
                  </Icon>
                </InputAdornment>
              }
              label='Last Name'
            ></OutlinedInput>
          </FormControl>
        </Box>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <OutlinedInput
            type='email'
            endAdornment={
              <InputAdornment position='end'>
                <Icon edge='end'>
                  <Email />
                </Icon>
              </InputAdornment>
            }
            label='Email'
          ></OutlinedInput>
        </FormControl>
        <FormControl>
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton edge='end' onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          ></OutlinedInput>
        </FormControl>
        <Box>
          <Button variant='contained' size='large'>
            Create Account
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default SignUp
