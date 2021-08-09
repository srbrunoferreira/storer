import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'

import './App.css'
import ItemsContainer from './components/ItemsContainer'
import Text from './components/Text'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#040111',
    height: '100vh',
    padding: '15px'
  },
  subContainer: {
    textAlign: 'center'
  },
  white: {
    color: 'white'
  },
  contentWrapper: {
    width: '390px',
    height: '530px',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius: '3px',
    padding: '10px',
    textAlign: 'left'
  },
  header: {
    width: '100%',
    backgroundColor: '#EFEFEF',
    padding: '15px'
  }
}))

function App () {
  const classes = useStyles()

  return (
    <Grid
      className={classes.container}
      container
      justifyContent="center"
      alignItems="center"
    >

      <Grid className={classes.subContainer} item xs>
        <img src="/logo.svg" width="190px" />
      </Grid>

      <Grid className={classes.subContainer} item xs>

        <Box className={classes.contentWrapper}>
          <Box className={classes.header}>
            <Text text="Olá, " size="lg" />
            <Text text="Bruno" bold size="lg" />
          </Box>

          <ItemsContainer />
        </Box>

      </Grid>

    </Grid>
  )
}

export default App
