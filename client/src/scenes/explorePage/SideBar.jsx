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

const SideBar = ({ handleWeaponFilter, handleIfChecked, handleReset, handleCheckBoxRarity, handleCheckBoxWeapon }) => {
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
          onClick={handleReset}
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
          {expandWeapons &&
            sideBarContent.Weapons.map((name, index) => (
              <Stack direction={'row'} alignItems={'center'} key={index}>
                <Checkbox checked={handleIfChecked(name)} onChange={() => handleCheckBoxWeapon(name)} />
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
          {!expandRarity &&
            sideBarContent.SkinRarity.map((name, index) => (
              <Stack direction={'row'} alignItems={'center'} key={index}>
                <Checkbox checked={handleIfChecked(name)} onChange={() => handleCheckBoxRarity(name)} />
                <Typography variant='h6'>{name}</Typography>
              </Stack>
            ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SideBar
