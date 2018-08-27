// @flow
import React from 'react'
import { Modal, Button, Input } from 'antd'

type Props = {
  visible: boolean,
  payload: object,
  editPageSettings: () => void
}

class Settings extends React.Component<Props> {
  render() {
    const { visible, payload, editPageSettings } = this.props
    return (
      <Modal
        visible={visible}
        title="页面设置"
        onOk={() => editPageSettings(false)}
        onCancel={() => editPageSettings(false, payload)}
        footer={[
          <Button key="back" onClick={() => editPageSettings(false, payload)}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => editPageSettings(false)}
          >
            Submit
          </Button>
        ]}
      >
        <div className="attr-item" style={{ marginBottom: 20 }}>
          页面标题:
          <Input maxLength="12" />
        </div>
      </Modal>
    )
  }
}

export default Settings
