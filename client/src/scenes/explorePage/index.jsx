import { Box, Chip, Divider, FormControl, InputBase, MenuItem, Pagination, Select, Stack, Typography, useTheme } from '@mui/material'
import SkinContainer from 'components/SkinContainer'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SideBar from './SideBar'
const ExplorePage = () => {
  const [currentSort, setCurrentSort] = useState('Highest Price')
  const theme = useTheme()

  const neutralLight = theme.palette.neutral.light

  const user = useSelector(state => state.user)
  const skins = useSelector(state => state.skins)
  const [filterChips, setFilterChips] = useState([])
  const [marketSkins, setMarketSkins] = useState(() => {
    return Array.from({ length: skins.length }, (_, index) => index)
  })
  const allSkins = []
  for (let i = 0; i < skins.length; i++) {
    allSkins.push(i)
  }

  if (currentSort === 'Highest Price') {
    marketSkins.sort((a, b) => {
      if (skins[b].price !== skins[a].price) {
        return skins[b].price - skins[a].price
      }
      return marketSkins.indexOf(a) - marketSkins.indexOf(b)
    })
  } else if (currentSort === 'Lowest Price') {
    marketSkins.sort((a, b) => {
      if (skins[b].price !== skins[a].price) {
        return skins[a].price - skins[b].price
      }
      return marketSkins.indexOf(a) - marketSkins.indexOf(b)
    })
  }
  const handlePaginationChange = (e, value) => {
    const lower = (value - 1) * 12
    const higher = lower + 12
    setLowerPagination(lower)
    setHigherPagination(higher)
  }
  const [lowerPagination, setLowerPagination] = useState(0)
  const [higherPagination, setHigherPagination] = useState(12)
  const itemCount = Math.min(marketSkins.length - lowerPagination, 12)

  const handleWeaponFilter = (filteredWeapons, filteredRarity) => {
    const chipArr = [...filteredWeapons, ...filteredRarity]
    setFilterChips(chipArr)
    if (filteredWeapons.length === 0 && filteredRarity.length === 0) {
      setMarketSkins(allSkins)
      return
    }
    console.log(filteredWeapons, filteredRarity)
    let filteredID = allSkins.filter(id => {
      if (filteredRarity.length === 0 && filteredWeapons.length > 0) {
        if (filteredWeapons.includes(skins[id].weapon)) {
          console.log('a')
          return true
        }
      } else if (filteredRarity.length === 0 && filteredWeapons.length === 0) {
        if (filteredRarity.includes(skins[id].rarity)) {
          console.log('b')
          return true
        }
      } else if (filteredRarity.length > 0 && filteredWeapons.length > 0) {
        if (filteredRarity.includes(skins[id].rarity) && filteredWeapons.includes(skins[id].weapon)) {
          console.log('c')
          return true
        }
      } else if (filteredRarity.length > 0 && filteredWeapons.length === 0) {
        if (filteredRarity.includes(skins[id].price)) {
          return true
        }
        if (filteredRarity.includes(skins[id].rarity)) {
          return true
        }
      }

      return false
    })
    setMarketSkins(filteredID)
  }
  const handleReset = () => {
    setFilterChips([])
    handleWeaponFilter([], [])
  }
  const [filteredWeapons, setFilteredWeapons] = useState([])
  const [filteredRarity, setFilteredRarity] = useState([])
  const handleChipDelete = chip => {
    const newArr = filterChips.filter(stateChip => {
      return stateChip !== chip
    })
    setFilterChips(newArr)
    let weaponArr = []
    let rarityArr = []
    console.log(newArr)
    for (let i = 0; i < newArr.length; i++) {
      if (
        newArr[i] === 'Ultra' ||
        newArr[i] === 'Exclusive' ||
        newArr[i] === 'Premium' ||
        newArr[i] === 'Deluxe' ||
        newArr[i] === 'Select' ||
        newArr[i] === 'Battle Pass'
      ) {
        rarityArr.push(newArr[i])
      } else {
        weaponArr.push(newArr[i])
      }
    }
    setFilteredWeapons(weaponArr)
    setFilteredRarity(rarityArr)
    console.log(weaponArr, rarityArr)
    handleWeaponFilter(weaponArr, rarityArr)
  }

  const handleIfChecked = name => {
    if (filterChips.includes(name)) return true
    return false
  }

  const handleCheckBoxRarity = name => {
    const updatedRarity = filteredRarity.includes(name) ? filteredRarity.filter(item => item !== name) : [...filteredRarity, name]
    setFilteredRarity(updatedRarity)
    handleWeaponFilter(filteredWeapons, updatedRarity)
  }
  const handleCheckBoxWeapon = name => {
    const updatedWeapons = filteredWeapons.includes(name) ? filteredWeapons.filter(item => item !== name) : [...filteredWeapons, name]
    setFilteredWeapons(updatedWeapons)
    handleWeaponFilter(updatedWeapons, filteredRarity)
  }
  return (
    <Stack direction={'column'} padding={'1rem 6%'}>
      <Stack flexDirection={'row'} justifyContent={'center'} margin={'2rem 0'}>
        <Typography variant='h1'>THE MARKET</Typography>
      </Stack>
      <Stack flexDirection={'row'} divider={<Divider orientation='vertical' flexItem />} gap={'1rem'}>
        <SideBar
          handleWeaponFilter={handleWeaponFilter}
          handleIfChecked={handleIfChecked}
          handleReset={handleReset}
          handleCheckBoxRarity={handleCheckBoxRarity}
          handleCheckBoxWeapon={handleCheckBoxWeapon}
        />
        <Stack flexGrow={0.95} direction={'column'} gap={'1rem'}>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography>
              Showing {itemCount} results from a total {marketSkins.length}
            </Typography>
            <Stack direction={'row'} alignItems={'center'} gap='1rem'>
              <Typography>Sort By:</Typography>
              <FormControl variant='standard' value={currentSort}>
                <Select
                  value={currentSort}
                  sx={{
                    backgroundColor: neutralLight,
                    width: '150px',
                    borderRadius: '0.25rem',
                    p: '0.25rem 1rem',
                    '& .MuiSvgIcon-root': {
                      pr: '0.25rem',
                      width: '3rem',
                    },
                    '& .MuiSelect-select:focus': {
                      backgroundColor: neutralLight,
                    },
                  }}
                  input={<InputBase />}
                >
                  <MenuItem value='Highest Price' onClick={() => setCurrentSort('Highest Price')}>
                    <Typography>Highest Price</Typography>
                  </MenuItem>
                  <MenuItem value='Lowest Price' onClick={() => setCurrentSort('Lowest Price')}>
                    <Typography>Lowest Price</Typography>
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} gap={'1rem'}>
            <Typography>Applied Filters: </Typography>
            <Stack direction={'row'} gap={'0.5rem'}>
              {filterChips && filterChips.map((chip, index) => <Chip key={index} label={chip} onDelete={() => handleChipDelete(chip)} />)}
            </Stack>
          </Stack>
          <Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(365px, 1fr))' gap='1rem' sx={{ placeItems: 'center' }}>
            {marketSkins.slice(lowerPagination, higherPagination).map((skin, index) => (
              <SkinContainer
                key={index}
                userId={user._id}
                skinId={skin}
                name={skins[skin].bundle + ' ' + skins[skin].weapon}
                price={skins[skin].price}
                picture={skins[skin].img_url}
              ></SkinContainer>
            ))}
          </Box>
          <Stack width={'100%'} direction={'row'} justifyContent={'center'}>
            <Pagination count={Math.ceil(marketSkins.length / 12)} variant='outlined' color='primary' onChange={handlePaginationChange} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ExplorePage
