import { Badge, Box, Button, Divider, FormControl, IconButton, InputBase, MenuItem, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import SkinContainer from 'components/SkinContainer'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
  const theme = useTheme()
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
  const navigate = useNavigate()
  const skins = useSelector(state => state.skins)

  const PEU = skins.filter(skin => {
    const rarity = skin.rarity
    return rarity === 'Premium' || rarity === 'Exclusive' || rarity === 'Ultra'
  })
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

  const getFirstSkins = () => {
    const selectedSkins = []
    let randomIndexes = []
    const baseSkin = PEU[Math.floor(Math.random() * PEU.length)]
    const collection = PEU.filter(skin => {
      const bundle = skin.bundle
      return bundle === baseSkin.bundle
    })

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * collection.length)
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex)
        selectedSkins.push(collection[randomIndex])
      } else {
        i--
      }
    }
    setFirstSkins(selectedSkins)
    return baseSkin.bundle
  }
  const getSecondSkins = firstBundle => {
    const selectedSkins = []
    let randomIndexes = []
    const newPEU = PEU.filter(skin => {
      const bundle = skin.bundle
      return bundle !== firstBundle
    })
    const baseSkin = newPEU[Math.floor(Math.random() * newPEU.length)]
    const collection = newPEU.filter(skin => {
      const bundle = skin.bundle
      return bundle === baseSkin.bundle
    })

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * collection.length)
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex)
        selectedSkins.push(collection[randomIndex])
      } else {
        i--
      }
    }
    setSecondSkins(selectedSkins)
  }
  const isAuth = Boolean(useSelector(state => state.token))

  useEffect(() => {
    getExploreSkins()
    let firstBundle = getFirstSkins()
    getSecondSkins(firstBundle)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skins])

  return (
    <Stack padding='1rem 6%' width={'100%'}>
      <Stack direction={'column'} alignItems='center'>
        <Typography fontWeight={'bold'} fontSize={50} variant='h1'>
          FEATURED
        </Typography>
        <Typography
          fontWeight={'bold'}
          letterSpacing={'2px'}
          variant='h1'
          fontSize={50}
          sx={{ WebkitTextStroke: `1px ${theme.palette.neutral.dark}`, color: 'transparent' }}
        >
          FEATURED
        </Typography>
        <Box position={'relative'} width={'75%'} height={'100%'}>
          <img
            src='https://media.valorant-api.com/bundles/3d2fd628-4ceb-0029-a737-9682ce8eb5e9/displayicon.png'
            alt=''
            width={'100%'}
            style={{ borderRadius: '4px' }}
          />
          <Box
            position={'absolute'}
            width={'100%'}
            height={'100%'}
            borderRadius={'4px'}
            top={0}
            left={0}
            sx={{ background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6699054621848739) 40%, rgba(255,255,255,0) 100%);' }}
          ></Box>
          <Box position={'absolute'} bottom={'3rem'} right={'3rem'}>
            <Button variant='contained' size='large' onClick={() => navigate('/explore/newBundle')}>
              Explore Here
            </Button>
          </Box>
        </Box>
        <Divider textAlign='left' sx={{ width: '100%', margin: '1rem 0' }}>
          <Typography fontWeight={'bold'} variant='h3'>
            EXPLORE
          </Typography>
        </Divider>
        <Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(380px, 1fr))' gap='1rem' sx={{ placeItems: 'center' }} width={'100%'}>
          {exploreSkins.map((skin, index) => {
            return (
              <SkinContainer
                key={index}
                name={skin.bundle + ' ' + skin.weapon}
                price={skin.price}
                picture={skin.img_url}
                userId={isAuth && user._id}
                skinId={skin.id}
              ></SkinContainer>
            )
          })}
        </Box>
        {isNonMobileScreens && (
          <>
            <Divider textAlign='left' sx={{ width: '100%', margin: '1rem 0' }}>
              <Typography variant='h4'>{firstSkins.length === 4 && firstSkins[0]['bundle']}</Typography>
            </Divider>
            <Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(380px, 1fr))' gap='1rem' sx={{ placeItems: 'center' }} width={'100%'}>
              {firstSkins.map((skin, index) => {
                return (
                  <SkinContainer
                    key={index}
                    name={skin.bundle + ' ' + skin.weapon}
                    price={skin.price}
                    picture={skin.img_url}
                    userId={isAuth && user._id}
                    skinId={skin.id}
                  ></SkinContainer>
                )
              })}
            </Box>
            <Divider textAlign='left' sx={{ width: '100%', margin: '1rem 0' }}>
              <Typography variant='h4'>{secondSkins.length === 4 && secondSkins[0]['bundle']}</Typography>
            </Divider>
            <Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(380px, 1fr))' gap='1rem' sx={{ placeItems: 'center' }} width={'100%'}>
              {secondSkins.map((skin, index) => {
                return (
                  <SkinContainer
                    key={index}
                    name={skin.bundle + ' ' + skin.weapon}
                    price={skin.price}
                    picture={skin.img_url}
                    userId={isAuth && user._id}
                    skinId={skin.id}
                  ></SkinContainer>
                )
              })}
            </Box>
          </>
        )}
        <Box width={'20%'} display={'flex'} justifyContent={'center'}>
          <Button
            variant='contained'
            size='large'
            sx={{ margin: '1rem 0', padding: '1rem 0', minWidth: '200px' }}
            fullWidth
            onClick={() => navigate('/explore')}
          >
            EXPLORE MORE
          </Button>
        </Box>
      </Stack>
    </Stack>
  )
}

export default HomePage
