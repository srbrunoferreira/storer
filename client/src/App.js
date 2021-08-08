import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import './App.css'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#040111',
    height: '100vh'
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  white: {
    color: 'white'
  },
  itemsContainer: {
    width: '390px',
    height: '530px',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius: '3px',
    padding: '10px'
  }
}))

function App () {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Grid className={classes.subContainer} container xs>
        <img src="/logo.svg" width="190px" />
      </Grid>
      <Grid className={classes.subContainer} container xs></Grid>
    </Grid>
  )
}

export default App
