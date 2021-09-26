'use strict'

import mongoose from 'mongoose'
const Task = mongoose.model('Task')

export const serviceGetTasks = async () => {
  return await Task.find()
}

export const serviceCreateTask = async (data) => {
  const task = new Task(data)
  const result = await task.save()

  return { status: true, id: result._id }
}

export const serviceDeleteTask = async (taskId) => {
  await Task.findByIdAndDelete(taskId)
  return true
}

export const serviceUpdateTask = async (taskId, data) => {
  return await Task.findByIdAndUpdate(taskId, data)
}

export default { serviceCreateTask }
