import React from 'react'
import { Button } from 'antd'
import * as ModuleTypes from '../../constants/ModuleTypes'

// 顶部组件功能区域
const TopBar = ({ addCom, currentPageId, undo, redo, canRedo, canUndo }) => {
  return (
    <div className="function-area">
      <div className="function-head">
        <Button disabled={!canUndo} onClick={undo}>
          Undo
        </Button>
        <Button disabled={!canRedo} onClick={redo}>
          Redo
        </Button>
        此处缺logo
      </div>
      <div className="function-funcs">
        <div className="func-item">文字</div>
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
      </div>
      <div className="function-publish">
        <div className="pub-item">
          <Button>发布</Button>
        </div>
      </div>
    </div>
  )
}

export default TopBar
