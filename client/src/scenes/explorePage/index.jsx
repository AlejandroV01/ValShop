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
  IconButton,
  InputBase,
  MenuItem,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import SkinContainer from 'components/SkinContainer'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SideBar from './SideBar'
const ExplorePage = () => {
  const [currentSort, setCurrentSort] = useState('Recent')
  const theme = useTheme()
  const navigate = useNavigate()
  const neutralLight = theme.palette.neutral.light
  const dark = theme.palette.neutral.dark
  const background = theme.palette.background.default
  const primaryLight = theme.palette.primary.light
  const alt = theme.palette.background.alt
  const user = useSelector(state => state.user)
  const skins = useSelector(state => state.skins)
  const marketSkins = []
  for (let i = skins.length - 1; i >= 0; i--) {
    marketSkins.push(i)
  }
  return (
    <Stack direction={'row'} padding={'1rem 6%'} gap={'1rem'}>
      <SideBar />
      <Stack flexGrow={0.95} direction={'column'} gap={'1rem'}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography>Showing 9 results from a total 37</Typography>
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
          {marketSkins.map((skin, index) => (
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
      </Stack>
      {/**START A GRID IMPLEMENT */}
    </Stack>
  )
}

export default ExplorePage
