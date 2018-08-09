import React from 'react'
import { Input, Button, Modal } from 'antd'
import Image from './Image'
import Link from './Link'
import Extend from './Extend'
import Opacity from './Opacity'
import { BACKGROUND_MODULE } from '../../../constants/ModuleTypes'

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
    const displayStyle = {
      display: 'none'
    }
    if (focusCom.attribute.type === BACKGROUND_MODULE) {
      displayStyle.display = 'block'
    } else {
      displayStyle.display = 'none'
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
              value={focusCom.attribute.name}
            />
          </div>
          <Image updateCom={updateCom} focusCom={focusCom} />
          <Link updateCom={updateCom} focusCom={focusCom} />
          <Opacity
            updateCom={updateCom}
            focusCom={focusCom}
            style={displayStyle}
          />
        </div>
        <Extend updateCom={updateCom} focusCom={focusCom} />
        <div className="attr-item delete">
          <div>
            <Button
              type="danger"
              onClick={() =>
                showDeleteConfirm(
                  deleteCom,
                  focusCom.id,
                  status.page.present.current
                )
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
