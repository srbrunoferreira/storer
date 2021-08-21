'use strict'

import { serviceCreateTask, serviceGetTasks } from '../services/task_service.js'
import ValidationContract from '../validators/fluent-validator.js'

export const getTasks = (req, res) => {
  serviceGetTasks()
    .then((tasks) => res.status(200).send({ tasks: tasks }))
    .catch((err) => {
      console.log(err)
      res.status(500).send({ error: err })
    })
}

export const getTask = (req, res) => {
  res.status(200).send({ status: 'It"s working', func: 'getTask' })
}

export const createTask = (req, res) => {
  try {
    const data = req.body
    const validator = new ValidationContract()

    validator.hasMinLen(data.status, 4, 'O status deve ter no mínimo quatro letras.')
    validator.hasMinLen(data.text, 5, 'A descrição da task deve ter no mínimero cinco caracteres.')

    if (!validator.isValid()) {
      res.status(400).send(validator.errors()).end()
      return
    }

    data.createdAt = new Date().toISOString()

    serviceCreateTask({
      status: data.status,
      text: data.text,
      createdAt: data.createdAt
    })
      .then(() => {
        res.status(201).send({ msg: 'Task criada com sucesso' })
      })
      .catch((e) => {
        res.status(500).send({ msg: 'Ocorreu um erro e a task não pôde ser criada.' })
      })
  } catch (e) {
    res.status(500).send({ msg: 'Ocorreu um erro e a task não pôde ser criada.' })
  }
}
