// @flow
import React from 'react'
import { Row, Col, Slider, InputNumber } from 'antd'

type Props = {
  focusCom: (id: string) => void,
  updateCom: (id: string, attr: Object) => void
}
class Opacity extends React.Component<Props> {
  render() {
    const { focusCom, updateCom } = this.props
    if (focusCom === undefined) {
      return null
    } else {
      return (
        <div className="attr-item opacity">
          透明度:
          <Row>
            <Col span={12}>
              <Slider
                min={0}
                max={1}
                onChange={value => {
                  let updatedAttr = {
                    ...focusCom.attribute,
                    opacity: Number(value)
                  }
                  updateCom(focusCom.id, updatedAttr)
                }}
                value={focusCom.attribute.opacity}
                step={0.01}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={1}
                style={{ marginLeft: 16 }}
                step={0.01}
                value={focusCom.attribute.opacity}
                onChange={value => {
                  let updatedAttr = {
                    ...focusCom.attribute,
                    opacity: Number(value)
                  }
                  updateCom(focusCom.id, updatedAttr)
                }}
              />
            </Col>
          </Row>
        </div>
      )
    }
  }
}
export default Opacity
