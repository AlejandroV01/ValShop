//READ
export const getBase = async res => {
  try {
    return res.status(200).json('Working!')
  } catch (err) {
    return res.status(404).json({ message: err.message })
  }
}
