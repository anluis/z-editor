import React from 'react'
import PropTypes from 'prop-types'
import Com from './Com'

const ComList = ({ coms }) => (
  <ul>{coms.map(com => <Com key={com.id} {...com} />)}</ul>
)

export default ComList
