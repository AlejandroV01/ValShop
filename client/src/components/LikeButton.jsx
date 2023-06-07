import { Favorite } from '@mui/icons-material'
import { Box, IconButton, Modal, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Form from 'scenes/loginPage/Form'
import { setLikedSkins } from 'state'
const LikeButton = ({ userId, skinId }) => {
  const isAuth = Boolean(useSelector(state => state.token))
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const palette = useTheme().palette
  const token = useSelector(state => state.token)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const addRemoveSkin = async (userId, skinId) => {
    if (!isAuth) {
      toast.error('You are not signed in!', {
        position: 'bottom-right',
        theme: 'dark',
      })
      return
    }
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
        theme: 'dark',
      })
      return
    }

    if (addRemoveSkin) {
      dispatch(setLikedSkins({ likedSkins: addRemoveSkin }))
      if (user.likedSkins.includes(skinId.toString())) {
        toast.success('Disliked Skin!', {
          position: 'bottom-right',
          theme: 'dark',
        })
      } else {
        toast.success('Successfully Liked Skin!', {
          position: 'bottom-right',
          theme: 'dark',
        })
      }
    }
  }
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    if (isAuth) {
      let isALikedSkin = user.likedSkins.includes(skinId.toString())
      setIsLiked(isALikedSkin)
    }
  }, [isAuth, skinId, user?.likedSkins])
  return (
    <>
      <IconButton
        sx={{
          color: isLiked ? '#FF6363' : palette.neutral.dark,
          backgroundColor: isLiked ? '#FFD7D7' : palette.background.alt,
          '&:hover': { backgroundColor: '#FFB0B0' },
        }}
        onClick={!isAuth ? handleOpen : () => addRemoveSkin(userId, skinId)}
      >
        <Favorite />
      </IconButton>
      <Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: palette.background.alt,
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Form />
        </Box>
      </Modal>
    </>
  )
}

export default LikeButton
