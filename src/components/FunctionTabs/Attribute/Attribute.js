// @flow
import React from 'react'
import { Input, Button, Modal } from 'antd'
import { SketchPicker } from 'react-color'
import Image from './Image'
import Link from './Link'
import Extend from './Extend'
import Opacity from './Opacity'
import Text from './Text'
import Video from './Video'
import Textarea from './Textarea'
import {
  BACKGROUND_MODULE,
  IMG_MODULE,
  VIDEO_MODULE,
  INPUT_MODULE,
  TEXT_MODULE
} from '@/constants/ModuleTypes'

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

type Props = {
  focusCom: Object,
  updateCom: (id: string, attr: Object) => void,
  deleteCom: (id: string, target: string) => void,
  status: Object
}

class Attribute extends React.Component<Props> {
  render() {
    const { focusCom, updateCom, deleteCom, status } = this.props
    if (focusCom === undefined) {
      return null
    } else {
      const type = focusCom.attribute.type

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
            <div className="attr-item background">
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
            {type === INPUT_MODULE && (
              <Text updateCom={updateCom} focusCom={focusCom} />
            )}
            {type === TEXT_MODULE && (
              <Textarea updateCom={updateCom} focusCom={focusCom} />
            )}
            {(type === IMG_MODULE || type === BACKGROUND_MODULE) && (
              <Image updateCom={updateCom} focusCom={focusCom} />
            )}
            {type === VIDEO_MODULE && (
              <Video updateCom={updateCom} focusCom={focusCom} />
            )}

            <Link updateCom={updateCom} focusCom={focusCom} />

            <Opacity updateCom={updateCom} focusCom={focusCom} />
          </div>
          {type !== BACKGROUND_MODULE && (
            <Extend updateCom={updateCom} focusCom={focusCom} />
          )}
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
}
export default Attribute
