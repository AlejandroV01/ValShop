import { Badge, Box, FormControl, Icon, IconButton, InputBase, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material'

const ProfilePage = () => {
  return (
    <Box width='100%' display='flex' padding={'1rem 6%'} height='calc(100% - 80px)'>
      <Box flexGrow={0.35} backgroundColor='red' height='100%' display='flex' flexDirection='column'></Box>
      <Box flexGrow={0.65} backgroundColor='blue' height='100%'></Box>
    </Box>
  )
}

export default ProfilePage
