import { Badge, Box, Button, Divider, FormControl, IconButton, InputBase, MenuItem, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'

const HomePage = () => {
  const theme = useTheme()

  return (
    <Stack padding='1rem 6%' width={'100%'}>
      <Stack direction={'column'} alignItems='center' justifyContent={'center'}>
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
            <Button variant='contained' size='large'>
              Explore Here
            </Button>
          </Box>
        </Box>
        <Divider textAlign='left' sx={{ width: '100%', margin: '1rem 0' }}>
          <Typography fontWeight={'bold'} variant='h4'>
            EXPLORE
          </Typography>
        </Divider>
      </Stack>
    </Stack>
  )
}

export default HomePage
