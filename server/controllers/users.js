import Skin from '../models/Skin.js'
import User from '../models/User.js'

//READ
export const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const getUserLikedSkins = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    const likedSkins = await Promise.all(user.likedSkins.map(id => User.findById(id)))
    const formattedSkins = likedSkins.map(({ _id, displayName, displayIcon, chromas }) => {
      return { _id, displayName, displayIcon, chromas }
    })
    res.status(200).json(formattedSkins)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const getUserOwnedSkins = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    const skins = await Promise.all(user.skins.map(id => User.findById(id)))
    const formattedSkins = skins.map(({ _id, displayName, displayIcon, chromas }) => {
      return { _id, displayName, displayIcon, chromas }
    })
    res.status(200).json(formattedSkins)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

// UPDATE
export const addRemoveLikedSkins = async (req, res) => {
  console.log('triggered')
  try {
    const { id, skinId } = req.params

    const user = await User.findById(id)
    if (user.likedSkins.includes(skinId)) {
      user.likedSkins = user.likedSkins.filter(item => item !== skinId)
    } else {
      user.likedSkins.push(skinId)
    }
    await user.save()
    const skins = await Promise.all(user.likedSkins)
    res.status(200).json(skins)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const addRemoveOwnedSkins = async (req, res) => {
  console.log('triggered')
  try {
    const { id, skinId } = req.params

    const user = await User.findById(id)
    if (user.ownedSkins.includes(skinId)) {
      user.ownedSkins = user.ownedSkins.filter(item => item !== skinId)
    } else {
      user.ownedSkins.push(skinId)
    }
    await user.save()
    const skins = await Promise.all(user.ownedSkins)
    res.status(200).json(skins)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}
