import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    backgroundColor: '#EFEFEF',
    padding: '15px'
  }
}))

const ItemsContainer = () => {
  const style = useStyles()

  return (
    <Box className={style.contaienr}>
      <p>lorem</p>
    </Box>
  )
}

export default ItemsContainer
