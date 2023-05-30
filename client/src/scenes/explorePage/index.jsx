import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import {
  Badge,
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  Icon,
  InputBase,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import SkinContainer from 'components/SkinContainer'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SideBar from './SideBar'
const ExplorePage = () => {
  const [currentSort, setCurrentSort] = useState('Recent')
  const theme = useTheme()
  const navigate = useNavigate()
  const neutralLight = theme.palette.neutral.light

  const user = useSelector(state => state.user)
  const skins = useSelector(state => state.skins)
  const [marketSkins, setMarketSkins] = useState(() => {
    return Array.from({ length: skins.length }, (_, index) => index).reverse()
  })
  const allSkins = []
  for (let i = skins.length - 1; i >= 0; i--) {
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
      }

      return false
    })
    setMarketSkins(filteredID)
  }

  return (
    <Stack direction={'row'} padding={'1rem 6%'} gap={'1rem'} divider={<Divider orientation='vertical' flexItem />}>
      <SideBar handleWeaponFilter={handleWeaponFilter} />
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
                <MenuItem value='Recent' onClick={() => setCurrentSort('Recent')}>
                  <Typography>Recent</Typography>
                </MenuItem>
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
          <Stack direction={'row'}>
            <Chip label='Deletable' onDelete={() => console.log('deleted')} />
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
  )
}

export default ExplorePage
