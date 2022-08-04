import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import mentorRouter from './Routes/mentorRouter.js'
import studentRouter from './Routes/studentRouter.js'
import assignStudents from './Routes/assignStudents.js'
import assignMentor from './Routes/assignMentor.js'

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/mentors', mentorRouter)
app.use('/students', studentRouter)
app.use('/assign-students', assignStudents)
app.use('/assign-mentor', assignMentor)

app.use('/', (req, res) => {
  res.send('Welcome to student mentor API')
})

// Use the below mongodb cluster for running the app
// const CONNECTION_URL =
//   'mongodb+srv://student-mentor:student-mentor123@cluster0.hflsi.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))

app.listen(PORT, () => console.log(`Server is listening on Port:${PORT}`))
