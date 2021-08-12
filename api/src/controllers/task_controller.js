'use strict'

export const getTasks = (req, res) => {
  res.status(200).send({ status: 'It"s working', func: 'getTasks' })
}

export const getTask = (req, res) => {
  res.status(200).send({ status: 'It"s working', func: 'getTask' })
}

export const createTask = (req, res) => {
  res.status(200).send({ status: 'It"s working', func: 'createTask' })
}
