'use strict'

import mongoose from 'mongoose'
const Task = mongoose.model('Task')

export const serviceGetTasks = async () => {
  return await Task.find()
}

export const serviceCreateTask = async (data) => {
  const task = new Task(data)
  const result = await task.save()

  return '_id' in result
}

export default { serviceCreateTask }
