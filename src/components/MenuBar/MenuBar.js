import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

const MenuBar = () => {
  return (
    <div className="menubar">
      <div className="user-avatar" />
      <div className="user-name" />
      <div className="user-edit" />
      <div className="menu-pane">作品管理</div>
      <div className="menu-pane">模版选择</div>
      <div className="menu-pane">素材库</div>
    </div>
  )
}

export default MenuBar
