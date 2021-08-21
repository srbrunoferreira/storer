import React, { useEffect, useState, useRef } from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Task from './Task'
import TaskInput from './TaskInput'
import axios from 'axios'

// import Task from './Task'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '360px',
    backgroundColor: '#EFEFEF',
    padding: '15px',
    marginTop: '15px',
    borderRadius: '3px',
    overflowY: 'scroll'
  }
}))

const TasksList = () => {
  const style = useStyles()
  const [tasks, setTasks] = useState([])
  const tasksEndRef = useRef(null)

  useEffect(() =>
    (async () => {
      const { data } = await axios('http://localhost:3000/tasks')
      setTasks(data.tasks)
    })()
  , [])

  const addTask = (taskText) => {
    if (taskText.length === 0) { console.log('O input deve ser preenchido.'); return }
    axios({
      method: 'POST',
      url: 'http://localhost:3000/tasks',
      headers: { 'Content-Type': 'application/json' },
      data: { status: 'done', text: taskText }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <>
      <Box className={style.container}>
        {
          tasks.map((item, index) => {
            let date = item.createdAt.split('T')[0]
            date = date.split('-')
            date = date[2] + '.' + date[1]
            return <Task key={index} date={date} text={item.text} />
          })
        }
        <div ref={tasksEndRef} />
      </Box>
      <TaskInput callback={addTask} />
    </>
  )
}

export default TasksList
