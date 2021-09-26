'use strict'

import { serviceCreateTask, serviceDeleteTask, serviceGetTasks, serviceUpdateTask } from '../services/task_service.js'
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
    validator.isRequired(data.createdAt, 'A data de criação é necessária.')

    if (!validator.isValid()) {
      res.status(400).send(validator.errors()).end()
      return
    }

    serviceCreateTask({
      status: data.status,
      text: data.text,
      createdAt: data.createdAt
    })
      .then((result) => {
        res.status(201).send({ msg: 'Task criada com sucesso', id: result.id })
      })
      .catch((e) => {
        res.status(500).send({ msg: 'Ocorreu um erro e a task não pôde ser criada.' })
      })
  } catch (e) {
    res.status(500).send({ msg: 'Ocorreu um erro e a task não pôde ser criada.' })
  }
}

export const deleteTask = (req, res) => {
  const validator = new ValidationContract()

  validator.isRequired(req.params.id, 'O id da task é obrigatório.')
  validator.hasMinLen(req.params.id, 12, 'O id é inválido.')

  if (!validator.isValid()) res.status(400).send({ error: validator.errors() }).end()

  try {
    serviceDeleteTask(req.params.id)
      .then((result) => {
        res.status(200).send({ msg: 'Task deletada com sucesso', res: result })
      })
      .catch((err) => {
        res.status(500).send({ msg: 'Ocorreu um erro e a task não pôde ser deletada. CATCH', error: err })
      })
  } catch (err) {
    res.status(500).send({ msg: 'Ocorreu um erro e a task não pôde ser deletada.', error: err })
  }
}

export const updateTask = (req, res) => {
  try {
    serviceUpdateTask(req.params.id, req.body)
      .then((serviceRes) => {
        res.status(200).send({ msg: 'Dados da task atualizados com sucesso.', res: serviceRes })
      })
  } catch (err) {
    res.status(500).send({ msg: 'Ocorreu um erro e a task não pôde ser editada.', err: err })
  }
}
