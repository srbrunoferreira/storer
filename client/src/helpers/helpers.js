'use strict'

export const getIsoDate = () => {
  return new Date().toISOString()
}

/**
 *
 * @param {string} date a date in the ISO format.
 * @returns {string} a date in the MM/YY format.
 */
export const formatTaskDate = (date) => {
  const formatedDate = date.split('T')[0].split('-')

  return formatedDate[2] + '.' + formatedDate[1] + '.' + formatedDate[0].substr(2)
}
