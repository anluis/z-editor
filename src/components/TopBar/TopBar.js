// @flow
import React from 'react'
import { Button } from 'antd'
import * as ModuleTypes from '../../constants/ModuleTypes'
import SettingModal from './SettingModal'

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
  ) => void
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
      workSettings,
      changeWorkSettingVisible
    } = this.props
    return (
      <div className="function-area">
        <SettingModal
          {...workSettings}
          changeWorkSettingVisible={changeWorkSettingVisible}
        />
        <div className="function-head">
          此处缺logo
          <Button disabled={!canUndo} onClick={undo}>
            Undo
          </Button>
          <Button disabled={!canRedo} onClick={redo}>
            Redo
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
                changeWorkSettingVisible(true, workSettings.payload)
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
}

export default TopBar
