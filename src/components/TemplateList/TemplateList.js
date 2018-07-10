import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// 左侧组件区域
const TemplateList = ({ com }) => {
  return (
    <div className="template-list">
      <div className="template-top-function">
        <div>所有</div>
        <div>我的</div>
      </div>
      <div className="template-list-content">
        <div className="template-item">
          <div className="template-item-name" />
          <div className="template-item-pic" />
        </div>
      </div>
    </div>
  )
}
TemplateList.propTypes = {
  id: PropTypes.number.isRequired
}

export default connect()(TemplateList)
