'use strict'

import { Router } from 'express'
import { getTasks, getTask, createTask } from '../controllers/task_controller.js'

const router = Router()

router.get('/', getTasks) // Gets all tasks.
router.get('/tasks/:id', getTask)
router.post('/', createTask) // Creates a task.

export default router
