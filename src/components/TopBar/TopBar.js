// @flow
import React from 'react'
import axios from 'axios'
import { Modal, Button, Input } from 'antd'
import * as ModuleTypes from '../../constants/ModuleTypes'
const { TextArea } = Input

const testAjax = () => {
  // axios
  //   .get('http://127.0.0.1:7001/api/v2/topics', {
  //     headers: {
  //       Authorization:
  //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjViN2JjZjA4NGNmNDA0OTgwNGY2ZjQxNSJ9LCJleHAiOjE1MzU0NDU0MDksImlhdCI6MTUzNDg0MDYwOX0.4OxEsh-redBebMFLhwmAboP2p2wHWBlX5AlbuV9CpnA'
  //     }
  //   })
  //   .then(r => console.dir(r))
  axios
    .get('http://127.0.0.1:7001/api/v2/topics')
    .then(r => {
      console.dir(r)
    })
    .catch(e => {
      console.dir(e)
    })
}

type ModelProps = {
  modalFlag: boolean,
  visible: (visible: boolean) => void,
  updateProjectSettings: (setting: Object) => void
}

class Model extends React.Component<ModelProps> {
  constructor(props) {
    super(props)
    this.state = this.props.project
  }

  render() {
    const { modalFlag, visible, updateProjectSettings } = this.props
    return (
      <Modal
        visible={modalFlag}
        title="项目信息"
        onOk={() => {
          visible(false)
          updateProjectSettings(this.state)
        }}
        onCancel={() => {
          visible(false)
        }}
        okText="确认"
        cancelText="取消"
      >
        <div className="attr-item" style={{ marginBottom: 20 }}>
          作者:
          <Input
            onChange={e => {
              this.setState({ name: e.target.value })
            }}
            maxLength="12"
          />
        </div>
        <div className="attr-item" style={{ marginBottom: 20 }}>
          项目名称:
          <Input
            onChange={e => {
              this.setState({ title: e.target.value })
            }}
            maxLength="12"
            // value={this.state.title}
          />
        </div>
        <div className="attr-item" style={{ marginBottom: 20 }}>
          项目描述:
          <TextArea
            autosize={{ minRows: 2, maxRows: 6 }}
            onChange={e => {
              this.setState({ desc: e.target.value })
            }}
            // value={this.state.desc}
          />
        </div>
      </Modal>
    )
  }
}

type Props = {
  addCom: (currentPageId: string, module: string) => void,
  currentPageId: string,
  undo: () => void,
  redo: () => void,
  canRedo: boolean,
  canUndo: boolean,
  visible: (visible: boolean) => void,
  modal: boolean,
  modal: boolean,
  updateProjectSettings: (setting: Object) => void
}

class TopBar extends React.Component<Props> {
  render() {
    const {
      addCom,
      currentPageId,
      undo,
      redo,
      canRedo,
      canUndo,
      visible,
      modal,
      updateProjectSettings
    } = this.props
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
        <Model
          visible={visible}
          modalFlag={modal}
          updateProjectSettings={updateProjectSettings}
        />
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
            <Button className="pub-item" onClick={() => testAjax()}>
              发布
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default TopBar
