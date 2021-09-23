import React, { useEffect, useRef, useState } from 'react'
import { Box, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Task from './Task'
import TaskInput from './TaskInput'
import axios from 'axios'
import { getIsoDate } from '../helpers/helpers'
import { PropTypes } from 'prop-types'

import TaskEdit from './TaskEdit'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '440px',
    backgroundColor: '#EFEFEF',
    padding: '15px',
    marginTop: '15px',
    borderRadius: '3px'
  },
  tasksList: {
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column-reverse',
    minHeight: '100%',
    maxHeight: '100%',
    paddingRight: '20px'
  }
}))

const TasksList = ({ setTasksCount }) => {
  const style = useStyles()
  const [tasks, setTasks] = useState([])
  const [showUpdateTask, setShowUpdateTask] = useState(false)
  const [editingTask, setEditingTask] = useState({})
  const taskListRef = useRef()

  useEffect(() =>
    (async () => {
      await axios('http://localhost:3000/tasks')
        .then(res => {
          setTasks(res.data.tasks.reverse())
          setTasksCount(res.data.tasks.length)
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
        newTask._id = res.data.id
        setTasks([newTask, ...tasks])
        setTasksCount(tasks.length + 1)
      })
      .catch(err => console.log(err))
  }

  const deleteTask = (taskId) => {
    axios({
      method: 'DELETE',
      url: 'http://localhost:3000/tasks/' + taskId
    })
      .then(() => {
        setTasks([...tasks].filter(task => task._id !== taskId))
        setTasksCount(tasks.length - 1)
      })
  }

  const updateTask = (id, status, text) => {
    setShowUpdateTask(true)
    setEditingTask({ id: id, status: status, text: text })
  }

  return (
    <>
      <Box className={style.container}>
        <List className={style.tasksList} ref={taskListRef}>
          <Task tasks={tasks} deleteTaskFunc={deleteTask} updateTaskFunc={updateTask} />
        </List>
      </Box>
      <TaskInput addTaskFunc={addTask} editTaskFunc={updateTask} />
      {
        showUpdateTask &&
        <TaskEdit {...editingTask} setShowEdit={setShowUpdateTask} />
      }
    </>
  )
}

TasksList.propTypes = {
  setTasksCount: PropTypes.func.isRequired
}

export default TasksList
