import { Avatar, Box, Chip, Divider, Grid, InputBase, MenuItem, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import SkinContainer from 'components/SkinContainer'
import React from 'react'
const OwnedSkins = () => {
  return (
    <Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(330px, 1fr))' gap='1rem' sx={{ placeItems: 'center' }}>
      <SkinContainer width={300}></SkinContainer>
      <SkinContainer width={300}></SkinContainer>
      <SkinContainer width={300}></SkinContainer>
      <SkinContainer width={300}></SkinContainer>
      <SkinContainer width={300}></SkinContainer>
    </Box>
  )
}

export default OwnedSkins
