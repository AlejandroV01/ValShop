import { Favorite } from '@mui/icons-material'
import { IconButton, useTheme } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setLikedSkins } from 'state'
const LikeButton = ({ userId, skinId }) => {
  const token = useSelector(state => state.token)
  const dispatch = useDispatch()
  console.log(token)
  const addRemoveSkin = async (userId, skinId) => {
    const addRemoveSkinResponse = await fetch(`http://localhost:3001/users/${userId}/${skinId}/addRemoveLikedSkins`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const addRemoveSkin = await addRemoveSkinResponse.json()
    if (addRemoveSkin.msg === 'That skin does not exist yet!') {
      toast.error('That skin does not exist yet!', {
        position: 'bottom-right',
        theme: 'colored',
      })
      return
    }
    console.log(addRemoveSkin)
    if (addRemoveSkin) {
      dispatch(setLikedSkins({ likedSkins: addRemoveSkin }))
      toast.success('Successfully Liked Skin!', {
        position: 'bottom-right',
        theme: 'colored',
      })
    }
  }

  return (
    <IconButton
      sx={{
        color: '#FF6363',
        backgroundColor: '#FFD7D7',
        '&:hover': { backgroundColor: '#FFB0B0' },
      }}
      onClick={() => addRemoveSkin(userId, skinId)}
    >
      <Favorite />
    </IconButton>
  )
}

export default LikeButton
