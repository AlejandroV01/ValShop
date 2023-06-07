import { NearMe } from '@mui/icons-material'
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { PrimaryButton, SecondaryButton } from 'components/Buttons'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const HomePage = ({ skins }) => {
  const theme = useTheme()
  const navigate = useNavigate()
  console.log(skins)

  const user = useSelector(state => state.user)

  const isAuth = Boolean(useSelector(state => state.token))
  const isSmallerNonMobileScreens = useMediaQuery('(min-width: 600px)')

  return (
    <Stack padding='3rem 6%' width={'100%'} direction={'column'} alignItems={'center'}>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          backgroundColor: '#845EF7',
          opacity: 0.2,
          zIndex: '-2',
          background:
            'linear-gradient(135deg, #845EF7 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(225deg, #845EF7 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(315deg, #845EF7 25%, transparent 25%) 0px 0/ 20px 20px, linear-gradient(45deg, #845EF7 25%, #301515 25%) 0px 0/ 20px 20px',
        }}
      ></div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -9, backgroundColor: '#00000047' }}></div>
      <Stack direction={'column'} width={'55%'} gap={'3rem'} alignItems={'center'} marginTop={'3rem'}>
        <Typography variant={'h1'} fontSize={isSmallerNonMobileScreens ? '4rem' : '3rem'} fontWeight={'bold'} textAlign={'center'}>
          BROWSE SKINS FOR YOUR VAULT
        </Typography>
        <Typography variant='p' fontSize={'1.2rem'} color={theme.palette.neutral.dark}>
          Personal Valorant skin vaults to keep track of your skins as well as others!
        </Typography>
        <Stack direction={isSmallerNonMobileScreens ? 'row' : 'column'} gap={'1rem'} alignItems={'center'}>
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
