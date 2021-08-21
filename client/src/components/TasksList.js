import React, { useEffect, useState, useRef } from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Task from './Task'
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

  // Scrolls to the bottom of the container.
  useEffect(() => tasksEndRef.current?.scrollIntoView({ behavior: 'smooth' }), [tasks])

  useEffect(() =>
    (async () => {
      const { data } = await axios('http://localhost:3000/tasks')
      setTasks(data.tasks)
    })()
  , [])

  console.dir(tasks)

  return (
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
  )
}

export default TasksList
