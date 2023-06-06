import { NearMe } from '@mui/icons-material'
import { Badge, Box, Button, Divider, FormControl, IconButton, InputBase, MenuItem, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { PrimaryButton, SecondaryButton } from 'components/Buttons'
import SkinContainer from 'components/SkinContainer'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const HomePage = ({ skins }) => {
  const theme = useTheme()
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
  const navigate = useNavigate()
  console.log(skins)
  const PEU = [
    [
      'Radiant Entertainment System',
      'Elderflame',
      'Protocol 781-A',
      'SPECTRUM',
      'Araxys',
      'BlastX',
      'ChronoVoid',
      'Glitchpop',
      'Prelude to Chaos ',
      'RGX 11Z Pro',
      'Ruination',
      'Sentinels of Light',
      'Singularity',
      'Celestial',
      'Cryostasis',
      'Doodle Buds',
      'EGO',
      'Forsaken ',
      'Gaia’s Vengeance',
      'Gravitational Uranium Neuroblaster',
      'Ion',
      'Magepunk',
      'Nebula',
      'Neptune',
      'Oni',
      'Origin',
      'Prime',
      'Radiant Crisis 001 ',
      'Reaver',
      'Recon',
      'Prime',
      'Soulstrife',
      'Sovereign',
      'Spline',
      'Tethered Realms',
      'Undercity',
      'Valorant GO!',
      'Xenohunter',
    ],
  ]
  const user = useSelector(state => state.user)
  const [exploreSkins, setExploreSkins] = useState([])
  const [firstSkins, setFirstSkins] = useState([])
  const [secondSkins, setSecondSkins] = useState([])

  const getExploreSkins = () => {
    const selectedSkins = []
    let randomIndexes = []
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * skins.length)
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex)
        selectedSkins.push(skins[randomIndex])
      } else {
        i--
      }
    }
    setExploreSkins(selectedSkins)
  }

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
