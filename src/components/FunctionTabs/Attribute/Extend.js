import React from 'react'
import { Input, Row, Col, Slider, InputNumber, Collapse } from 'antd'
import { SketchPicker } from 'react-color'
import Opacity from './Opacity'

const Panel = Collapse.Panel
const customPanelStyle = {
  background: '#eaeaea',
  border: 0,
  overflow: 'hidden'
}
const Extend = ({ focusCom, updateCom, style }) => {
  if (focusCom === undefined) {
    return null
  } else {
    return (
      <div className="attribute-extend" style={style}>
        <Collapse bordered={false}>
          <Panel header="边框" key="1" style={customPanelStyle}>
            <div className="attr-item borderStyle">
              边框样式:
              <Input
                onChange={e => {
                  let updatedAttr = {
                    ...focusCom.attribute,
                    borderStyle: String(e.target.value)
                  }
                  updateCom(focusCom.id, updatedAttr)
                }}
                value={focusCom.attribute.borderStyle}
              />
            </div>
            <div className="attr-item borderColor">
              边框颜色:
              <SketchPicker
                color={focusCom.attribute.borderColor}
                onChangeComplete={e => {
                  let updatedAttr = {
                    ...focusCom.attribute,
                    borderColor: String(e.hex)
                  }
                  updateCom(focusCom.id, updatedAttr)
                }}
              />
            </div>
            <div className="attr-item borderWidth">
              边框尺寸:
              <Row>
                <Col span={12}>
                  <Slider
                    min={0}
                    max={20}
                    onChange={value => {
                      let updatedAttr = {
                        ...focusCom.attribute,
                        borderWidth: Number(value)
                      }
                      updateCom(focusCom.id, updatedAttr)
                    }}
                    value={focusCom.attribute.borderWidth}
                    step={1}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={0}
                    max={20}
                    style={{ marginLeft: 16 }}
                    step={1}
                    value={focusCom.attribute.borderWidth}
                    onChange={value => {
                      let updatedAttr = {
                        ...focusCom.attribute,
                        borderWidth: Number(value)
                      }
                      updateCom(focusCom.id, updatedAttr)
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="attr-item borderRadius">
              边框弧度:
              <Row>
                <Col span={12}>
                  <Slider
                    min={0}
                    max={80}
                    onChange={value => {
                      let updatedAttr = {
                        ...focusCom.attribute,
                        borderRadius: Number(value)
                      }
                      updateCom(focusCom.id, updatedAttr)
                    }}
                    value={focusCom.attribute.borderRadius}
                    step={1}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={0}
                    max={80}
                    style={{ marginLeft: 16 }}
                    step={1}
                    value={focusCom.attribute.borderRadius}
                    onChange={value => {
                      let updatedAttr = {
                        ...focusCom.attribute,
                        borderRadius: Number(value)
                      }
                      updateCom(focusCom.id, updatedAttr)
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Panel>
          <Panel header="尺寸" key="2" style={customPanelStyle}>
            <div className="attr-item x">
              位置X:
              <Input
                onChange={e => {
                  let updatedAttr = {
                    ...focusCom.attribute,
                    x: Number(e.target.value)
                  }
                  updateCom(focusCom.id, updatedAttr)
                }}
                value={focusCom.attribute.x}
              />
            </div>
            <div className="attr-item y">
              位置Y:
              <Input
                onChange={e => {
                  let updatedAttr = {
                    ...focusCom.attribute,
                    y: Number(e.target.value)
                  }
                  updateCom(focusCom.id, updatedAttr)
                }}
                value={focusCom.attribute.y}
              />
            </div>
            <div className="attr-item width">
              尺寸宽:
              <Input
                onChange={e => {
                  let updatedAttr = {
                    ...focusCom.attribute,
                    width: Number(e.target.value)
                  }
                  updateCom(focusCom.id, updatedAttr)
                }}
                value={focusCom.attribute.width}
              />
            </div>
            <div className="attr-item height">
              尺寸高:
              <Input
                onChange={e => {
                  let updatedAttr = {
                    ...focusCom.attribute,
                    height: Number(e.target.value)
                  }
                  updateCom(focusCom.id, updatedAttr)
                }}
                value={focusCom.attribute.height}
              />
            </div>
            <Opacity updateCom={updateCom} focusCom={focusCom} />
          </Panel>
        </Collapse>
      </div>
    )
  }
}
export default Extend
