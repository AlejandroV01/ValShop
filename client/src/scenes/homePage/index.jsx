import { Badge, Box, Button, Divider, FormControl, IconButton, InputBase, MenuItem, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import SkinContainer from 'components/SkinContainer'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const theme = useTheme()
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
  const navigate = useNavigate()
  return (
    <Stack padding='1rem 6%' width={'100%'}>
      <Stack direction={'column'} alignItems='center'>
        <Typography fontWeight={'bold'} fontSize={50} variant='h1'>
          FEATURED
        </Typography>
        <Typography
          fontWeight={'bold'}
          letterSpacing={'2px'}
          variant='h1'
          fontSize={50}
          sx={{ WebkitTextStroke: `1px ${theme.palette.neutral.dark}`, color: 'transparent' }}
        >
          FEATURED
        </Typography>
        <Box position={'relative'} width={'75%'} height={'100%'}>
          <img
            src='https://media.valorant-api.com/bundles/3d2fd628-4ceb-0029-a737-9682ce8eb5e9/displayicon.png'
            alt=''
            width={'100%'}
            style={{ borderRadius: '4px' }}
          />
          <Box
            position={'absolute'}
            width={'100%'}
            height={'100%'}
            borderRadius={'4px'}
            top={0}
            left={0}
            sx={{ background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6699054621848739) 40%, rgba(255,255,255,0) 100%);' }}
          ></Box>
          <Box position={'absolute'} bottom={'3rem'} right={'3rem'}>
            <Button variant='contained' size='large' onClick={() => navigate('/explore/newBundle')}>
              Explore Here
            </Button>
          </Box>
        </Box>
        <Divider textAlign='left' sx={{ width: '100%', margin: '1rem 0' }}>
          <Typography fontWeight={'bold'} variant='h3'>
            EXPLORE
          </Typography>
        </Divider>
        <Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(380px, 1fr))' gap='1rem' sx={{ placeItems: 'center' }} width={'100%'}>
          <SkinContainer picture='https://media.valorant-api.com/weaponskinchromas/04bcace1-4d82-7093-f812-a5bff8306a54/displayicon.png'></SkinContainer>
          <SkinContainer picture='https://media.valorant-api.com/weaponskins/9d7ed392-4c4c-b1c4-7232-3cbb07b2e133/displayicon.png'></SkinContainer>
          <SkinContainer picture='https://media.valorant-api.com/weaponskinchromas/fda6f206-4741-88fe-cc2a-3eb3233d5328/displayicon.png'></SkinContainer>
          <SkinContainer picture='https://media.valorant-api.com/weaponskins/dbf7b813-4931-3b45-db2b-ea8d418b2b1d/displayicon.png'></SkinContainer>
        </Box>
        {isNonMobileScreens && (
          <>
            <Divider textAlign='left' sx={{ width: '100%', margin: '1rem 0' }}>
              <Typography variant='h4'>REAVER</Typography>
            </Divider>
            <Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(380px, 1fr))' gap='1rem' sx={{ placeItems: 'center' }} width={'100%'}>
              <SkinContainer></SkinContainer>
              <SkinContainer></SkinContainer>
              <SkinContainer></SkinContainer>
              <SkinContainer></SkinContainer>
            </Box>
            <Divider textAlign='left' sx={{ width: '100%', margin: '1rem 0' }}>
              <Typography variant='h4'>GLITCHPOP</Typography>
            </Divider>
            <Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(380px, 1fr))' gap='1rem' sx={{ placeItems: 'center' }} width={'100%'}>
              <SkinContainer picture='https://media.valorant-api.com/weaponskinchromas/b58f249b-4e8f-5532-6f35-a9b3b39dc15c/displayicon.png'></SkinContainer>
              <SkinContainer picture='https://media.valorant-api.com/weaponskinchromas/b58f249b-4e8f-5532-6f35-a9b3b39dc15c/displayicon.png'></SkinContainer>
              <SkinContainer picture='https://media.valorant-api.com/weaponskinchromas/b58f249b-4e8f-5532-6f35-a9b3b39dc15c/displayicon.png'></SkinContainer>
              <SkinContainer picture='https://media.valorant-api.com/weaponskinchromas/b58f249b-4e8f-5532-6f35-a9b3b39dc15c/displayicon.png'></SkinContainer>
            </Box>
          </>
        )}
        <Box width={'20%'} display={'flex'} justifyContent={'center'}>
          <Button
            variant='contained'
            size='large'
            sx={{ margin: '1rem 0', padding: '1rem 0', minWidth: '200px' }}
            fullWidth
            onClick={() => navigate('/explore')}
          >
            EXPLORE MORE
          </Button>
        </Box>
      </Stack>
    </Stack>
  )
}

export default HomePage
