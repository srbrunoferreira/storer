import React, { useEffect, useRef, useState } from 'react'
import { Box, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Task from './Task'
import TaskInput from './TaskInput'
import axios from 'axios'
import { getIsoDate } from '../helpers/helpers'
import { PropTypes } from 'prop-types'

import FadeIn from 'react-fade-in'

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

// const baseUrl = 'https://dev-bruno-ferreira-storer.herokuapp.com:3000/tasks/'
const baseUrl = 'http://localhost:3000/tasks/'

const TasksList = ({ setTasksCount }) => {
  const style = useStyles()
  const [tasks, setTasks] = useState([])
  const [showUpdateTask, setShowUpdateTask] = useState(false)
  const [editingTask, setEditingTask] = useState({})
  const taskListRef = useRef()

  useEffect(() =>
    (async () => {
      await axios(baseUrl)
        .then(res => {
          setTasks(res.data.tasks)
          setTasksCount(res.data.tasks.length)
        })
    })()
  , [])

  const addTask = (taskText) => {
    if (taskText.length === 0) { console.log('O input deve ser preenchido.'); return }

    const newTask = { status: 'done', text: taskText, createdAt: getIsoDate() }

    axios({
      method: 'POST',
      url: baseUrl,
      headers: { 'Content-Type': 'application/json' },
      data: newTask
    })
      .then(res => {
        newTask._id = res.data.id
        setTasks([...tasks, newTask])
        setTasksCount(tasks.length + 1)
      })
      .catch(err => console.log(err))
  }

  const deleteTask = (taskId) => {
    axios({
      method: 'DELETE',
      url: baseUrl + taskId
    })
      .then(() => {
        setTasks([...tasks].filter(task => task._id !== taskId))
        setTasksCount(tasks.length - 1)
      })
  }

  const showUpdateTaskView = (id, status, text) => {
    setShowUpdateTask(true)
    setEditingTask({ id: id, status: status, text: text })
  }

  const updateTask = (id, status, text) => {
    setShowUpdateTask(false)
    axios({
      method: 'PUT',
      url: baseUrl + id,
      data: { status: status, text: text }
    })
      .then(() => {
        tasks.forEach((task, index) => {
          if (task._id === id) {
            tasks[index].text = text
            tasks[index].status = status

            setTasks([...tasks])
          }
        })
      })
  }

  return (
    <>
      <Box className={style.container}>
        <List className={style.tasksList} ref={taskListRef}>
          <FadeIn>
            <Task tasks={tasks} deleteTaskFunc={deleteTask} showUpdateTaskView={showUpdateTaskView} />
          </FadeIn>
        </List>
      </Box>
      <TaskInput addTaskFunc={addTask} />
      {
        showUpdateTask &&
        <TaskEdit {...editingTask} setShowEdit={setShowUpdateTask} updateTask={updateTask} />
      }
    </>
  )
}

TasksList.propTypes = {
  setTasksCount: PropTypes.func.isRequired
}

export default TasksList
