import React from 'react'
import { Input } from 'antd'
import { SketchPicker } from 'react-color'

const { TextArea } = Input
const Textarea = ({ focusCom, updateCom, style }) => {
  if (focusCom === undefined) {
    return null
  } else {
    return (
      <div style={style}>
        <div className="attr-item content">
          文本:
          <TextArea
            placeholder="请输入文字"
            autosize={{ minRows: 2, maxRows: 10 }}
            onChange={e => {
              let updatedAttr = {
                ...focusCom.attribute,
                content: e.target.value
              }
              updateCom(focusCom.id, updatedAttr)
            }}
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
export default Textarea
