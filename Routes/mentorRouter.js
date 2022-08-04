import express from 'express'
import {
  createMentor,
  getMentors,
  getStudents,
} from '../Controllers/Mentors.js'

const router = express.Router()

router.get('/', getMentors)
router.post('/', createMentor)
router.get('/:id', getStudents)

export default router
