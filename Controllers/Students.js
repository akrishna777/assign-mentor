import mongoose from 'mongoose'
import Student from '../Models/StudentModel.js'

export const getStudent = async (req, res) => {
  try {
    const students = await Student.find()

    res.status(200).json(students)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createStudent = async (req, res) => {
  const student = req.body
  const newStudent = new Student(student)

  try {
    await newStudent.save()
    res.status(201).json(newStudent)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
