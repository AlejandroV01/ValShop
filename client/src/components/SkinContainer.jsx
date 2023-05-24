import { Close, DarkMode, Favorite, LightMode, Menu, Search, ShoppingCart } from '@mui/icons-material'
import { Badge, Box, FormControl, Icon, IconButton, InputBase, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { setLikedSkins } from 'state'
import useImageColor from 'use-image-color'
const SkinContainer = ({
  name = 'Reaver Vandal',
  price = '1775',
  picture = 'https://media.valorant-api.com/weaponskins/30388628-42f0-606c-82c0-73ad43de997f/displayicon.png',
  width = 350,
  userId,
  skinId,
}) => {
  const theme = useTheme()
  const background = theme.palette.background.default
  const neutralLight = theme.palette.neutral.light
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addRemoveSkin = async (userId, skinId) => {
    const addRemoveSkinResponse = await fetch(`http://localhost:3001/users/${userId}/${skinId}/addRemoveLikedSkins`, {
      method: 'PATCH',
    })
    const addRemoveSkin = await addRemoveSkinResponse.json()
    if (addRemoveSkin.msg === 'That skin does not exist yet!') {
      toast.error('That skin does not exist yet!', {
        position: 'bottom-right',
        theme: 'colored',
      })
      return
    }
    console.log(addRemoveSkin)
    if (addRemoveSkin) {
      dispatch(setLikedSkins({ likedSkins: addRemoveSkin }))
      toast.success('Successfully Liked Skin!', {
        position: 'bottom-right',
        theme: 'colored',
      })
    }
  }

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
          onClick={() => addRemoveSkin(userId, skinId)}
        >
          <Favorite />
        </IconButton>
      </Box>
    </Box>
  )
}

export default SkinContainer
