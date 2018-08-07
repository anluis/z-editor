import React from 'react'

import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc'

const SortableItem = SortableElement(({ value, style }) => (
  <div className="layer-item" style={style}>
    {value}
  </div>
))

const SortableList = SortableContainer(({ items, style, store }) => {
  return (
    <div className="layers">
      {items.map((value, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          value={value.attribute.name}
          style={style}
        />
      ))}
    </div>
  )
})

class Layers extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.layers)
  }
  state = {
    items: this.props.layers
  }
  style = {
    background: '#fff',
    borderTop: '1px solid #ece6e6',
    padding: '15px 20px',
    cursor: 'pointer'
  }
  onSortEnd = ({ oldIndex, newIndex }, e) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    })
    let layerItem = Array.from(document.getElementsByClassName('layer-item'))
    layerItem.map(r => {
      return (r.style.color = '#444')
    })
    layerItem[newIndex].style.color = '#03a9f4'
  }

  render() {
    // let { com } = this.props
    // console.log(com)
    return (
      <SortableList
        items={this.state.items}
        style={this.style}
        onSortEnd={this.onSortEnd}
      />
    )
  }
}

export default Layers
