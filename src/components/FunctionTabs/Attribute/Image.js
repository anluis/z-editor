import React from 'react'
import { Input } from 'antd'
import { IMG_MODULE, BACKGROUND_MODULE } from '../../../constants/ModuleTypes'

const Image = ({ focusCom, updateCom }) => {
  if (focusCom === undefined) {
    return null
  } else {
    if (
      focusCom.attribute.type === IMG_MODULE ||
      focusCom.attribute.type === BACKGROUND_MODULE
    ) {
      return (
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
      )
    } else {
      return null
    }
  }
}
export default Image
