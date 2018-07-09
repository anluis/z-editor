import React from 'react'
import { connect } from 'react-redux'
import Input from '@material-ui/core/Input'
import { updateStyles } from '../actions'

const ComStatus = ({ dispatch, comstatus }) => {
  if (comstatus === null) {
    return null
  } else
    return (
      <div>
        <div>
          组件id:
          {comstatus.id}
        </div>
        <div>
          组件X:
          <Input
            onChange={event => {
              const updatedStyle = {
                x: Number(event.target.value),
                y: Number(comstatus.style.y),
                width: Number(comstatus.style.width),
                height: Number(comstatus.style.height)
              }
              dispatch(updateStyles(updatedStyle, comstatus.id))
            }}
            value={comstatus.style.x}
          />
        </div>
        <div>组件Y: {comstatus.style.y}</div>
        <div>组件width: {comstatus.style.width}</div>
        <div>组件height: {comstatus.style.height}</div>
      </div>
    )
}

export default connect()(ComStatus)
