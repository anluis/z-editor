import * as React from 'react'
const Attribute = React.lazy(() => import('./Attribute/Attribute'))
const Layers = React.lazy(() => import('./Layers/Layers'))
const Pages = React.lazy(() => import('./Pages/Pages'))

interface Props {

}

interface State {
  selectedItem: number
}

class FunctionTabs extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      selectedItem: 0
    }
  }

  handleMenuSelect = (order: number) => {
    this.setState({
      selectedItem: order
    })
  }

  renderTabsItem(isSelected: boolean, name: string, index: number) {
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

  renderTabsDetail(index: number) {
    switch (index) {
      case 0:
        return <Attribute />
      case 1:
        return <Layers />
      case 2:
        return <Pages />
      default:
        return <Attribute />
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