import React from 'react'
import { Row, Col, Slider, InputNumber } from 'antd'
import { IMG_MODULE, BACKGROUND_MODULE } from '../../../constants/ModuleTypes'

const Opacity = ({ focusCom, updateCom, style }) => {
  if (focusCom === undefined) {
    return null
  } else {
    if (
      focusCom.attribute.type === IMG_MODULE ||
      focusCom.attribute.type === BACKGROUND_MODULE
    ) {
      console.log(style)
      return (
        <div className="attr-item opacity" style={style}>
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
    } else {
      return null
    }
  }
}
export default Opacity
