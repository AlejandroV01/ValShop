import { Close, DarkMode, Favorite, LightMode, Menu, Search, ShoppingCart } from '@mui/icons-material'
import { Badge, Box, FormControl, Icon, IconButton, InputBase, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import useImageColor from 'use-image-color'
const SkinContainer = ({
  name = 'Reaver Vandal',
  price = '1775',
  picture = 'https://media.valorant-api.com/weaponskins/30388628-42f0-606c-82c0-73ad43de997f/displayicon.png',
  width = 350,
}) => {
  const theme = useTheme()
  const background = theme.palette.background.default
  const neutralLight = theme.palette.neutral.light

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      justifyContent={'space-evenly'}
      backgroundColor={neutralLight}
      borderRadius='4px'
      padding='1rem 1rem'
      maxWidth='380px'
      height={'230px'}
    >
      <img src={picture} alt={name} style={{ borderRadius: '4px', width: `${width}px` }} />
      <Box display='flex' alignItems='center' justifyContent='space-between' width='100%'>
        <Box display='flex' flexDirection='column'>
          <Box display='flex' alignItems='center'>
            {theme.palette.mode === 'dark' ? (
              <img src='/assets/ValorantPoints.webp' alt='' width={22} color='black' />
            ) : (
              <img src='/assets/ValorantPointsDark.webp' alt='' width={22} color='black' />
            )}

            <Typography variant='h5' marginLeft={0.25}>
              {price}
            </Typography>
          </Box>
          <Typography variant='h4' fontWeight='bold'>
            {name}
          </Typography>
        </Box>
        <IconButton
          sx={{
            backgroundColor: theme.palette.neutral.medium,
            color: '#FF6363',
            backgroundColor: '#FFD7D7',
            '&:hover': { backgroundColor: '#FFB0B0' },
          }}
        >
          <Favorite />
        </IconButton>
      </Box>
    </Box>
  )
}

export default SkinContainer
