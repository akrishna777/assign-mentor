import mongoose from 'mongoose'
import Mentor from '../Models/MentorModel.js'
import Student from '../Models/StudentModel.js'

export const assignMentor = async (req, res) => {
  const { student_id, mentor_id } = req.body

  try {
    if (!mongoose.Types.ObjectId.isValid(student_id))
      return res.status(404).send('No student with that id')

    const student = await Student.findById(student_id)
    student.mentor = mentor_id

    await student.save()

    if (!mongoose.Types.ObjectId.isValid(mentor_id))
      return res.status(404).send('No mentor with that id')

    const mentor = await Mentor.findById(mentor_id)
    mentor.students.push(student_id)
    await mentor.save()

    res.send('Updated Successfully')
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
