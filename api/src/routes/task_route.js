'use strict'

import { Router } from 'express'
import { getTasks, getTask, createTask } from '../controllers/task_controller.js'

const router = Router()

router.get('/', getTasks) // Gets all tasks.
router.get('/:id', getTask) // Gets a task.
router.post('/', createTask) // Creates a task.

export default router
