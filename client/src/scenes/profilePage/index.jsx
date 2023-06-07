import { CalendarMonth } from '@mui/icons-material'
import { Avatar, Box, Chip, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import LikedSkins from './LikedSkins'
import OwnedSkins from './OwnedSkins'
const ProfilePage = () => {
  const theme = useTheme()
  const gridStacked = useMediaQuery('(max-width: 1396px)')
  const [ownedSkinTab, setOwnedSkinTab] = useState(true)
  const [favoriteSkinTab, setFavoriteSkinTab] = useState(false)
  const user = useSelector(state => state.user)
  const handleTabChange = tabName => {
    if (tabName === 'ownedTab') {
      setOwnedSkinTab(true)
      setFavoriteSkinTab(false)
    } else if (tabName === 'favoriteTab') {
      setOwnedSkinTab(false)
      setFavoriteSkinTab(true)
    } else {
      console.error('error when switching tabs')
    }
  }

  const accountCreation = createdAt => {
    const dateString = createdAt
    const date = new Date(dateString)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = date.toLocaleDateString('en-US', options)

    return formattedDate // Output: May 23, 2023
  }

  return (
    <Box width={'100%'} paddingTop={'1rem'} paddingBottom={'1rem'}>
      <Stack flexDirection={'row'} justifyContent={'center'} margin={'2rem 0'}>
        <Typography variant='h1'>THE VAULT</Typography>
      </Stack>
      <Box width='100%' display='flex' padding={'1rem 6%'} flexWrap='wrap' gap='2rem'>
        <Box flexGrow={0.2} height='100%' display='flex' flexDirection='column' gap='1rem'>
          <Stack flexDirection={'row'} alignItems={'center'} gap={'2rem'}>
            <Avatar variant='rounded' src={user.picturePath} sx={{ width: 70, height: 70 }}></Avatar>

            <Typography variant='h2'>{user.username}</Typography>
          </Stack>
          <Box
            display='grid'
            gridTemplateColumns='repeat(auto-fit, minmax(175px, 1fr))'
            borderRadius='4px'
            width='100%'
            p='1rem'
            backgroundColor={theme.palette.neutral.light}
          >
            <Box display='flex' flexDirection='column'>
              <Typography variant='h4'>{user.ownedSkins.length}</Typography>
              <Typography variant='h6'>Owned Skins</Typography>
              <Divider />
            </Box>
            <Box display='flex' flexDirection='column'>
              <Typography variant='h4'>{user.likedSkins.length}</Typography>
              <Typography variant='h6'>Liked Skins</Typography>
              <Divider />
            </Box>
            <Box display='flex' flexDirection='column'>
              <Typography variant='h4'>{user.totalValue}</Typography>
              <Typography variant='h6'>Total Value</Typography>
              {gridStacked && <Divider />}
            </Box>
            <Box display='flex' flexDirection='column'>
              <Typography variant='h4'>{user.friends.length}</Typography>
              <Typography variant='h6'>Friends</Typography>
            </Box>
          </Box>
          <Chip icon={<CalendarMonth />} color='primary' label={`Created ${accountCreation(user.createdAt)}`} sx={{ width: 'fit-content' }} />
        </Box>
        <Box flexGrow={0.8} height='100%' display='flex' flexDirection='column' gap='1rem'>
          <Stack direction='row'>
            <Stack
              direction='row'
              alignItems='center'
              gap='5px'
              borderBottom={`3px solid ${ownedSkinTab ? theme.palette.primary.main : theme.palette.neutral.medium}`}
              p='0 1rem 7px 1rem'
              sx={{ cursor: 'pointer' }}
              onClick={() => handleTabChange('ownedTab')}
            >
              <Typography variant='h5'>Owned Skins</Typography>
              <Box sx={{ width: 'fit-content', backgroundColor: theme.palette.primary.main }} p='0 0.5rem' borderRadius='4px'>
                <Typography color={theme.palette.neutral.light}>{user.ownedSkins.length}</Typography>
              </Box>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              gap='5px'
              borderBottom={`3px solid ${favoriteSkinTab ? theme.palette.primary.main : theme.palette.neutral.medium}`}
              p='0 1rem 7px 1rem'
              sx={{ cursor: 'pointer' }}
              onClick={() => handleTabChange('favoriteTab')}
            >
              <Typography variant='h5'>Liked Skins</Typography>
              <Box sx={{ width: 'fit-content', backgroundColor: theme.palette.primary.main }} p='0 0.5rem' borderRadius='4px'>
                <Typography color={theme.palette.neutral.light}>{user.likedSkins.length}</Typography>
              </Box>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              gap='5px'
              borderBottom={`3px solid ${theme.palette.neutral.medium}`}
              p='0 1rem 7px 1rem'
              flexGrow={1}
            ></Stack>
          </Stack>
          {ownedSkinTab ? <OwnedSkins /> : <LikedSkins />}
        </Box>
      </Box>
    </Box>
  )
}

export default ProfilePage
