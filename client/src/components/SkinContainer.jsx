import { Close, DarkMode, Favorite, LightMode, Menu, Search, ShoppingCart } from '@mui/icons-material'
import { Badge, Box, FormControl, IconButton, InputBase, MenuItem, Select, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { setLikedSkins } from 'state'
import useImageColor from 'use-image-color'
import LikeButton from './LikeButton'
import OwnButton from './OwnButton'
const SkinContainer = ({ name, price, picture, width = 350, userId, skinId }) => {
  const theme = useTheme()
  const background = theme.palette.background.default
  const neutralLight = theme.palette.neutral.light
  const skins = useSelector(state => state.skins)
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      justifyContent={'space-evenly'}
      backgroundColor={neutralLight}
      borderRadius='4px'
      padding='1rem 1rem'
      width='375px'
      height={'230px'}
    >
      <img src={picture} alt={name} style={{ borderRadius: '4px', width: `${width}px`, maxHeight: '120px', objectFit: 'contain' }} />
      <Box display='flex' alignItems='center' justifyContent='space-between' width='100%'>
        <Box display='flex' flexDirection='column' overflow='hidden'>
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
          <Typography variant='h4' fontWeight='bold' style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            {name.length > 25 ? name.substring(0, 25) + '...' : name}
          </Typography>
        </Box>
        <Stack direction={'row'} gap={'0.5rem'}>
          <LikeButton userId={userId} skinId={skinId} />
          <OwnButton userId={userId} skinId={skinId} />
        </Stack>
      </Box>
    </Box>
  )
}

export default SkinContainer
