import React from 'react'
import { Input } from 'antd'

const Link = ({ focusCom, updateCom, style }) => {
  if (focusCom === undefined) {
    return null
  } else {
    return (
      <div className="attr-item link" style={style}>
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
  }
}
export default Link
