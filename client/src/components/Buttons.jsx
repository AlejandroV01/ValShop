import { Button, useTheme } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
export const PrimaryButton = ({ children, to, sx }) => {
  const navigate = useNavigate()
  const palette = useTheme().palette
  return (
    <a href={`/${to}`} onClick={e => e.preventDefault()} style={{ textDecoration: 'none' }}>
      <Button
        variant='contained'
        sx={{
          backgroundColor: palette.neutral.black,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          color: palette.neutral.light,
          fontWeight: 600,
          borderRadius: '5rem',
          fontSize: '0.85rem',
          position: 'relative',
          '&:before': {
            content: '""',
            zIndex: -1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: `linear-gradient(-45deg, ${palette.primary.main} 20%, #FF4454 100%)`,
            filter: 'blur(10px)',
            borderRadius: 'inherit',
          },
          '&:hover': {
            backgroundColor: palette.neutral.dark,
          },
          ...sx,
        }}
        onClick={() => navigate(`/${to}`)}
      >
        {children}
      </Button>
    </a>
  )
}

export const PrimaryButtonNoLink = ({ children, sx }) => {
  const palette = useTheme().palette
  return (
    <Button
      variant='contained'
      sx={{
        backgroundColor: palette.neutral.black,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        color: palette.neutral.light,
        fontWeight: 600,
        borderRadius: '5rem',
        fontSize: '0.85rem',
        position: 'relative',
        '&:before': {
          content: '""',
          zIndex: -1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `linear-gradient(-45deg, ${palette.primary.main} 20%, #FF4454 100%)`,
          filter: 'blur(10px)',
          borderRadius: 'inherit',
        },
        '&:hover': {
          backgroundColor: palette.neutral.dark,
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  )
}

export const SecondaryButton = ({ children, to }) => {
  const palette = useTheme().palette
  const navigate = useNavigate()
  return (
    <a href={`/${to}`} onClick={e => e.preventDefault()} style={{ textDecoration: 'none' }}>
      <Button
        variant='contained'
        sx={{
          backgroundColor: '#78787851',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          color: palette.neutral.dark,
          fontWeight: 600,
          borderRadius: '5rem',
          fontSize: '0.85rem',
          position: 'relative',

          '&:hover': {
            backgroundColor: palette.neutral.light,
          },
        }}
        onClick={() => navigate(`/${to}`)}
      >
        {children}
      </Button>
    </a>
  )
}

export const SecondaryButtonNoLink = ({ children, sx, onClick }) => {
  const palette = useTheme().palette
  return (
    <Button
      variant='contained'
      sx={{
        backgroundColor: '#78787851',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        color: palette.neutral.dark,
        fontWeight: 600,
        borderRadius: '5rem',
        fontSize: '0.85rem',
        position: 'relative',

        '&:hover': {
          backgroundColor: palette.neutral.light,
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
