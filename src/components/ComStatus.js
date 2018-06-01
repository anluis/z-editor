import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ComStatus = ({ com }) => {
  console.dir(com)
  if (com === null) {
    return <div>未选中任何组件</div>
  } else {
    return (
      <div>
        <div>组件id: {com.id}</div>
        <div>组件x: {com.style.x}</div>
        <div>组件y: {com.style.y}</div>
        <div>组件width: {com.style.width}</div>
        <div>组件height: {com.style.height}</div>
      </div>
    )
  }
}
ComStatus.propTypes = {
  id: PropTypes.number.isRequired
}

export default connect()(ComStatus)
