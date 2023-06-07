import { Stack } from '@mui/material'
import Form from './Form'
const LoginPage = () => {
  return (
    <Stack width='100%' height='calc(100% - 80px)' display='flex' padding={'5rem 6%'} flexDirection={'row'} justifyContent={'center'}>
      <Form></Form>
    </Stack>
  )
}

export default LoginPage
