import { Avatar, Box, Button, Chip, Grid, InputBase, MenuItem, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import SkinContainer from 'components/SkinContainer'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const OwnedSkins = () => {
  const user = useSelector(state => state.user)
  const skins = useSelector(state => state.skins)
  const navigate = useNavigate()
  const reversedSkins = [...user.likedSkins].reverse()
  return (
    <Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(365px, 1fr))' gap='1rem' sx={{ placeItems: 'center' }}>
      {reversedSkins.map((skin, index) => (
        <SkinContainer
          key={index}
          userId={user._id}
          skinId={skin}
          name={skins[skin].bundle + ' ' + skins[skin].weapon}
          price={skins[skin].price}
          picture={skins[skin].img_url}
        ></SkinContainer>
      ))}
      {user.ownedSkins.length === 0 && (
        <Stack direction={'column'} width={'100%'} alignItems={'center'} justifyContent={'center'} mt={'1rem'} gap={'0.25rem'}>
          <Typography variant='h2'>Nothing's Here!</Typography>
          <Typography variant='h6'>Start adding skins!</Typography>
          <Button variant='contained' onClick={() => navigate('/market')}>
            Explore Here
          </Button>
        </Stack>
      )}
    </Box>
  )
}

export default OwnedSkins
