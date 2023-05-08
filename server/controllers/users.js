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

export const getUserSkins = async (req, res) => {
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
export const addRemoveSkins = async (req, res) => {
  try {
    const { id, skinId } = req.params
    const user = await User.findById(id)
    const skin = await User.findById(skinId)
    if (user.skins.includes(skinId)) {
      user.skins = user.skins.filter(id => id !== skinId)
      skin.skins = skin.skins.filter(id => id !== id)
    } else {
      user.skins.push(skinId)
      skin.skins.push(id)
    }
    await user.save()
    await friend.save()
    const skins = await Promise.all(user.skins.map(id => User.findById(id)))
    const formattedSkins = skins.map(({ _id, displayName, displayIcon, chromas }) => {
      return { _id, displayName, displayIcon, chromas }
    })
    res.status(200).json(formattedSkins)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}
