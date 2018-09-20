// @flow
import React from 'react'
import {
  Input,
  Row,
  Col,
  Slider,
  InputNumber,
  Collapse,
  Select,
  Checkbox
} from 'antd'
import { SketchPicker } from 'react-color'
import Opacity from './Opacity'

const Panel = Collapse.Panel
const Option = Select.Option
const customPanelStyle = {
  background: '#eaeaea',
  border: 0,
  overflow: 'hidden'
}

type Props = {
  focusCom: (id: string) => void,
  updateCom: (id: string, attr: Object) => void
}
class Extend extends React.Component<Props> {
  render() {
    const { focusCom, updateCom } = this.props
    if (focusCom === undefined) {
      return null
    } else {
      return (
        <div className="attribute-extend">
          <Collapse bordered={false} accordion>
            <Panel header="边框" key="1" style={customPanelStyle}>
              <div className="attr-item borderStyle">
                边框样式:
                <Select
                  defaultValue={focusCom.attribute.borderStyle}
                  style={{ width: 120, marginLeft: 10 }}
                  onChange={value => {
                    let updatedAttr = {
                      ...focusCom.attribute,
                      borderStyle: `${value}`
                    }
                    updateCom(focusCom.id, updatedAttr)
                  }}
                >
                  <Option value="none">---无---</Option>
                  <Option value="solid">直线</Option>
                  <Option value="dashed">虚线</Option>
                  <Option value="dotted">点状</Option>
                  <Option value="double">双线</Option>
                  <Option value="groove">3D 凹槽</Option>
                  <Option value="ridge">3D 垄状</Option>
                  <Option value="inset">3D inset</Option>
                  <Option value="outset">3D outset</Option>
                </Select>
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
            <Panel header="动画" key="3" style={customPanelStyle}>
              <div className="attr-item animationName">
                动画类型:
                <Select
                  defaultValue={focusCom.attribute.animationName}
                  style={{ width: 220, marginLeft: 10 }}
                  onChange={value => {
                    let updatedAttr = {
                      ...focusCom.attribute,
                      animationName: `${value}`
                    }
                    updateCom(focusCom.id, updatedAttr)
                  }}
                >
                  <Option value="none">---无---</Option>
                  <Option value="bounce">bounce</Option>
                  <Option value="flash">flash</Option>
                  <Option value="pulse">pulse</Option>
                  <Option value="rubberBand">rubberBand</Option>
                  <Option value="shake">shake</Option>
                  <Option value="swing">swing</Option>
                  <Option value="tada">tada</Option>
                  <Option value="wobble">wobble</Option>
                  <Option value="jello">jello</Option>
                  <Option value="bounceIn">bounceIn</Option>
                  <Option value="bounceDown">bounceDown</Option>
                  <Option value="bounceLeft">bounceLeft</Option>
                  <Option value="bounceRight">bounceRight</Option>
                  <Option value="bounceUp">bounceUp</Option>
                  <Option value="bounceOut">bounceOut</Option>
                  <Option value="bounceOutDown">bounceOutDown</Option>
                  <Option value="bounceOutLeft">bounceOutLeft</Option>
                  <Option value="bounceOutRight">bounceOutRight</Option>
                  <Option value="bounceOutUp">bounceOutUp</Option>
                  <Option value="fadeIn">fadeIn</Option>
                  <Option value="fadeInDown">fadeInDown</Option>
                  <Option value="fadeInDownBig">fadeInDownBig</Option>
                  <Option value="fadeInLeft">fadeInLeft</Option>
                  <Option value="fadeInLeftBig">fadeInLeftBig</Option>
                  <Option value="fadeInRight">fadeInRight</Option>
                  <Option value="fadeInRightBig">fadeInRightBig</Option>
                  <Option value="fadeInUp">fadeInUp</Option>
                  <Option value="fadeOut">fadeOut</Option>
                  <Option value="fadeOutDown">fadeOutDown</Option>
                  <Option value="fadeOutDownBig">fadeOutDownBig</Option>
                  <Option value="fadeOutLeft">fadeOutLeft</Option>
                  <Option value="fadeOutLeftBig">fadeOutLeftBig</Option>
                  <Option value="fadeOutRight">fadeOutRight</Option>
                  <Option value="fadeOutRightBig">fadeOutRightBig</Option>
                  <Option value="fadeOutUp">fadeOutUp</Option>
                  <Option value="fadeOutUpBig">fadeOutUpBig</Option>
                  <Option value="flip">flip</Option>
                  <Option value="flipInX">flipInX</Option>
                  <Option value="flipInY">flipInY</Option>
                  <Option value="flipOutX">flipOutX</Option>
                  <Option value="flipOutY">flipOutY</Option>
                  <Option value="lightSpeedIn">lightSpeedIn</Option>
                  <Option value="lightSpeedOut">lightSpeedOut</Option>
                  <Option value="rotateIn">rotateIn</Option>
                  <Option value="rotateInDownLeft">rotateInDownLeft</Option>
                  <Option value="rotateInDownRight">rotateInDownRight</Option>
                  <Option value="rotateInUpLeft">rotateInUpLeft</Option>
                  <Option value="rotateInUpRight">rotateInUpRight</Option>
                  <Option value="rotateOut">rotateOut</Option>
                  <Option value="rotateOutDownLeft">rotateOutDownLeft</Option>
                  <Option value="rotateOutDownRight">rotateOutDownRight</Option>
                  <Option value="rotateOutUpLeft">rotateOutUpLeft</Option>
                  <Option value="rotateOutUpRight">rotateOutUpRight</Option>
                  <Option value="slideInUp">slideInUp</Option>
                  <Option value="slideInDown">slideInDown</Option>
                  <Option value="slideInLeft">slideInLeft</Option>
                  <Option value="slideInRight">slideInRight</Option>
                  <Option value="slideOutUp">slideOutUp</Option>
                  <Option value="slideOutDown">slideOutDown</Option>
                  <Option value="slideOutLeft">slideOutLeft</Option>
                  <Option value="slideOutRight">slideOutRight</Option>
                  <Option value="zoomIn">zoomIn</Option>
                  <Option value="zoomInDown">zoomInDown</Option>
                  <Option value="zoomInLeft">zoomInLeft</Option>
                  <Option value="zoomInRight">zoomInRight</Option>
                  <Option value="zoomInUp">zoomInUp</Option>
                  <Option value="zoomOut">zoomIn</Option>
                  <Option value="zoomOutDown">zoomInDown</Option>
                  <Option value="zoomOutLeft">zoomInLeft</Option>
                  <Option value="zoomOutRight">zoomInRight</Option>
                  <Option value="zoomOutUp">zoomInUp</Option>
                  <Option value="hinge">hinge</Option>
                  <Option value="jackInTheBox">jackInTheBox</Option>
                  <Option value="rollIn">rollIn</Option>
                  <Option value="rollOut">rollOut</Option>
                </Select>
              </div>
              <div className="attr-item">
                <Row>
                  <Col span={12}>
                    时间:
                    <InputNumber
                      min={0}
                      max={20}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={focusCom.attribute.animationDuration}
                      onChange={value => {
                        let updatedAttr = {
                          ...focusCom.attribute,
                          animationDuration: Number(value)
                        }
                        updateCom(focusCom.id, updatedAttr)
                      }}
                    />
                  </Col>
                  <Col span={12}>
                    延迟:
                    <InputNumber
                      min={0}
                      max={20}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={focusCom.attribute.animationDelay}
                      onChange={value => {
                        let updatedAttr = {
                          ...focusCom.attribute,
                          animationDelay: Number(value)
                        }
                        updateCom(focusCom.id, updatedAttr)
                      }}
                    />
                  </Col>
                </Row>
              </div>
              <div className="attr-item">
                <Row>
                  <Col span={12}>
                    次数:
                    <InputNumber
                      min={0}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={1}
                      value={focusCom.attribute.animationIterationCount}
                      onChange={value => {
                        let updatedAttr = {
                          ...focusCom.attribute,
                          animationIterationCount: Number(value)
                        }
                        updateCom(focusCom.id, updatedAttr)
                      }}
                    />
                  </Col>
                  <Col span={12}>
                    <Checkbox
                      onChange={value => {
                        let updatedAttr = {
                          ...focusCom.attribute,
                          animationIterationCount:
                            `${value.target.checked}` === 'true'
                              ? 'infinite'
                              : 1
                        }
                        updateCom(focusCom.id, updatedAttr)
                      }}
                      checked={
                        focusCom.attribute.animationIterationCount ===
                        'infinite'
                          ? true
                          : false
                      }
                    >
                      循环播放
                    </Checkbox>
                  </Col>
                </Row>
              </div>
            </Panel>
          </Collapse>
        </div>
      )
    }
  }
}
export default Extend
