import React from 'react'
import WorkManage from './WorkManage/WorkManage'
import Template from './Template/Template'
import Material from './Material/Material'

class MenuBar extends React.Component {
  constructor() {
    super()
    this.state = {
      isExpand: false,
      expandMenu: null
    }
  }
  handlePaneClick(name) {
    if (!this.state.isExpand) {
      this.setState({
        isExpand: true,
        expandMenu: name
      })
    } else {
      if (this.state.expandMenu === name) {
        this.setState({
          isExpand: false
        })
      } else {
        this.setState({
          expandMenu: name
        })
      }
    }
  }
  render() {
    const { currentMenu } = this.state
    const { isExpand } = this.state
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
        {isExpand ? (
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
