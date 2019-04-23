import * as React from 'react'
import styles from './FunctionTabs.module.css'
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
        className={`${styles.item} ${styles.itemSelected}`}
        onClick={() => this.handleMenuSelect(index)}
      >
        {name}
      </div>
    ) : (
        <div
          key={index}
          className={`${styles.item}`}
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
    let tabs = ['Attribute', 'Layers', 'Pages']
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
      <div className={styles.functiontabs}>
        <div className={styles.tabs}>{renderTabs}</div>
        <div className={styles.itemDetail}>{renderDetail}</div>
      </div>
    )
  }
}

export default FunctionTabs