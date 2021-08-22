import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Task from './Task'
import TaskInput from './TaskInput'
import axios from 'axios'
import { getIsoDate } from '../helpers/helpers'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '360px',
    backgroundColor: '#EFEFEF',
    padding: '15px',
    marginTop: '15px',
    borderRadius: '3px',
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column-reverse'
  }
}))

const TasksList = () => {
  const style = useStyles()
  const [tasks, setTasks] = useState([])

  useEffect(() =>
    (async () => {
      await axios('http://localhost:3000/tasks')
        .then(res => {
          setTasks(res.data.tasks.reverse())
        })
    })()
  , [])

  const addTask = (taskText) => {
    if (taskText.length === 0) { console.log('O input deve ser preenchido.'); return }

    const newTask = { status: 'done', text: taskText, createdAt: getIsoDate() }

    axios({
      method: 'POST',
      url: 'http://localhost:3000/tasks',
      headers: { 'Content-Type': 'application/json' },
      data: newTask
    })
      .then(res => {
        setTasks([newTask, ...tasks])
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Box className={style.container}>
        <Task tasks={tasks} />
      </Box>
      <TaskInput addTaskFunc={addTask} />
    </>
  )
}

export default TasksList
