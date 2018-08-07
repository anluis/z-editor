import React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

const makeLayersSortByOrder = (layers, order) => {
  let result = []
  order.forEach(e => {
    result.push(layers.find(item => item.id === e))
  })
  console.dir(result)
  return result
}
const style = {
  background: '#fff',
  borderTop: '1px solid #ece6e6',
  padding: '15px 20px',
  cursor: 'pointer'
}

const SortableItem = SortableElement(({ value }) => (
  <div className="layer-item" style={style}>
    {value.attribute.name}
  </div>
))

const SortableList = SortableContainer(({ items }) => {
  return (
    <div className="layers">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  )
})

class Layers extends React.Component {
  onSortEnd = ({ oldIndex, newIndex }) => {
    const { order, updateComZindex, targetPageId } = this.props
    updateComZindex(order, oldIndex, newIndex, targetPageId)
  }
  render() {
    const { layers, order } = this.props
    let layersSorted = makeLayersSortByOrder(layers, order)
    return <SortableList items={layersSorted} onSortEnd={this.onSortEnd} />
  }
}

export default Layers
