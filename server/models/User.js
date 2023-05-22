import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: '',
    },
    favoriteSkins: {
      type: Array,
      default: [],
    },
    friends: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', UserSchema)
export default User
