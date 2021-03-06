import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'

import './App.css'
import TasksList from './components/TasksList'
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
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius: '3px',
    padding: '15px',
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
  const [tasksCount, setTasksCount] = useState(0)

  return (
    <Grid
      className={classes.container}
      container
      justifyContent="space-around"
      alignItems="center"
    >

      <Grid className={classes.subContainer} item xs>
        <img src="/logo.svg" width="190px" />
      </Grid>

      <Grid className={classes.subContainer} item xs>

        <Box id="content-wrapper" className={classes.contentWrapper}>
          <Box className={classes.header}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
              <Box>
                <Text text="Olá, " size="lg" />
                <Text text="Bruno" bold size="lg" />
              </Box>
              <Text text={(tasksCount ?? '*') + ' Tasks'} size="sm" />
            </Grid>
          </Box>

          <TasksList setTasksCount={setTasksCount} />
        </Box>

      </Grid>

    </Grid>
  )
}

export default App
