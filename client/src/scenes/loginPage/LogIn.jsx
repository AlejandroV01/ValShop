import { Email, Key, RememberMe, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, FormControl, Icon, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Typography, useTheme } from '@mui/material'
import FlexBetween from 'components/FlexBetween'
import React, { useState } from 'react'
import { colorTokens } from '../../theme'

const LogIn = ({ toggleLoginPage }) => {
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
          WELCOME BACK
        </Typography>
        <Typography variant='h1' margin='1rem 0'>
          Sign In.
        </Typography>
        <Typography variant='h5' color={theme.palette.neutral.mediumMain} marginBottom='2rem'>
          Don't have an account?{' '}
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
            Sign Up
          </Link>
        </Typography>
      </Box>
      <Box display='flex' flexDirection='column' gap='0.75rem' zIndex={10}>
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
            Login
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default LogIn
