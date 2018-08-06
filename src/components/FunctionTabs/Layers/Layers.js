import React from 'react'
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc'

const SortableItem = SortableElement(({ value }) => <div>{value}</div>)

const SortableList = SortableContainer(({ items }) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  )
})

class Layers extends React.Component {
  constructor(props) {
    super(props)
    console.dir(props)
  }
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    })
  }
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
  }
}

export default Layers
