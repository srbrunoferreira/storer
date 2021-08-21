import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { PropTypes } from 'prop-types'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    backgroundColor: '#EFEFEF',
    padding: '6px',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    borderRadius: '3px',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    }
  },
  input: {
    backgroundColor: '#DADADD',
    border: 'none',
    width: '90%',
    height: '35px',
    fontSize: '0.8em',
    padding: '5px',
    borderRadius: '3px',
    outline: 'none'
  },
  img: {
    width: '28px',
    margin: '0 auto 0',
    cursor: 'pointer'
  }
}))

const TaskInput = (props) => {
  const style = useStyles()
  const textInput = React.createRef()

  function handleInput () {
    const taskText = textInput.current.value
    if (taskText.length > 0) { props.callback(taskText) }
  }

  return (
    <Grid container justifyContent="space-between" alignItems="center" className={style.container}>
      <input className={style.input} ref={textInput} type="text" maxLength="255" placeholder="Adicionar novo item" />
      <img onClick={handleInput} src="/send.svg" className={style.img} />
    </Grid>
  )
}

TaskInput.propTypes = {
  callback: PropTypes.func.isRequired
}

export default TaskInput
