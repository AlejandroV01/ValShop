import { NearMe } from '@mui/icons-material'
import { Badge, Box, Button, Divider, FormControl, IconButton, InputBase, MenuItem, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
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
    <Stack padding='3rem 6%' width={'100%'} direction={'column'} position={'relative'}>
      <Stack direction={'row'} width={'100%'} alignItems={'center'} gap={'2rem'}>
        <Box width={'45%'}>
          <img src='https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png' alt='ValAgentWallpaper' width={'100%'} />
        </Box>
        <Stack direction={'column'} width={'55%'} gap={'3rem'}>
          <Typography variant='h1' fontSize={'4rem'} fontWeight={'bold'}>
            BROWSE SKINS FOR YOUR VAULT
          </Typography>
          <Typography variant='p' fontSize={'1.2rem'} color={theme.palette.neutral.medium}>
            Personal Valorant skin vaults to keep track of your skins as well as others!
          </Typography>
          <Stack direction={'row'}>
            <Button variant='contained' startIcon={<NearMe />} size='large'>
              <Typography fontWeight={'bold'}>GO TO MARKET</Typography>
            </Button>
            <Button size='large'>TO OWN VAULT</Button>
          </Stack>
        </Stack>
      </Stack>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 10,
          height: 10,
          backgroundColor: 'red',
          boxShadow: '0px 0px 300px 200px rgba(132,94,247,0.77)',
          zIndex: -1,
        }}
      ></div>
    </Stack>
  )
}

export default HomePage
