import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { Badge, Box, Button, Checkbox, Divider, FormControl, Icon, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
const valWeaponNames = [
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
]
const ExplorePage = () => {
  const [expandWeapons, setExpandWeapons] = useState(false)
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
    Skins: [],
  }
  return (
    <Stack divider={<Divider />} direction={'column'}>
      <Typography variant='h5'>Filter</Typography>
      <Stack direction={'column'}>
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
            ? valWeaponNames.slice(0, 5).map(name => (
                <Stack direction={'row'} alignItems={'center'}>
                  <Checkbox />
                  <Typography variant='h6'>{name}</Typography>
                </Stack>
              ))
            : valWeaponNames.map(name => (
                <Stack direction={'row'} alignItems={'center'}>
                  <Checkbox />
                  <Typography variant='h6'>{name}</Typography>
                </Stack>
              ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ExplorePage
