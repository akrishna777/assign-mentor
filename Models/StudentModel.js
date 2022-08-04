import mongoose from 'mongoose'
import { mentorSchema } from './MentorModel.js'

export const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: 'Mentor',
  },
})

const Student = mongoose.model('Student', studentSchema)

export default Student
