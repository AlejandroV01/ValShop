import { Beenhere } from '@mui/icons-material'
import { Box, IconButton, Modal, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Form from 'scenes/loginPage/Form'
import { setOwnedSkins, setTotalValue } from 'state'
const OwnButton = ({ userId, skinId }) => {
  const isAuth = Boolean(useSelector(state => state.token))
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const palette = useTheme().palette
  const token = useSelector(state => state.token)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const skins = useSelector(state => state.skins)
  const [isOwned, setIsOwned] = useState(false)

  useEffect(() => {
    if (isAuth) {
      let isAOwnedSkin = user.ownedSkins.includes(skinId.toString())
      setIsOwned(isAOwnedSkin)
    }
  }, [isAuth, skinId, user?.ownedSkins])
  const addRemoveSkin = async (userId, skinId) => {
    if (!isAuth) {
      toast.error('You are not signed in!', {
        position: 'bottom-right',
        theme: 'dark',
      })
      return
    }
    const addRemoveSkinResponse = await fetch(`http://localhost:3001/users/${userId}/${skinId}/addRemoveOwnedSkins`, {
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
      dispatch(setOwnedSkins({ ownedSkins: addRemoveSkin }))
      if (isOwned) {
        if (typeof skins[skinId].price === 'number') {
          dispatch(setTotalValue({ value: -skins[skinId].price }))
        }
      } else {
        if (typeof skins[skinId].price === 'number') {
          dispatch(setTotalValue({ value: skins[skinId].price }))
        }
      }
      if (user.ownedSkins.includes(skinId.toString())) {
        toast.success('Un-Owned Skin!', {
          position: 'bottom-right',
          theme: 'dark',
        })
      } else {
        toast.success('Successfully Owned Skin!', {
          position: 'bottom-right',
          theme: 'dark',
        })
      }
    }
  }

  return (
    <>
      <IconButton
        sx={{
          color: isOwned ? palette.primary.light : palette.neutral.dark,
          backgroundColor: isOwned ? palette.primary.dark : palette.background.alt,
          '&:hover': { backgroundColor: palette.primary.main },
        }}
        onClick={!isAuth ? handleOpen : () => addRemoveSkin(userId, skinId)}
      >
        <Beenhere />
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

export default OwnButton
