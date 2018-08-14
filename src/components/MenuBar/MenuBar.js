import React from 'react'
import WorkManage from '../../containers/MenuBar/WorkManage/WorkManage'
import Template from '../../containers/MenuBar/Template/Template'
import Material from '../../containers/MenuBar/Material/Material'

class MenuBar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isExpand: false,
      currentMenu: null
    }
  }
  handlePaneClick(name) {
    if (!this.state.isExpand) {
      this.setState({
        isExpand: true,
        currentMenu: name
      })
    } else {
      if (this.state.expandMenu === name) {
        this.setState({
          isExpand: false
        })
      } else {
        this.setState({
          currentMenu: name
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
