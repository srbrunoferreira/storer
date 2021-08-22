import React from 'react'
import { Box } from '@material-ui/core'
import { PropTypes } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Text from './Text'
import { formatTaskDate } from '../helpers/helpers'

const useStyles = makeStyles((theme) => ({
  item: {
    backgroundColor: '#F4F4F4',
    marginTop: '15px',
    padding: '15px',
    paddingLeft: '8px',
    paddingRight: '8px'
  },
  itemDate: {
    marginRight: '12px'
  }
}))

const Task = ({ tasks }) => {
  const style = useStyles()

  return tasks.map((task, index) => (
    <Box className={style.item} key={index}>
      <Text className={style.itemDate} text={formatTaskDate(task.createdAt)} bold size="sm" />
      <Text text={task.text} size="sm" />
    </Box>
  ))
}

Task.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default Task
