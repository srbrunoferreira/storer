'use strict'

import express from 'express'
import mongoose from 'mongoose'
import path from 'path'

import { DATABASE, DATABASE_USER, DATABASE_PASSWD, CLIENT_URL } from './config.js'
import taskSchema from './models/task.js'
import taskRoute from './routes/task_route.js'

// Database connection
mongoose.connect(
  `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWD}@cluster0.ipipi.mongodb.net/${DATABASE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
)

mongoose.connection.on('connected', () => {
  console.log('Connected to the database')
})

// Api settings
const api = express()

api.use(express.json())
api.use(express.urlencoded({ extended: false, limit: '5mb' }))

// Enables CORS
api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token')
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
  next()
})

api.use(express.static(path.join(path.resolve(path.dirname('')), 'src/build')))

api.get(CLIENT_URL, (req, res) => {
  res.sendFile(path.join(path.resolve(path.dirname('')), 'src/build', 'index.html'))
})

// Routes
api.use('/tasks', taskRoute)

export default api
