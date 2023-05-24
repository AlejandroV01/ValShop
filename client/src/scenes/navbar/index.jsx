import { Close, DarkMode, Explore, Favorite, LightMode, Menu, Search } from '@mui/icons-material'
import { Badge, Box, Button, FormControl, IconButton, InputBase, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material'
import FlexBetween from 'components/FlexBetween'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCart, setLogout, setMode } from 'state'

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  const likes = useSelector(state => state.likes)
  const cart = useSelector(state => state.cart)
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
  const theme = useTheme()
  const neutralLight = theme.palette.neutral.light
  const dark = theme.palette.neutral.dark
  const background = theme.palette.background.default
  const primaryLight = theme.palette.primary.light
  const alt = theme.palette.background.alt
  const isAuth = Boolean(useSelector(state => state.token))

  // const fullName = `${user.firstName} ${user.lastName}`
  return (
    <FlexBetween padding={'1rem 6%'} backgroundColor={alt}>
      <FlexBetween gap='1.75rem'>
        <Typography
          fontWeight='bold'
          fontSize='clamp(1rem, 2rem, 2.25rem)'
          color='primary'
          onClick={() => navigate('/')}
          sx={{
            '&:hover': {
              color: primaryLight,
              cursor: 'pointer',
            },
          }}
        >
          ValShop
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween backgroundColor={neutralLight} borderRadius={'4px'} gap={'3rem'} padding={'0.1rem 1.5rem'}>
            <InputBase placeholder='Search...' />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>
      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap='2rem'>
          <IconButton onClick={() => navigate('/likes')}>
            <Badge badgeContent={likes.length} color='primary'>
              <Favorite sx={{ color: dark, fontSize: '25px' }} />
            </Badge>
          </IconButton>
          <IconButton onClick={() => navigate('/explore')}>
            <Badge badgeContent={cart.length} color='primary'>
              <Explore sx={{ color: dark, fontSize: '25px' }} />
            </Badge>
          </IconButton>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? (
              <LightMode sx={{ color: dark, fontSize: '25px' }} />
            ) : (
              <DarkMode sx={{ color: dark, fontSize: '25px' }} />
            )}
          </IconButton>
          {isAuth ? (
            <FormControl variant='standard' value={user.username}>
              <Select
                value={user.username}
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
                <MenuItem value={user.username} onClick={() => navigate(`/profile/${user.username}`)}>
                  <Typography>{user.username}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
              </Select>
            </FormControl>
          ) : (
            <Button onClick={() => navigate('/login')} variant='contained'>
              Login
            </Button>
          )}
        </FlexBetween>
      ) : (
        <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
          <Menu sx={{ fontSize: '25px' }} />
        </IconButton>
      )}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box position='fixed' right='0' bottom='0' height='100%' zIndex='10' maxWidth='500px' minWidth='300px' backgroundColor={background}>
          <Box display='flex' justifyContent='flex-end' p='1rem'>
            <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
              <Close />
            </IconButton>
          </Box>
          <FlexBetween gap='3rem' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <IconButton onClick={() => dispatch(setMode())} sx={{ fontSize: '25px' }}>
              {theme.palette.mode === 'dark' ? <DarkMode sx={{ fontSize: '25px' }} /> : <LightMode sx={{ color: dark, fontSize: '25px' }} />}
            </IconButton>
            <FormControl variant='standard' value={user.username}>
              <Select
                value={user.username}
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
                <MenuItem value={user.username} onClick={() => navigate(`/profile/${user.username}`)}>
                  <Typography>{user.username}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  )
}

export default Navbar
