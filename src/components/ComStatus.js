import React from 'react'
import { connect } from 'react-redux'

const ComStatus = ({ style, id }) => {
  return (
    <div>
      <div>组件id: {id}</div>
      {/* <div>组件x: {coms.x}</div> */}
      {/* <div>组件y: {coms.y}</div> */}
    </div>
  )
}

export default connect()(ComStatus)
