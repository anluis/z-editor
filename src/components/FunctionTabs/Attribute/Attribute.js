import React from 'react'
import { Input } from '@material-ui/core'

const Attribute = ({ focusCom }) => {
  if (focusCom === undefined) {
    return null
  } else {
    return (
      <div className="attributes">
        <div className="attr-item id">组件Id: {focusCom.id}</div>
        <div className="attr-item name">
          组件名称
          <Input onChange={e => {}} value={focusCom.attribute.name} />
        </div>
        <div className="attr-item x">
          组件X:
          <Input onChange={e => {}} value={focusCom.attribute.x} />
        </div>
        <div className="attr-item y">
          组件Y:
          <Input onChange={e => {}} value={focusCom.attribute.y} />
        </div>
        <div className="attr-item width">
          组件宽度:
          <Input onChange={e => {}} value={focusCom.attribute.width} />
        </div>
        <div className="attr-item height">
          组件高度:
          <Input onChange={e => {}} value={focusCom.attribute.height} />
        </div>
        <div className="attr-item img">
          图片:
          <Input onChange={e => {}} value={focusCom.attribute.imgUrl} />
        </div>
      </div>
    )
  }
}
export default Attribute
