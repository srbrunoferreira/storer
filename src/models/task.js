'use strict'

import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schema = new Schema({
  status: {
    type: String,
    trim: true,
    required: [true, 'O status é obrigatório']
  },

  text: {
    type: String,
    trim: true,
    required: [true, 'O texto da task é obrigatório.']
  },

  createdAt: {
    type: Date,
    trim: true,
    required: [true, 'A data de criação é obrigatória.']
  }
})

export default mongoose.model('Task', schema)
