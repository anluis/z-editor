// @flow
import React from 'react'
import { Input } from 'antd'

type Props = {
  focusCom: (id: string) => void,
  updateCom: (id: string, attr: Object) => void
}
class Video extends React.Component<Props> {
  render() {
    const { focusCom, updateCom } = this.props
    if (focusCom === undefined) {
      return null
    } else {
      return (
        <div className="attr-item img">
          视频:
          <Input
            onChange={e => {
              let updatedAttr = {
                ...focusCom.attribute,
                videoUrl: e.target.value
              }
              updateCom(focusCom.id, updatedAttr)
            }}
            value={focusCom.attribute.videoUrl}
          />
        </div>
      )
    }
  }
}
export default Video
