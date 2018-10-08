// @flow
import React from 'react'
import { Input } from 'antd'

type Props = {
  focusCom: (id: string) => void,
  updateCom: (id: string, attr: Object) => void
}
class Link extends React.Component<Props> {
  render() {
    const { focusCom, updateCom } = this.props
    if (focusCom === undefined) {
      return null
    } else {
      return (
        <div className="attr-item link">
          跳转链接(链接或者页码，页码从0开始):
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
}
export default Link
