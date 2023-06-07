import { BorderColor } from '@mui/icons-material'
import { Box, Button, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Formik } from 'formik'
import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { setLogin } from 'state'
import * as yup from 'yup'
const loginSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('required'),
  password: yup.string().required('required'),
})
const initialValuesLogin = {
  email: '',
  password: '',
}

const registerSchema = yup.object().shape({
  username: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  password: yup.string().required('required'),
  picturePath: yup.string(),
})

const initialValuesRegister = {
  username: '',
  email: '',
  password: '',
  picturePath: '',
}

const Form = () => {
  const [isLogin, setIsLogin] = useState(true)
  const { palette } = useTheme()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isNonMobile = useMediaQuery('(min-width: 600px)')

  const register = async (values, onSubmitProps) => {
    const formData = new FormData()
    for (let value in values) {
      formData.append(value, values[value])
    }
    formData.append(
      'picturePath',
      values.picturePath
        ? values.picturePath.name
        : `https://api.dicebear.com/6.x/fun-emoji/svg?seed=${values.email}&backgroundColor=059ff2,71cf62,d84be5,d9915b,f6d594,b6e3f4,c0aede,d1d4f9,fcbc34,ffd5dc,ffdfbf&backgroundType=solid,gradientLinear`
    )
    const savedUserResponse = await fetch('http://localhost:3001/auth/register', {
      method: 'POST',
      body: formData,
    })
    const savedUser = await savedUserResponse.json()
    if (savedUserResponse.status === 500) {
      toast.error(savedUserResponse.statusText, {
        position: 'bottom-right',
        theme: 'dark',
      })
      return
    }
    if (savedUser.msg === 'An account with that email already exists.') {
      toast.error('An account with that email already exists.', {
        position: 'bottom-right',
        theme: 'dark',
      })
      return
    }
    onSubmitProps.resetForm()
    if (savedUser) {
      setIsLogin(true)
      toast.success('Account Registered Successfully!', {
        position: 'bottom-right',
        theme: 'dark',
      })
    }
  }

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
    const loggedIn = await loggedInResponse.json()
    if (loggedIn.msg === 'Invalid credentials.') {
      toast.error('Invalid credentials.', {
        position: 'bottom-right',
        theme: 'dark',
      })
      return
    }
    if (loggedIn.msg === 'User does not exist.') {
      toast.error('User does not exist.', {
        position: 'bottom-right',
        theme: 'dark',
      })
      return
    }
    onSubmitProps.resetForm()
    if (loggedIn) {
      dispatch(setLogin({ user: loggedIn.user, token: loggedIn.token }))
      toast.success('Successfully Logged In!', {
        position: 'bottom-right',
        theme: 'dark',
      })
      navigate('/')
    }
  }

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps)
    if (!isLogin) await register(values, onSubmitProps)
  }

  return (
    <Stack flexDirection='column'>
      <Stack flexDirection='column' alignItems='flex-start' zIndex={10}>
        <Typography variant='h5' color={palette.neutral.mediumMain}>
          {isLogin ? 'WELCOME BACK' : 'SIGN UP NOW'}
        </Typography>
        <Typography variant='h1' margin='1rem 0'>
          {isLogin ? 'Sign in.' : 'Create new account.'}
        </Typography>
      </Stack>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display={'grid'}
              gap={'1rem'}
              gridTemplateColumns={'repeat(4, minmax(0, 1fr))'}
              sx={{ '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' } }}
            >
              {!isLogin && (
                <>
                  <TextField
                    label='Username'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.username}
                    name='username'
                    error={Boolean(touched.username) && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                    sx={{ gridColumn: 'span 4' }}
                  />
                  <Box gridColumn={'span 4'} border={`1px solid ${palette.neutral.medium}`} borderRadius={'5px'} p={'1rem'}>
                    <Dropzone acceptedFiles='.jpg,.jpeg,.png' multiple={false} onDrop={acceptedFiles => setFieldValue('picture', acceptedFiles[0])}>
                      {({ getRootProps, getInputProps }) => (
                        <Box {...getRootProps()} border={`2px dashed ${palette.primary.main}`} p={'1rem'} sx={{ '&hover': { cursor: 'pointer' } }}>
                          <input {...getInputProps()} />
                          {!values.picture ? (
                            <p>Add Picture Here (optional)</p>
                          ) : (
                            <Stack justifyContent={'space-between'} direction={'row'}>
                              <Typography>{values.picture.name}</Typography>
                              <BorderColor />
                            </Stack>
                          )}
                        </Box>
                      )}
                    </Dropzone>
                  </Box>
                </>
              )}
              <TextField
                label='Email'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name='email'
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                label='Password'
                type='password'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name='password'
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: 'span 4' }}
              />
            </Box>

            <Box>
              <Button
                fullWidth
                type='submit'
                sx={{
                  m: '2rem 0',
                  p: '1rem',
                  backgroundColor: palette.primary.main,
                  color: palette.background.alt,
                  '&:hover': { color: palette.primary.main, backgroundColor: palette.primary.dark },
                }}
              >
                {isLogin ? 'LOGIN' : 'REGISTER'}
              </Button>
              <Typography
                onClick={() => {
                  setIsLogin(!isLogin)
                  resetForm()
                }}
                sx={{
                  textDecoration: 'underlined',
                  color: palette.primary.main,
                  '&:hover': { cursor: 'pointer', color: palette.primary.light },
                  width: 'fit-content',
                }}
              >
                {isLogin ? "Don't have an account? Sign Up here." : 'Already have an account? Login here.'}
              </Typography>
            </Box>
          </form>
        )}
      </Formik>
    </Stack>
  )
}

export default Form
