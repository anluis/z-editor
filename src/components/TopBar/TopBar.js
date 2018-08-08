import React from 'react'
import { Button } from 'antd'

// 顶部组件功能区域
const TopBar = ({ addCom, currentPageId }) => {
  return (
    <div className="function-area">
      <div className="function-head">此处缺logo</div>
      <div className="function-funcs">
        <div className="func-item">文字</div>
        <div
          className="func-item"
          onClick={() => {
            addCom(currentPageId)
          }}
        >
          图片
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
