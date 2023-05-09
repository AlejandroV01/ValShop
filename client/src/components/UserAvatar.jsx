import { Avatar } from '@mui/material'
import React from 'react'
const UserAvatar = ({ ...rest }) => {
  return (
    <Avatar
      src='https://api.dicebear.com/6.x/fun-emoji/svg?seed=averaipod&backgroundColor=059ff2,71cf62,d84be5,d9915b,f6d594,b6e3f4,c0aede,d1d4f9,fcbc34,ffd5dc,ffdfbf&backgroundType=solid,gradientLinear'
      sx={{ width: 85, height: 85 }}
      variant='rounded'
      {...rest}
    ></Avatar>
  )
}

export default UserAvatar
