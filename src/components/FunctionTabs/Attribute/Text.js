// @flow
import React from 'react'
import { Input } from 'antd'
import { SketchPicker } from 'react-color'

const Text = ({
  focusCom,
  updateCom,
  style
}: {
  focusCom: Object,
  updateCom: (id: string, attr: Object) => void,
  style: Object
}) => {
  if (focusCom === undefined) {
    return null
  } else {
    return (
      <div style={style}>
        <div className="attr-item content">
          文本:
          <Input
            onChange={e => {
              let updatedAttr = {
                ...focusCom.attribute,
                content: e.target.value
              }
              updateCom(focusCom.id, updatedAttr)
            }}
            maxLength="12"
            value={focusCom.attribute.content}
          />
        </div>
        <div className="attr-item color">
          文字颜色:
          <SketchPicker
            color={focusCom.attribute.color}
            onChangeComplete={e => {
              let updatedAttr = {
                ...focusCom.attribute,
                color: String(e.hex)
              }
              updateCom(focusCom.id, updatedAttr)
            }}
          />
        </div>
        <div className="attr-item background">
          背景颜色:
          <SketchPicker
            color={focusCom.attribute.background}
            onChangeComplete={e => {
              let updatedAttr = {
                ...focusCom.attribute,
                background: String(e.hex)
              }
              updateCom(focusCom.id, updatedAttr)
            }}
          />
        </div>
      </div>
    )
  }
}
export default Text
