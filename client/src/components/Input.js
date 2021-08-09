import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    backgroundColor: '#EFEFEF',
    padding: '6px',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    borderRadius: '3px'
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

const Input = () => {
  const style = useStyles()

  return (
    <Grid container justifyContent="space-between" alignItems="center" className={style.container}>
      <input className={style.input} type="text" maxLength="255" placeholder="Adicionar novo item" />
      <img src="/send.svg" className={style.img} />
    </Grid>
  )
}

export default Input
