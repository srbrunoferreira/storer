import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Item from './Item'

// import Item from './Item'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '360px',
    backgroundColor: '#EFEFEF',
    padding: '15px',
    marginTop: '15px',
    borderRadius: '3px',
    overflow: 'auto'
  }
}))

const ItemsContainer = () => {
  const style = useStyles()

  const items = [
    {
      date: '08.08.21',
      text: 'Aprendendo React'
    },
    {
      date: '12.08.21',
      text: 'Aprendendo Laravel'
    },
    {
      date: '25.08.21',
      text: 'Aprendendo NodeJS'
    }
  ]

  return (
    <Box className={style.container}>
      {
        items.map((item, index) => {
          return <Item key={index} date={item.date} text={item.text} />
        })
      }
    </Box>
  )
}

export default ItemsContainer
