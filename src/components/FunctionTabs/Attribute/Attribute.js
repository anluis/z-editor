import React from 'react'
import Input from '@material-ui/core'
import { connect } from 'react-redux'

const Attribute = ({ com }) => {
  if (com.current === null) {
    return null
  } else {
    return (
      <div className="attributes">
        <div className="attr-item id">组件Id: {com.current}</div>
        <div className="attr-item name">
          组件名称
          <Input
            onChange={e => {
              let updatedComName
              updatedComName = e.target.value
            }}
            value={com.current.name}
          />
        </div>
        <div className="attr-item x">
          组件X:
          <Input onChange={e => {}} value={com.current.x} />
        </div>
        <div className="attr-item y">
          组件Y:
          <Input onChange={e => {}} value={com.current.y} />
        </div>
        <div className="attr-item width">
          组件宽度:
          <Input onChange={e => {}} value={com.current.width} />
        </div>
        <div className="attr-item height">
          组件高度:
          <Input onChange={e => {}} value={com.current.height} />
        </div>
        <div className="attr-item img">
          图片:
          <Input onChange={e => {}} value={com.current.img} />
        </div>
      </div>
    )
  }
}
export default connect()(Attribute)
