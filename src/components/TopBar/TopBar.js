// @flow
import React from 'react'
import { Modal, Button, Input } from 'antd'
import * as ModuleTypes from '../../constants/ModuleTypes'

const { TextArea } = Input
type ModelProps = {
  modalFlag: Boolean,
  visible: (visible: boolean) => void,
  project: Object
}

class Model extends React.Component<ModelProps> {
  constructor(props) {
    super(props)
    this.state = this.props.project
  }

  render() {
    const { modalFlag, visible, project } = this.props
    return (
      <Modal
        visible={modalFlag}
        title="项目信息"
        onOk={() => {
          visible(false)
          console.log(3)
        }}
        onCancel={() => visible(false)}
        okText="确认"
        cancelText="取消"
      >
        <div className="attr-item" style={{ marginBottom: 20 }}>
          作者:
          <Input
            onChange={e => {
              this.props.project.name = e.target.value
              this.setState(this.props.project)
            }}
            maxLength="12"
            value={project.name}
          />
        </div>
        <div className="attr-item" style={{ marginBottom: 20 }}>
          项目名称:
          <Input
            onChange={e => {
              this.props.project.title = e.target.value
              this.setState(this.props.project)
            }}
            maxLength="12"
            value={project.title}
          />
        </div>
        <div className="attr-item" style={{ marginBottom: 20 }}>
          项目描述:
          <TextArea
            autosize={{ minRows: 2, maxRows: 6 }}
            onChange={e => {
              this.props.project.desc = e.target.value
              this.setState(this.props.project)
            }}
            value={project.desc}
          />
        </div>
      </Modal>
    )
  }
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
  modal,
  project
}: {
  addCom: (currentPageId: string, module: string) => void,
  currentPageId: string,
  undo: () => void,
  redo: () => void,
  canRedo: Boolean,
  canUndo: Boolean,
  visible: (visible: boolean) => void,
  modal: Boolean,
  project: Object
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
      </div>
      <Model visible={visible} modalFlag={modal} project={project} />
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
              visible(true)
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
