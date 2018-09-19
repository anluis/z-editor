// @flow
import React from 'react'
import { Input } from 'antd'

type Props = {
  focusCom: (id: string) => void,
  updateCom: (id: string, attr: Object) => void,
  style: Object
}

class Image extends React.Component<Props> {
  render() {
    const { focusCom, updateCom, style } = this.props
    if (focusCom === undefined) {
      return null
    } else {
      return (
        <div className="attr-item img" style={style}>
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
    }
  }
}
export default Image
