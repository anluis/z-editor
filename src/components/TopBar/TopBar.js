import React from 'react'

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
        <div className="pub-item">发布</div>
      </div>
    </div>
  )
}

export default TopBar
