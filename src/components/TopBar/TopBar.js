// @flow
import React from 'react'
import { Button } from 'antd'
import * as ModuleTypes from '../../constants/ModuleTypes'
import SettingModal from './SettingModal'
import Axios from 'axios'

type Props = {
  addCom: (currentPageId: string, module: string) => void,
  currentPageId: string,
  undo: () => void,
  redo: () => void,
  canRedo: boolean,
  canUndo: boolean,
  workSettings: {
    visible: boolean,
    payload: {
      author: string,
      name: string,
      desc: string
    }
  },
  changeWorkSettingVisible: (
    visible: boolean,
    payload: {
      author: string,
      name: string,
      desc: string
    }
  ) => void,
  saveWorkBegin: () => void,
  saveWorkSuccess: () => void,
  saveWorkFailure: () => void,
  myWorkTree: Object
}

class TopBar extends React.Component<Props> {
  handleWorkPublish = (tree: Object) => {
    const { saveWorkBegin, saveWorkSuccess, saveWorkFailure } = this.props
    saveWorkBegin()
    const url = ''
    const rq_header = {}
    Axios.post(url, tree, rq_header)
      .then(r => {
        saveWorkSuccess()
      })
      .catch(e => {
        saveWorkFailure()
      })
  }
  render() {
    const {
      addCom,
      currentPageId,
      undo,
      redo,
      canRedo,
      canUndo,
      workSettings,
      changeWorkSettingVisible,
      myWorkTree
    } = this.props

    return (
      <div className="function-area">
        <SettingModal
          {...workSettings}
          changeWorkSettingVisible={changeWorkSettingVisible}
        />
        <div className="function-head">
          <img
            className="head-logo"
            src="http://cdn.exe666.com/fe/editor/img/logo.png"
            alt="logo"
          />
          <Button disabled={!canUndo} onClick={undo}>
            撤销
          </Button>
          <Button disabled={!canRedo} onClick={redo}>
            重做
          </Button>
        </div>
        <div className="function-funcs">
          <div
            className="func-item"
            onClick={() => {
              addCom(currentPageId, ModuleTypes.TEXT_MODULE)
            }}
          >
            文字
            <img
              className="icon-img"
              src="http://cdn.exe666.com/fe/editor/img/wenzi.png"
              alt="Text"
            />
          </div>
          <div
            className="func-item"
            onClick={() => {
              addCom(currentPageId, ModuleTypes.IMG_MODULE)
            }}
          >
            图片
            <img
              className="icon-img"
              src="http://cdn.exe666.com/fe/editor/img/image.png"
              alt="tupian"
            />
          </div>
          <div
            className="func-item"
            onClick={() => {
              addCom(currentPageId, ModuleTypes.BACKGROUND_MODULE)
            }}
          >
            背景
            <img
              className="icon-img"
              src="http://cdn.exe666.com/fe/editor/img/beij.png"
              alt="Background"
            />
          </div>
          <div
            className="func-item"
            onClick={() => {
              addCom(currentPageId, ModuleTypes.INPUT_MODULE)
            }}
          >
            输入框
            <img
              className="icon-img"
              src="http://cdn.exe666.com/fe/editor/img/shiruk.png"
              alt="Input"
            />
          </div>
          <div
            className="func-item"
            onClick={() => {
              addCom(currentPageId, ModuleTypes.VIDEO_MODULE)
            }}
          >
            视频
            <img
              className="icon-img"
              src="http://cdn.exe666.com/fe/editor/img/ship.png"
              alt="Video"
            />
          </div>
          <div
            className="func-item"
            onClick={() => {
              addCom(currentPageId, ModuleTypes.PHOTO_MODULE)
            }}
          >
            提取位置
            <img
              className="icon-img"
              src="http://cdn.exe666.com/fe/editor/img/get.png"
              alt="Position"
            />
          </div>
          <div
            className="func-item"
            onClick={() => {
              addCom(currentPageId, ModuleTypes.LOTTIE_MODULE)
            }}
          >
            动画
            <img
              className="icon-img"
              src="http://cdn.exe666.com/fe/editor/img/JS.png"
              alt="Animation"
            />
          </div>
        </div>
        <div className="function-publish">
          <div>
            <Button
              className="pub-item"
              onClick={() => {
                changeWorkSettingVisible(true, workSettings.payload)
              }}
            >
              设置
            </Button>
            <Button
              className="pub-item"
              onClick={() => {
                this.handleWorkPublish(myWorkTree)
              }}
            >
              发布
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default TopBar
