import { CalendarMonth } from '@mui/icons-material'
import { Avatar, Box, Chip, Divider, InputBase, Item, MenuItem, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import UserAvatar from 'components/UserAvatar'
const ProfilePage = () => {
  const theme = useTheme()
  const background = theme.palette.background.default
  const dark = theme.palette.neutral.dark
  const gridStacked = useMediaQuery('(max-width: 1396px)')

  return (
    <>
      <Box
        width='100%'
        sx={{ backgroundImage: "url('/assets/tokyo.jpg')", backgroundPosition: 'center bottom', position: 'relative' }}
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

      <Box width='100%' display='flex' padding={'1rem 6%'} flexWrap='wrap' gap='2rem'>
        <Box flexGrow={0.2} backgroundColor='red' height='100%' display='flex' flexDirection='column' gap='1rem'>
          <Typography variant='h2'>Alejandro Vera</Typography>
          <Typography variant='h5' color={theme.palette.neutral.main}>
            @randomUserName
          </Typography>
          <Box
            display='grid'
            gridTemplateColumns='repeat(auto-fit, minmax(175px, 1fr))'
            borderRadius='4px'
            width='100%'
            p='1rem'
            backgroundColor={theme.palette.neutral.light}
          >
            <Box display='flex' flexDirection='column'>
              <Typography variant='h4'>{Math.floor(Math.random() * 35)}</Typography>
              <Typography variant='h6'>Liked Skins</Typography>
              <Divider />
            </Box>
            <Box display='flex' flexDirection='column'>
              <Typography variant='h4'>{Math.floor(Math.random() * 35000)}</Typography>
              <Typography variant='h6'>Total Value</Typography>
              <Divider />
            </Box>
            <Box display='flex' flexDirection='column'>
              <Typography variant='h4'>{Math.floor(Math.random() * 20)}</Typography>
              <Typography variant='h6'>Friends</Typography>
              {gridStacked && <Divider />}
            </Box>
            <Box display='flex' flexDirection='column'>
              <Typography variant='h4'>{Math.floor(Math.random() * 35)}</Typography>
              <Typography variant='h6'>Owned Skins</Typography>
            </Box>
          </Box>
          <Chip icon={<CalendarMonth />} color='primary' label='Created Dec 08, 2022' sx={{ width: 'fit-content' }} />
        </Box>
        <Box flexGrow={0.8} height='100%'>
          <Stack direction='row'>
            <Stack direction='row' alignItems='center' gap='5px' borderBottom={`3px solid ${theme.palette.neutral.dark}`} p='0 1rem 7px 1rem'>
              <Typography variant='h5'>Owned Skins</Typography>
              <Box sx={{ width: 'fit-content', backgroundColor: theme.palette.primary.main }} p='0 0.5rem' borderRadius='4px'>
                <Typography color={theme.palette.neutral.light}>{Math.floor(Math.random() * 35)}</Typography>
              </Box>
            </Stack>
            <Stack direction='row' alignItems='center' gap='5px' borderBottom={`3px solid ${theme.palette.neutral.dark}`} p='0 1rem 7px 1rem'>
              <Typography variant='h5'>Favorite Skins</Typography>
              <Box sx={{ width: 'fit-content', backgroundColor: theme.palette.primary.main }} p='0 0.5rem' borderRadius='4px'>
                <Typography color={theme.palette.neutral.light}>{Math.floor(Math.random() * 35)}</Typography>
              </Box>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              gap='5px'
              borderBottom={`3px solid ${theme.palette.neutral.dark}`}
              p='0 1rem 7px 1rem'
              flexGrow={1}
            ></Stack>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default ProfilePage
