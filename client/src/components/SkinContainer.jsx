import { Close, DarkMode, Favorite, LightMode, Menu, Search, ShoppingCart } from '@mui/icons-material'
import { Badge, Box, FormControl, Icon, IconButton, InputBase, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { setLikedSkins } from 'state'
import useImageColor from 'use-image-color'
import LikeButton from './LikeButton'
const SkinContainer = ({
  name = 'Reaver Vandal',
  price = '1775',
  picture = 'https://static.wikia.nocookie.net/valorant/images/0/00/Radiant_Crisis_001_Phantom.png/revision/latest',
  width = 350,
  userId,
  skinId,
}) => {
  const theme = useTheme()
  const background = theme.palette.background.default
  const neutralLight = theme.palette.neutral.light
  const dispatch = useDispatch()

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
        <LikeButton userId={userId} skinId={skinId} />
      </Box>
    </Box>
  )
}

export default SkinContainer
