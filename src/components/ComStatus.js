import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from '@material-ui/core/Input'
import { changeCurrentName } from '../actions'

const ComStatus = ({ dispatch, com }) => {
  if (com === null) {
    return <div>未选中任何组件</div>
  } else {
    let nameValue = com.text
    return (
      <div>
        <div>组件id: {com.id}</div>
        <div>组件x: {com.style.x}</div>
        <div>组件y: {com.style.y}</div>
        <div>组件width: {com.style.width}</div>
        <div>组件height: {com.style.height}</div>
        <div>组件名称: {com.text}</div>

        <div>
          <span>组件名称</span>
          <Input
            value={nameValue}
            onChange={e => {
              dispatch(changeCurrentName(com.id, e.target.value))
              console.dir(com)
            }}
          />
        </div>
      </div>
    )
  }
}
ComStatus.PropTypes = {
  id: PropTypes.number.isRequired
}

export default connect()(ComStatus)
