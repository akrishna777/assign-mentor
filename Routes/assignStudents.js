import express from 'express'
import { assignStudents } from '../Controllers/assignStudents.js'

const router = express.Router()

router.post('/', assignStudents)

export default router
