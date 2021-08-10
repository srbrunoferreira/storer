'use strict'

import express from 'express'

// import { entityRoute } from '/entityroute'

const api = express()

api.use(express.json())
api.use(express.urlencoded({ extended: false, limit: '5mb' }))

// Enables CORS
api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})

// Routes
// api.use('/route', entityRoute)

export default api
