// @flow
import React from 'react'
import { Modal, Button, Input } from 'antd'

type Props = {
  settings: {
    visible: boolean,
    payload: Object
  },
  targetPageId: string,
  editPageSettings: (
    visible: boolean,
    payload: Object,
    targetPageId: string
  ) => void
}

type State = {
  title: string
}

class Settings extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }
  render() {
    const { visible, payload } = this.props.settings
    const { editPageSettings, targetPageId } = this.props
    return (
      <Modal
        destroyOnClose
        visible={visible}
        title="页面设置"
        onOk={() => editPageSettings(false, this.state, targetPageId)}
        onCancel={() => editPageSettings(false, payload, targetPageId)}
        footer={[
          <Button
            key="back"
            onClick={() => editPageSettings(false, payload, targetPageId)}
          >
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => editPageSettings(false, this.state, targetPageId)}
          >
            Submit
          </Button>
        ]}
      >
        <div className="attr-item" style={{ marginBottom: 20 }}>
          页面标题:
          <Input
            defaultValue={payload.name}
            maxLength="12"
            onChange={e => {
              this.setState({
                name: e.target.value
              })
            }}
          />
        </div>
      </Modal>
    )
  }
}

export default Settings
