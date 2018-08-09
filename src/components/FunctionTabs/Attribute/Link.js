import React from 'react'
import { Input } from 'antd'
import { IMG_MODULE } from '../../../constants/ModuleTypes'

const Link = ({ focusCom, updateCom }) => {
  if (focusCom === undefined) {
    return null
  } else {
    if (focusCom.attribute.type === IMG_MODULE) {
      return (
        <div className="attr-item link">
          链接:
          <Input
            onChange={e => {
              let updatedAttr = {
                ...focusCom.attribute,
                link: e.target.value
              }
              updateCom(focusCom.id, updatedAttr)
            }}
            value={focusCom.attribute.link}
          />
        </div>
      )
    } else {
      return null
    }
  }
}
export default Link
