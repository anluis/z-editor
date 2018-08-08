import React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { Button } from 'antd'

const style = {
  background: '#fff',
  borderTop: '1px solid #ece6e6',
  padding: '15px 20px',
  cursor: 'pointer'
}

const SortableItem = SortableElement(({ value }) => (
  <div className="layer-item" style={style}>
    {value}
  </div>
))

const SortableList = SortableContainer(({ items }) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value.name} />
      ))}
    </div>
  )
})

const Pages = ({ pages, updatePageOrder, addPage, focusPage }) => {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    updatePageOrder(oldIndex, newIndex)
    focusPage(oldIndex)
  }
  return (
    <div>
      <SortableList items={pages} onSortEnd={onSortEnd} />
      <Button onClick={() => addPage()}>新增</Button>
    </div>
  )
}

export default Pages
