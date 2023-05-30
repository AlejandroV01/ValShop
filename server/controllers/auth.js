import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

//REGISTER USER
export const register = async (req, res) => {
  try {
    const { username, email, password, picturePath } = req.body
    const user = await User.exists({ email: email })
    const ifUserExists = await User.exists({ username: username })
    if (user) return res.status(400).json({ msg: 'An account with that email already exists.' })
    if (ifUserExists) return res.status(400).json({ msg: 'An account with that username already exists.' })

    const newUser = new User({
      username,
      email,
      password,
      picturePath,
    })
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

//LOGGING IN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    if (!user) return res.status(400).json({ msg: 'User does not exist.' })

    const isMatch = password == user.password
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials.' })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    delete user.password
    res.status(200).json({ token, user })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
