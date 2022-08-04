import Mentor from '../Models/MentorModel.js'
import mongoose from 'mongoose'
import Student from '../Models/StudentModel.js'

export const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find()
    res.status(200).send(mentors)
  } catch (error) {
    res.status(404).send({ message: error.message })
  }
}

export const createMentor = async (req, res) => {
  console.log(req.body)

  const mentor = req.body
  const newMentor = new Mentor(mentor)
  try {
    await newMentor.save()
    res.status(201).send(newMentor)
  } catch (error) {
    res.status(409).send({ message: error.message })
  }
}

export const getStudents = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No mentor with that id')

  try {
    const students = await Student.find({ mentor: id })
    res.send(students)
  } catch (err) {
    res.send(err)
  }
}
