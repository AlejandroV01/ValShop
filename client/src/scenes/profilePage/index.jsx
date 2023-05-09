import { Avatar, Badge, Box, FormControl, Icon, IconButton, InputBase, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material'
import UserAvatar from 'components/UserAvatar'
const ProfilePage = () => {
  const theme = useTheme()
  const background = theme.palette.background.default

  return (
    <>
      <Box
        width='100%'
        sx={{ backgroundImage: "url('/assets/tokyo.jpg')", backgroundPosition: 'center', position: 'relative' }}
        height={350}
        marginBottom='2rem'
      >
        <Box position='absolute' bottom={-35} left='6%' border={`5px solid ${background}`} borderRadius='4px' backgroundColor={background}>
          <Avatar
            variant='rounded'
            src='https://api.dicebear.com/6.x/fun-emoji/svg?seed=averaipod&backgroundColor=059ff2,71cf62,d84be5,d9915b,f6d594,b6e3f4,c0aede,d1d4f9,fcbc34,ffd5dc,ffdfbf&backgroundType=solid,gradientLinear'
            sx={{ width: 70, height: 70 }}
          ></Avatar>
        </Box>
      </Box>

      <Box width='100%' display='flex' padding={'1rem 6%'} height='calc(100% - 80px)'>
        <Box flexGrow={0.35} backgroundColor='red' height='100%' display='flex' flexDirection='column'>
          <Typography variant='h2' marginBottom='1rem'>
            Alejandro Vera
          </Typography>
          <Typography variant='h5' gutterBottom>
            @randomUserName
          </Typography>
          <Box display='grid' gridTemplateColumns='repeat(2, minmax(200px, 200px))' border='1px solid black' width='fit-content' p='1rem'>
            <Box display='flex' flexDirection='column'>
              <Typography>{Math.floor(Math.random() * 35)}</Typography>
              <Typography>Liked Skins</Typography>
            </Box>
            <Box display='flex' flexDirection='column'>
              <Typography>{Math.floor(Math.random() * 35000)}</Typography>
              <Typography>Total Value</Typography>
            </Box>
            <Box display='flex' flexDirection='column'>
              <Typography>{Math.floor(Math.random() * 20)}</Typography>
              <Typography>Friends</Typography>
            </Box>
            <Box display='flex' flexDirection='column'>
              <Typography>{Math.floor(Math.random() * 35)}</Typography>
              <Typography>Owned Skins</Typography>
            </Box>
          </Box>
        </Box>
        <Box flexGrow={0.65} backgroundColor='blue' height='100%'></Box>
      </Box>
    </>
  )
}

export default ProfilePage
