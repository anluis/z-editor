import React from 'react'
import ComStatus from '../../containers/ComStatus/ComStatus'
import Layers from '../Layers/Layers'
import Pages from '../Pages/Pages'

class FunctionTabs extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      selectedItem: 0
    }
  }
  handleMenuSelect = order => {
    this.setState({
      selectedItem: order
    })
  }
  renderTabsItem(isSelected, name, index) {
    return isSelected ? (
      <div
        key={index}
        className="tabs-item selected"
        onClick={() => this.handleMenuSelect(index)}
      >
        {name}
      </div>
    ) : (
      <div
        key={index}
        className="tabs-item"
        onClick={() => this.handleMenuSelect(index)}
      >
        {name}
      </div>
    )
  }
  renderTabsDetail(index) {
    switch (index) {
      case 0:
        return <ComStatus />
      case 1:
        return <Layers />
      case 2:
        return <Pages />
      default:
        return <ComStatus />
    }
  }
  render() {
    let tabs = ['属性', '图层', '页面']
    let renderTabs = tabs.map((item, index) => {
      let value
      if (index === this.state.selectedItem) {
        value = this.renderTabsItem(true, item, index)
      } else {
        value = this.renderTabsItem(false, item, index)
      }
      return value
    })
    let renderDetail = this.renderTabsDetail(this.state.selectedItem)
    return (
      <div className="functiontabs">
        <div className="inner-tabs">{renderTabs}</div>
        <div className="item-detail">{renderDetail}</div>
      </div>
    )
  }
}

export default FunctionTabs
