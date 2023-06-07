import { NearMe } from '@mui/icons-material'
import { Stack, Typography, useTheme } from '@mui/material'
import { PrimaryButton, SecondaryButton } from 'components/Buttons'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const HomePage = ({ skins }) => {
  const theme = useTheme()
  const navigate = useNavigate()
  console.log(skins)

  const user = useSelector(state => state.user)

  const isAuth = Boolean(useSelector(state => state.token))

  return (
    <Stack padding='3rem 6%' width={'100%'} direction={'column'} alignItems={'center'}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', minHeight: '100vh', zIndex: -10 }}>
        <img src='/assets/simpleBackground.png' alt='' loading='lazy' style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -9, backgroundColor: '#00000047' }}></div>
      <Stack direction={'column'} width={'55%'} gap={'3rem'} alignItems={'center'} marginTop={'3rem'}>
        <Typography variant='h1' fontSize={'4rem'} fontWeight={'bold'} textAlign={'center'}>
          BROWSE SKINS FOR YOUR VAULT
        </Typography>
        <Typography variant='p' fontSize={'1.2rem'} color={theme.palette.neutral.dark}>
          Personal Valorant skin vaults to keep track of your skins as well as others!
        </Typography>
        <Stack direction={'row'} gap={'1rem'}>
          <PrimaryButton to={'market'}>
            <NearMe />
            <Typography fontWeight={'bold'} onClick={() => navigate('/market')}>
              GO TO MARKET
            </Typography>
          </PrimaryButton>
          <SecondaryButton size='large' to={isAuth ? `profile/${user.username}` : 'login'}>
            TO OWN VAULT
          </SecondaryButton>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default HomePage
