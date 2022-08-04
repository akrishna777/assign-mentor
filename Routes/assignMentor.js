import express from 'express'
import { assignMentor } from '../Controllers/assignMentor.js'

const router = express.Router()

router.post('/', assignMentor)

export default router
