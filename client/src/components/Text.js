import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { PropTypes } from 'prop-types'

const useStyles = makeStyles((theme) => ({
  text: {
    color: '#040111',
    display: 'inline'
  }
}))

const Text = (props) => {
  const style = useStyles()
  const fontWeight = props.bold === true ? '700' : '400'
  let size = ''

  switch (props.size) {
    case 'sm':
      size = '0.75em'
      break
    case 'lg':
      size = '1.5em'
      break
    default:
      size = '0.95em'
      break
  }

  return (
    <p className={style.text} style={{ fontSize: size, fontWeight: fontWeight }}>{props.text}</p>
  )
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  bold: PropTypes.bool
}

export default Text
