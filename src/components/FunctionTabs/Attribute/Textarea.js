import React from 'react'
import { Input, Select, Row, Col, Slider, InputNumber } from 'antd'
import { SketchPicker } from 'react-color'

const { TextArea } = Input
const Option = Select.Option
const Textarea = ({ focusCom, updateCom, style }) => {
  if (focusCom === undefined) {
    return null
  } else {
    return (
      <div style={style}>
        <div className="attr-item content">
          文本:
          <TextArea
            placeholder="请输入文字"
            autosize={{ minRows: 2, maxRows: 10 }}
            onChange={e => {
              focusCom.attribute.height = e.target.scrollHeight
              console.log(e.target)
              let updatedAttr = {
                ...focusCom.attribute,
                content: e.target.value
              }
              updateCom(focusCom.id, updatedAttr)
            }}
            value={focusCom.attribute.content}
          />
        </div>
        <div className="attr-item fontSize">
          字体:
          <Select
            defaultValue={focusCom.attribute.fontSize}
            style={{ width: 120, marginLeft: 10 }}
            onChange={value => {
              let updatedAttr = {
                ...focusCom.attribute,
                fontSize: `${value}`
              }
              updateCom(focusCom.id, updatedAttr)
            }}
          >
            <Option value="12">12px</Option>
            <Option value="14">14px</Option>
            <Option value="16">16px</Option>
            <Option value="18">18px</Option>
            <Option value="20">20px</Option>
            <Option value="22">22px</Option>
            <Option value="24">24px</Option>
          </Select>
        </div>
        <div className="attr-item line-height">
          行高:
          <Row>
            <Col span={12}>
              <Slider
                min={0}
                max={3}
                onChange={value => {
                  let updatedAttr = {
                    ...focusCom.attribute,
                    lineHeight: Number(value)
                  }
                  updateCom(focusCom.id, updatedAttr)
                }}
                value={focusCom.attribute.lineHeight}
                step={0.1}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={3}
                style={{ marginLeft: 16 }}
                step={0.1}
                value={focusCom.attribute.lineHeight}
                onChange={value => {
                  let updatedAttr = {
                    ...focusCom.attribute,
                    lineHeight: Number(value)
                  }
                  updateCom(focusCom.id, updatedAttr)
                }}
              />
            </Col>
          </Row>
        </div>
        <div className="attr-item letter-spacing">
          字距:
          <Row>
            <Col span={12}>
              <Slider
                min={0}
                max={1}
                onChange={value => {
                  let updatedAttr = {
                    ...focusCom.attribute,
                    letterSpacing: Number(value)
                  }
                  updateCom(focusCom.id, updatedAttr)
                }}
                value={focusCom.attribute.letterSpacing}
                step={0.01}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={1}
                style={{ marginLeft: 16 }}
                step={0.01}
                value={focusCom.attribute.letterSpacing}
                onChange={value => {
                  let updatedAttr = {
                    ...focusCom.attribute,
                    letterSpacing: Number(value)
                  }
                  updateCom(focusCom.id, updatedAttr)
                }}
              />
            </Col>
          </Row>
        </div>
        <div className="attr-item color">
          文字颜色:
          <SketchPicker
            color={focusCom.attribute.color}
            onChangeComplete={e => {
              let updatedAttr = {
                ...focusCom.attribute,
                color: String(e.hex)
              }
              updateCom(focusCom.id, updatedAttr)
            }}
          />
        </div>
        <div className="attr-item background">
          背景颜色:
          <SketchPicker
            color={focusCom.attribute.background}
            onChangeComplete={e => {
              let updatedAttr = {
                ...focusCom.attribute,
                background: String(e.hex)
              }
              updateCom(focusCom.id, updatedAttr)
            }}
          />
        </div>
      </div>
    )
  }
}
export default Textarea
