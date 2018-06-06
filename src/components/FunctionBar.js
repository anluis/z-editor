import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// 顶部组件功能区域
const FunctionBar = ({ com }) => {
  return (
    <div className="function-area">
      <div className="function-area-item">
        <div className="function-item-name">文本</div>
        <div className="function-item-icon" />
      </div>
      <div className="function-area-item">
        <div className="function-item-name">文本</div>
        <div className="function-item-icon" />
      </div>
    </div>
  )
}

FunctionBar.propTypes = {
  id: PropTypes.number.isRequired
}

export default connect()(FunctionBar)
