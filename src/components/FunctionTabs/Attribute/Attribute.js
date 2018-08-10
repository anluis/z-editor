import React from 'react'
import { Input, Button, Modal } from 'antd'
import { SketchPicker } from 'react-color'
import Image from './Image'
import Link from './Link'
import Extend from './Extend'
import Opacity from './Opacity'
import Text from './Text'
import Vedio from './Vedio'
import Textarea from './Textarea'
import {
  BACKGROUND_MODULE,
  IMG_MODULE,
  VEDIO_MODULE,
  INPUT_MODULE,
  TEXT_MODULE
} from '../../../constants/ModuleTypes'

const confirm = Modal.confirm

const showDeleteConfirm = (deleteCom, id, targetPageId) => {
  confirm({
    title: '你要删除这个组件吗?',
    okText: '是',
    okType: 'danger',
    cancelText: '否',
    onOk() {
      deleteCom(id, targetPageId)
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
    }
  })
}

const Attribute = ({ focusCom, updateCom, deleteCom, status }) => {
  if (focusCom === undefined) {
    return null
  } else {
    const opacityDisplay = {
      display: 'none'
    }
    const linkDisplay = {
      display: 'none'
    }
    const imgDisplay = {
      display: 'none'
    }
    const extendDisplay = {
      display: 'none'
    }
    const inputDisplay = {
      display: 'none'
    }
    const vedioDisplay = {
      display: 'none'
    }
    const textDisplay = {
      display: 'none'
    }
    if (focusCom.attribute.type !== BACKGROUND_MODULE) {
      extendDisplay.display = 'block'
    } else {
      extendDisplay.display = 'none'
    }

    if (focusCom.attribute.type === BACKGROUND_MODULE) {
      opacityDisplay.display = 'block'
    } else {
      opacityDisplay.display = 'none'
    }

    if (focusCom.attribute.type === IMG_MODULE) {
      linkDisplay.display = 'block'
    } else {
      linkDisplay.display = 'none'
    }

    if (
      focusCom.attribute.type === IMG_MODULE ||
      focusCom.attribute.type === BACKGROUND_MODULE
    ) {
      imgDisplay.display = 'block'
    } else {
      imgDisplay.display = 'none'
    }
    if (focusCom.attribute.type === VEDIO_MODULE) {
      vedioDisplay.display = 'block'
    } else {
      vedioDisplay.display = 'none'
    }

    if (focusCom.attribute.type === INPUT_MODULE) {
      inputDisplay.display = 'block'
    } else {
      inputDisplay.display = 'none'
    }
    if (focusCom.attribute.type === TEXT_MODULE) {
      textDisplay.display = 'block'
    } else {
      textDisplay.display = 'none'
    }

    return (
      <div className="attributes">
        <div className="attributes-base">
          <div className="attr-item id">组件Id: {focusCom.id}</div>
          <div className="attr-item name">
            组件名称:
            <Input
              onChange={e => {
                let updatedAttr = {
                  ...focusCom.attribute,
                  name: e.target.value
                }
                updateCom(focusCom.id, updatedAttr)
              }}
              maxLength="12"
              value={focusCom.attribute.name}
            />
          </div>
          <div className="attr-item background" style={opacityDisplay}>
            纯色背景:
            <SketchPicker
              color={focusCom.attribute.background}
              onChangeComplete={e => {
                let updatedAttr = {
                  ...focusCom.attribute,
                  background: String(e.hex),
                  imgUrl: ''
                }
                updateCom(focusCom.id, updatedAttr)
              }}
            />
          </div>
          <Text
            updateCom={updateCom}
            focusCom={focusCom}
            style={inputDisplay}
          />
          <Textarea
            updateCom={updateCom}
            focusCom={focusCom}
            style={textDisplay}
          />
          <Image updateCom={updateCom} focusCom={focusCom} style={imgDisplay} />
          <Vedio
            updateCom={updateCom}
            focusCom={focusCom}
            style={vedioDisplay}
          />
          <Link updateCom={updateCom} focusCom={focusCom} style={linkDisplay} />
          <Opacity
            updateCom={updateCom}
            focusCom={focusCom}
            style={opacityDisplay}
          />
        </div>
        <Extend
          updateCom={updateCom}
          focusCom={focusCom}
          style={extendDisplay}
        />
        <div className="attr-item delete">
          <div>
            <Button
              type="danger"
              onClick={() =>
                showDeleteConfirm(deleteCom, focusCom.id, status.page.current)
              }
            >
              删除
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
export default Attribute
