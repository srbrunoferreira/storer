import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, TextField } from '@material-ui/core'
import { PropTypes } from 'prop-types'
import { Close as CloseIcon, Save as SaveIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '320px',
    minHeight: '300px',
    padding: '10px',
    transform: 'translate(-50%,-50%)',
    backgroundColor: 'white',
    borderRadius: '3px',
    paddingRight: '30px',
    paddingLeft: '30px',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  },
  icons: {
    cursor: 'pointer'
  }
}))

const TaskEdit = ({ id, status, text, setShowEdit, updateTask }) => {
  const style = useStyles()
  const [newText, setNewText] = useState(text)

  return (
    <Grid
      className={style.wrapper}
      container
      direction="column"
      justifyContent="space-around"
      alignItems="flex-start"
    >
      <Grid
        container item
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <h2>Editar task</h2>
        <Grid item>
          <SaveIcon className={style.icons} titleAccess="Salvar" style={{ marginRight: '5px' }} onClick={() => updateTask(id, status, newText)} htmlColor="#6b58f3" />
          <CloseIcon className={style.icons} titleAccess="Fechar" onClick={() => setShowEdit(false)} htmlColor="#6b58f3" />
        </Grid>
      </Grid>
      <TextField
        label="Editar texto"
        variant="standard"
        onChange={(event) => setNewText(event.target.value)}
        value={newText}
        multiline
        maxRows={5}
        minRows={5}
      />
    </Grid>
  )
}

TaskEdit.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  setShowEdit: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired
}

export default TaskEdit
