// @flow
import React from 'react'
import WorkManage from '../../containers/MenuBar/WorkManage/WorkManage'
import Template from '../../containers/MenuBar/Template/Template'
import Material from '../../containers/MenuBar/Material/Material'

type State = {
  isExpand: boolean,
  currentMenu: string
}

class MenuBar extends React.PureComponent<{}, State> {
  constructor() {
    super()
    this.state = {
      isExpand: false,
      currentMenu: ''
    }
  }
  handlePaneClick(name: string) {
    if (!this.state.isExpand) {
      this.setState({
        isExpand: true,
        currentMenu: name
      })
    } else {
      if (this.state.currentMenu === name) {
        this.setState({
          isExpand: false,
          currentMenu: this.state.currentMenu
        })
      } else {
        this.setState({
          isExpand: this.state.isExpand,
          currentMenu: name
        })
      }
    }
  }
  render() {
    const { currentMenu, isExpand } = this.state
    return (
      <div className="menubar">
        <div className="menu-list">
          <div
            className="menu-pane"
            onClick={() => this.handlePaneClick('WorkManage')}
          >
            作品管理
          </div>
          <div
            className="menu-pane"
            onClick={() => this.handlePaneClick('Template')}
          >
            模版选择
          </div>
          <div
            className="menu-pane"
            onClick={() => this.handlePaneClick('Material')}
          >
            素材库
          </div>
        </div>
        {isExpand === true ? (
          <div className="menu-expend">
            {currentMenu === 'WorkManage' ? <WorkManage /> : null}
            {currentMenu === 'Template' ? <Template /> : null}
            {currentMenu === 'Material' ? <Material /> : null}
          </div>
        ) : null}
      </div>
    )
  }
}

export default MenuBar
