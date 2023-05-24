import mongoose from 'mongoose'

const SkinSchema = new mongoose.Schema(
  {
    img_url: {
      type: String,
      required: true,
    },
    rarity: {
      type: String,
      required: true,
    },
    bundle: {
      type: String,
      required: true,
    },
    weapon: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

const Skin = mongoose.model('Skin', SkinSchema)
export default Skin
