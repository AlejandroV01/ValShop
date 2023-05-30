import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import {
  Badge,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  RadioGroup,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React, { useState } from 'react'

const SideBar = ({ handleWeaponFilter }) => {
  const [expandWeapons, setExpandWeapons] = useState(false)
  const [expandRarity, setExpandRarity] = useState(false)
  const theme = useTheme()

  const sideBarContent = {
    Weapons: [
      'Classic',
      'Shorty',
      'Frenzy',
      'Ghost',
      'Sheriff',
      'Stinger',
      'Spectre',
      'Bucky',
      'Judge',
      'Bulldog',
      'Guardian',
      'Phantom',
      'Vandal',
      'Marshal',
      'Operator',
      'Ares',
      'Odin',
      'Knife',
    ],
    SkinRarity: ['Ultra', 'Exclusive', 'Premium', 'Deluxe', 'Select', 'Battle Pass'],
    Skins: [
      //ULTRA
      ['Radiant Entertainment System', 'Elderflame', 'Protocol 781-A', 'SPECTRUM'],
      //EXCLUSIVE
      ['Araxys', 'BlastX', 'ChronoVoid', 'Glitchpop', 'Prelude to Chaos ', 'RGX 11Z Pro', 'Ruination', 'Sentinels of Light', 'Singularity'],
      //PREMIUM
      [
        'Celestial',
        'Cryostasis',
        'Doodle Buds',
        'EGO',
        'Forsaken ',
        'Gaia’s Vengeance',
        'G.U.N',
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
      //DELUXE
      [
        'Abyssal',
        'Altitude',
        'Aristocrat',
        'Avalanche',
        'Horizon',
        'Minima',
        'Nunca Olvidados',
        'Prism',
        'Sakura',
        'Silvanus',
        'Snowfall',
        'Team Ace',
        'Tigris',
        'Titanmail',
        'Wasteland',
        'Winter Wunderland',
      ],
      //SELECT
      ['Endeavour', 'Convex', 'Galleria', 'Infantry', 'Luxe', 'Rush', 'Sensation', 'Smite'],
      //BATTLE PASS
      [
        'DOT EXE',
        'Couture',
        'Kingdom',
        'Hivemind',
        'POLYfox',
        'Red Alert',
        'Electroflux',
        'Jade',
        'Ruin',
        'Aerosol',
        'Infinity',
        'Outpost',
        'Cavalier',
        'POLYfrog',
        'Depths',
        'Lightwave',
        'Songsteel',
        'Jigsaw',
        'K/TAC',
        'Monarch',
        'Artisan',
        'Nitro',
        'Varnish',
        'Aero',
        'Genesis',
        'Goldwing',
        'Hydrodip',
        'Schema',
        'Velocity',
        'Divine Swine',
        'Lycan’s Bane',
        'Striker',
        '.SYS',
        'Coalition: Cobra',
        'Hue Shift',
        'Shimmer',
        'Spitfire',
        'Task Force 809',
        'Immortalized',
        'Premiere Collision',
        'Piedra del Sol',
        'Starlit Odyssey',
        'Rune Stone',
        'Iridian Thorn',
        '9 Lives',
        'Gridcrash',
        'Venturi',
        'Signature',
        'Tilde',
        'Topotek',
        'Arcane',
        'Champions',
      ],
    ],
  }
  const [filteredWeapons, setFilteredWeapons] = useState([])
  const [filteredRarity, setFilteredRarity] = useState([])
  const [Ultra, setUltra] = useState(false)
  const [Exclusive, setExclusive] = useState(false)
  const [Premium, setPremium] = useState(false)
  const [Deluxe, setDeluxe] = useState(false)
  const [Select, setSelect] = useState(false)
  const [BattlePass, setBattlePass] = useState(false)
  const isChecked = name => {
    if (name === 'Ultra') return Ultra
    if (name === 'Exclusive') return Exclusive
    if (name === 'Premium') return Premium
    if (name === 'Deluxe') return Deluxe
    if (name === 'Select') return Select
    if (name === 'Battle Pass') return BattlePass
  }
  const changeChecked = name => {
    if (name === 'Ultra' && Ultra === true) {
      setUltra(false)
      return
    }
    if (name === 'Exclusive' && Exclusive === true) {
      setExclusive(false)
      return
    }
    if (name === 'Premium' && Premium === true) {
      setPremium(false)
      return
    }
    if (name === 'Deluxe' && Deluxe === true) {
      setDeluxe(false)
      return
    }
    if (name === 'Select' && Select === true) {
      setSelect(false)
      return
    }
    if (name === 'Battle Pass' && BattlePass === true) {
      setBattlePass(false)
      return
    }
    if (name === 'Ultra') {
      setUltra(true)
      setExclusive(false)
      setPremium(false)
      setDeluxe(false)
      setSelect(false)
      setBattlePass(false)
    }
    if (name === 'Exclusive') {
      setUltra(false)
      setExclusive(true)
      setPremium(false)
      setDeluxe(false)
      setSelect(false)
      setBattlePass(false)
    }
    if (name === 'Premium') {
      setUltra(false)
      setExclusive(false)
      setPremium(true)
      setDeluxe(false)
      setSelect(false)
      setBattlePass(false)
    }
    if (name === 'Deluxe') {
      setUltra(false)
      setExclusive(false)
      setPremium(false)
      setDeluxe(true)
      setSelect(false)
      setBattlePass(false)
    }
    if (name === 'Select') {
      setUltra(false)
      setExclusive(false)
      setPremium(false)
      setDeluxe(false)
      setSelect(true)
      setBattlePass(false)
    }
    if (name === 'Battle Pass') {
      setUltra(false)
      setExclusive(false)
      setPremium(false)
      setDeluxe(false)
      setSelect(false)
      setBattlePass(true)
    }
  }
  const returnChecked = () => {
    if (Ultra) return ['Ultra']
    if (Exclusive) return ['Exclusive']
    if (Premium) return ['Premium']
    if (Deluxe) return ['Deluxe']
    if (Select) return ['Select']
    if (BattlePass) return ['Battle Pass']
    return []
  }
  return (
    <Stack divider={<Divider />} direction={'column'} flexGrow={0.05} borderRadius={'0.25rem'} height={'fit-content'} width={'170px'}>
      <Stack direction={'row'} justifyContent={'space-between'} padding={'0.5rem 0'}>
        <Typography variant='h6' fontWeight={'bold'}>
          Filter by
        </Typography>
        <Typography
          variant='h6'
          color={theme.palette.primary.main}
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          Reset Filters
        </Typography>
      </Stack>
      <Stack direction={'column'} padding={'0.5rem 0'}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant='h5'>Weapons</Typography>
          {!expandWeapons ? (
            <IconButton onClick={() => setExpandWeapons(true)} sx={{ cursor: 'pointer' }}>
              <ArrowDropUp />
            </IconButton>
          ) : (
            <IconButton onClick={() => setExpandWeapons(false)} sx={{ cursor: 'pointer' }}>
              <ArrowDropDown />
            </IconButton>
          )}
        </Stack>
        <Stack direction={'column'}>
          {!expandWeapons
            ? sideBarContent.Weapons.slice(0, 0).map((name, index) => (
                <Stack direction={'row'} alignItems={'center'} key={index}>
                  <Checkbox />
                  <Typography variant='h6'>{name}</Typography>
                </Stack>
              ))
            : sideBarContent.Weapons.map((name, index) => (
                <Stack direction={'row'} alignItems={'center'} key={index}>
                  <Checkbox
                    onChange={() => {
                      const updatedWeapons = filteredWeapons.includes(name)
                        ? filteredWeapons.filter(item => item !== name)
                        : [...filteredWeapons, name]
                      setFilteredWeapons(updatedWeapons)
                      handleWeaponFilter(updatedWeapons, filteredRarity)
                    }}
                  />
                  <Typography variant='h6'>{name}</Typography>
                </Stack>
              ))}
        </Stack>
      </Stack>
      <Stack direction={'column'} padding={'0.5rem 0'}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant='h5'>Rarity</Typography>
          {!expandRarity ? (
            <IconButton onClick={() => setExpandRarity(true)} sx={{ cursor: 'pointer' }}>
              <ArrowDropUp />
            </IconButton>
          ) : (
            <IconButton onClick={() => setExpandRarity(false)} sx={{ cursor: 'pointer' }}>
              <ArrowDropDown />
            </IconButton>
          )}
        </Stack>
        <Stack direction={'column'}>
          {!expandRarity
            ? sideBarContent.SkinRarity.slice(0, 0).map((name, index) => (
                <Stack direction={'row'} alignItems={'center'} key={index}>
                  <Checkbox />
                  <Typography variant='h6'>{name}</Typography>
                </Stack>
              ))
            : sideBarContent.SkinRarity.map((name, index) => (
                <Stack direction={'row'} alignItems={'center'} key={index}>
                  <Checkbox
                    checked={isChecked(name)}
                    onChange={() => {
                      changeChecked(name)
                      const rarity = returnChecked()
                      console.log(rarity)
                      setFilteredRarity(rarity)
                      handleWeaponFilter(filteredWeapons, filteredRarity)
                    }}
                  />
                  <Typography variant='h6'>{name}</Typography>
                </Stack>
              ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SideBar
