import * as React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

const SortableList = SortableContainer(
  ({ items, selectedId, deleteCom, targetPageId }) => {
    return (
      <div className="layers">
        {items.map((value, index) => (
          <SortableItem
            key={`item-${index}`}
            index={index}
            value={value}
            selectedId={selectedId}
            deleteCom={deleteCom}
            targetPageId={targetPageId}
          />
        ))}
      </div>
    )
  }
)

class Layers extends React.Component {
  onSortEnd = () => {

  }

  render() {

  }
}

export default Layers