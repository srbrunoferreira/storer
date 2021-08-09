import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import './App.css'
import ItemsContainer from './components/ItemsContainer'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#040111',
    height: '100vh',
    padding: '15px'
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  white: {
    color: 'white'
  }
}))

function App () {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.subContainer} container xs>
        <img src="/logo.svg" width="190px" />
      </Grid>
      <Grid item className={classes.subContainer} container xs>
        <ItemsContainer />
      </Grid>
    </Grid>
  )
}

export default App
