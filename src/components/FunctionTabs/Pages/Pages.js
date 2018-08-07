import React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

const SortableItem = SortableElement(({ value }) => <div>{value}</div>)

const SortableList = SortableContainer(({ items }) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value.name} />
      ))}
    </div>
  )
})

const Pages = ({ pages, updatePageOrder, addPage }) => {
  console.dir(pages)
  const onSortEnd = ({ oldIndex, newIndex }) => {
    updatePageOrder(pages, oldIndex, newIndex)
  }

  return (
    <div>
      <div onClick={() => addPage()}>新增</div>
      <SortableList items={pages} onSortEnd={onSortEnd} />
    </div>
  )
}

export default Pages
