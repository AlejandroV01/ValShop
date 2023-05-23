import { Avatar, Box, Button, Divider, Grid, InputBase, MenuItem, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import SkinContainer from 'components/SkinContainer'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const LikedSkins = () => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  return (
    <Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(330px, 1fr))' gap='1rem' sx={{ placeItems: 'center' }}>
      {user.likedSkins.map(skin => (
        <SkinContainer width={300} name={skin.bundle + ' ' + skin.weapon} price={skin.price} picture={skin.img_url}></SkinContainer>
      ))}
      {user.likedSkins.length === 0 && (
        <Stack direction={'column'} width={'100%'} alignItems={'center'} justifyContent={'center'} mt={'1rem'} gap={'0.25rem'}>
          <Typography variant='h2'>Nothing's Here!</Typography>
          <Typography variant='h6'>Start adding skins!</Typography>
          <Button variant='contained' onClick={() => navigate('/explore')}>
            Explore Here
          </Button>
        </Stack>
      )}
    </Box>
  )
}

export default LikedSkins
