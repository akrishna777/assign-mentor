import mongoose from 'mongoose'
import Mentor from '../Models/MentorModel.js'
import Student from '../Models/StudentModel.js'

export const assignStudents = async (req, res) => {
  const { student_list, mentor_id } = req.body

  try {
    student_list.map(async (student_id) => {
      const student = await Student.findById(student_id)
      student.mentor = mentor_id
      await student.save()
    })

    const mentor = await Mentor.findById(mentor_id)
    mentor.students = student_list
    await mentor.save()

    res.send('Updated Successfully')
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
