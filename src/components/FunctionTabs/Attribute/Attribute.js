import React from 'react'
import { Input } from '@material-ui/core'

const Attribute = ({ focusCom, updateCom }) => {
  if (focusCom === undefined) {
    return null
  } else {
    return (
      <div className="attributes">
        <div className="attr-item id">组件Id: {focusCom.id}</div>
        <div className="attr-item name">
          组件名称:
          <Input
            onChange={e => {
              let updatedAttr = {
                ...focusCom.attribute,
                name: e.target.value
              }
              updateCom(focusCom.id, updatedAttr)
            }}
            value={focusCom.attribute.name}
          />
        </div>
        <div className="attr-item x">
          组件X:
          <Input
            onChange={e => {
              let updatedAttr = {
                ...focusCom.attribute,
                x: Number(e.target.value)
              }
              updateCom(focusCom.id, updatedAttr)
            }}
            value={focusCom.attribute.x}
          />
        </div>
        <div className="attr-item y">
          组件Y:
          <Input
            onChange={e => {
              let updatedAttr = {
                ...focusCom.attribute,
                y: Number(e.target.value)
              }
              updateCom(focusCom.id, updatedAttr)
            }}
            value={focusCom.attribute.y}
          />
        </div>
        <div className="attr-item width">
          组件宽度:
          <Input
            onChange={e => {
              let updatedAttr = {
                ...focusCom.attribute,
                width: Number(e.target.value)
              }
              updateCom(focusCom.id, updatedAttr)
            }}
            value={focusCom.attribute.width}
          />
        </div>
        <div className="attr-item height">
          组件高度:
          <Input
            onChange={e => {
              let updatedAttr = {
                ...focusCom.attribute,
                height: Number(e.target.value)
              }
              updateCom(focusCom.id, updatedAttr)
            }}
            value={focusCom.attribute.height}
          />
        </div>
        <div className="attr-item img">
          图片:
          <Input
            onChange={e => {
              let updatedAttr = {
                ...focusCom.attribute,
                imgUrl: e.target.value
              }
              updateCom(focusCom.id, updatedAttr)
            }}
            value={focusCom.attribute.imgUrl}
          />
        </div>
      </div>
    )
  }
}
export default Attribute
