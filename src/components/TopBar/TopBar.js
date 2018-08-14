// @flow
import React from 'react'
import { Modal, Button } from 'antd'
import * as ModuleTypes from '../../constants/ModuleTypes'

const showModal = (modalFlag, visible) => {
  console.log(modalFlag)
  visible(true)
  // return (

  // )
}

// 顶部组件功能区域
const TopBar = ({
  addCom,
  currentPageId,
  undo,
  redo,
  visible,
  canRedo,
  canUndo,
  modal
}: {
  addCom: (currentPageId: string, module: string) => void,
  currentPageId: string,
  undo: () => void,
  redo: () => void,
  canRedo: Boolean,
  canUndo: Boolean,
  visible: (visible: Boolean) => void,
  modal: Boolean
}) => {
  return (
    <div className="function-area">
      <div className="function-head">
        此处缺logo
        <Button disabled={!canUndo} onClick={undo}>
          Undo
        </Button>
        <Button disabled={!canRedo} onClick={redo}>
          Redo
        </Button>
        <Modal
          visible={modal}
          title="Title"
          onOk={visible(false)}
          onCancel={visible(false)}
          footer={[
            <Button key="back" onClick={visible(false)}>
              Return
            </Button>,
            <Button key="submit" type="primary" onClick={visible(false)}>
              Submit
            </Button>
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>

      <div className="function-funcs">
        <div
          className="func-item"
          onClick={() => {
            addCom(currentPageId, ModuleTypes.TEXT_MODULE)
          }}
        >
          文字
        </div>
        <div
          className="func-item"
          onClick={() => {
            addCom(currentPageId, ModuleTypes.IMG_MODULE)
          }}
        >
          图片
        </div>
        <div
          className="func-item"
          onClick={() => {
            addCom(currentPageId, ModuleTypes.BACKGROUND_MODULE)
          }}
        >
          背景
        </div>
        <div
          className="func-item"
          onClick={() => {
            addCom(currentPageId, ModuleTypes.INPUT_MODULE)
          }}
        >
          输入框
        </div>
        <div
          className="func-item"
          onClick={() => {
            addCom(currentPageId, ModuleTypes.VEDIO_MODULE)
          }}
        >
          视频
        </div>
        <div
          className="func-item"
          onClick={() => {
            addCom(currentPageId, ModuleTypes.PHOTO_MODULE)
          }}
        >
          照片边框
        </div>
      </div>
      <div className="function-publish">
        <div>
          <Button
            className="pub-item"
            onClick={() => {
              showModal(modal, visible)
            }}
          >
            设置
          </Button>
          <Button className="pub-item">发布</Button>
        </div>
      </div>
    </div>
  )
}

export default TopBar
