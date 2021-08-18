import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'
import axios from 'axios'

import './App.css'
import ItemsContainer from './components/ItemsContainer'
import Text from './components/Text'
import Input from './components/Input'

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

  function handleTaskSubmit (taskText) {
    if (taskText.length === 0) { console.log('O input deve ser preenchido.'); return }
    axios({
      method: 'POST',
      url: 'http://localhost:3000/tasks',
      headers: { 'Content-Type': 'application/json' },
      data: { status: 'done', text: taskText }
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

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

        <Box className={classes.contentWrapper}>
          <Box className={classes.header}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
              <Box>
                <Text text="Olá, " size="lg" />
                <Text text="Bruno" bold size="lg" />
              </Box>
              <Text text="3 Items" size="sm" />
            </Grid>
          </Box>

          <ItemsContainer />

          <Input callback={handleTaskSubmit} />
        </Box>

      </Grid>

    </Grid>
  )
}

export default App
