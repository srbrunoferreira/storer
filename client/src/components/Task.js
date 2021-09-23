import React from 'react'
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons'
import { PropTypes } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import { formatTaskDate } from '../helpers/helpers'
import Text from './Text'

const useStyles = makeStyles((theme) => ({
  text: {
    color: '#040111',
    fontSize: '0.92em'
  },
  createdAt: {
    display: 'block',
    marginTop: '8px'
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  icon: {
    color: '#D2D2D2',
    fontSize: '21px',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
    '&:hover': {
      color: '#969696'
    }
  }
}))

const Task = ({ tasks, deleteTaskFunc, updateTaskFunc }) => {
  const style = useStyles()

  return tasks.map((task, index) => (
    <ListItem className={style.taskContainer} key={index} divider>
      <ListItemText
        className={style.text}
        disableTypography
        primary={task.text.length > 120 ? task.text.substr(0, 120) + '...' : task.text}
        secondary={<Text className={style.createdAt} text={formatTaskDate(task.createdAt)}/>}
      />
      <ListItemIcon className={style.iconsContainer}>
        <DeleteIcon className={style.icon} onClick={() => deleteTaskFunc(task._id)} />
        <EditIcon className={style.icon} onClick={() => updateTaskFunc(task._id, task.status, task.text)} />
      </ListItemIcon>
    </ListItem>
  ))
}

Task.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTaskFunc: PropTypes.func.isRequired,
  updateTaskFunc: PropTypes.func.isRequired
}

export default Task
