// @flow
import React from 'react'
import { Modal, Input } from 'antd'
const { TextArea } = Input

type Props = {
  visible: boolean,
  payload: {
    author: string,
    name: string,
    desc: string
  },
  changeWorkSettingVisible: (
    visible: boolean,
    payload: {
      author: string,
      name: string,
      desc: string
    }
  ) => void
}

type State = {
  author: string,
  name: string,
  desc: string
}

class SettingModal extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = {
      author: '',
      name: '',
      desc: ''
    }
  }

  render() {
    const { visible, payload, changeWorkSettingVisible } = this.props
    return (
      <div>
        <Modal
          destroyOnClose
          title="页面设置"
          visible={visible}
          onOk={() => changeWorkSettingVisible(false, this.state)}
          onCancel={() => changeWorkSettingVisible(false, payload)}
        >
          <div className="attr-item">
            作者:
            <Input
              onChange={e => {
                this.setState({
                  author: e.target.value
                })
              }}
              maxLength="12"
              defaultValue={payload.author}
            />
          </div>
          <div className="attr-item">
            项目名称:
            <Input
              onChange={e => {
                this.setState({
                  name: e.target.value
                })
              }}
              maxLength="12"
              defaultValue={payload.name}
            />
          </div>
          <div className="attr-item">
            项目描述:
            <TextArea
              autosize={{ minRows: 2, maxRows: 6 }}
              onChange={e => {
                this.setState({
                  desc: e.target.value
                })
              }}
              defaultValue={payload.desc}
            />
          </div>
        </Modal>
      </div>
    )
  }
}

export default SettingModal
