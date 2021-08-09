import React from 'react'
import { Box } from '@material-ui/core'
import { PropTypes } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Text from './Text'

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

const Item = (props) => {
  const style = useStyles()
  return (
    <Box className={style.item}>
      <Text className={style.itemDate} text={props.date} bold size="sm" />
      <Text text={props.text} size="sm" />
    </Box>
  )
}

Item.propTypes = {
  key: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Item
