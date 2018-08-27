// @flow
import React from 'react'
import { Modal, Button, Input } from 'antd'

type Props = {
  currentSettings: Object,
  shouldSettingsShow: boolean,
  swichSetting: (b: boolean) => void
}

type ModelProps = {
  currentSettings: Object,
  shouldSettingsShow: boolean,
  swichSetting: (b: boolean) => void
}

class SettingsModel extends React.Component<ModelProps> {
  render() {
    const { shouldSettingsShow, swichSetting } = this.props
    return (
      <Modal
        visible={shouldSettingsShow}
        title="页面设置"
        onOk={() => swichSetting(false)}
        onCancel={() => swichSetting(false)}
        footer={[
          <Button key="back" onClick={() => swichSetting(false)}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => swichSetting(false)}
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

class Settings extends React.Component<Props> {
  render() {
    return <SettingsModel {...this.props} />
  }
}

export default Settings
