import { Badge, Box, FormControl, Icon, IconButton, InputBase, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material'
import SkinContainer from 'components/SkinContainer'
import WidgetContainer from 'components/WidgetContainer'
import React from 'react'
const LikePage = () => {
  const theme = useTheme()
  const neutralLight = theme.palette.neutral.light
  const dark = theme.palette.neutral.dark
  const background = theme.palette.background.default
  const primaryLight = theme.palette.primary.light
  const alt = theme.palette.background.alt
  return (
    <Box width='100%' display='flex' justifyContent='center' padding={'1rem 6%'}>
      <WidgetContainer backgroundColor={theme.palette.neutral.medium} width='100%'>
        <Typography variant='h2' textAlign='center' fontWeight='bold' gutterBottom>
          Liked Skins
        </Typography>
        <Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(380px, 1fr))' gap='1rem' sx={{ placeItems: 'center' }}>
          <SkinContainer></SkinContainer>
          <SkinContainer></SkinContainer>
          <SkinContainer></SkinContainer>
          <SkinContainer></SkinContainer>
          <SkinContainer></SkinContainer>
        </Box>
      </WidgetContainer>
    </Box>
  )
}

export default LikePage
