import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Text from './Text'

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    width: '390px',
    height: '530px',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius: '3px',
    padding: '10px'
  },
  header: {
    width: '100%',
    backgroundColor: '#EFEFEF',
    padding: '15px'
  }
}))

const ItemsContainer = () => {
  const classes = useStyles()

  return (
    <Box className={classes.itemsContainer}>
      <Box className={classes.header}>
        <Text text="Olá, " size="lg" />
        <Text text="Bruno" bold size="lg" />
      </Box>
    </Box>
  )
}

export default ItemsContainer
