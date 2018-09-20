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
            src="data:image/png;base64,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"
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
              addCom(currentPageId, ModuleTypes.VIDEO_MODULE)
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
            提取位置
          </div>
          <div
            className="func-item"
            onClick={() => {
              addCom(currentPageId, ModuleTypes.LOTTIE_MODULE)
            }}
          >
            动画
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
