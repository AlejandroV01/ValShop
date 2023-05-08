import express from 'express'
import { addRemoveSkins, getUser, getUserSkins } from '../controllers/users.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

// READ
router.get('/:id', verifyToken, getUser)
router.get('/:id/skins', verifyToken, getUserSkins)

// UPDATE
router.patch('/:id/:collection/:weapon', verifyToken, addRemoveSkins)

export default router
