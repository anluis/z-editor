// @flow
import React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { Button } from 'antd'
import Settings from './Settings'

type Props = {
  pages: Array<Object>,
  updatePageOrder: (oldIndex: string, newIndex: string) => void,
  addPage: () => void,
  focusPage: (id: string) => void,
  editPageSettings: (visible: boolean, payload: Object) => void,
  targetPageId: string
}

const style = {
  background: '#fff',
  borderTop: '1px solid #ece6e6',
  padding: '15px 20px',
  cursor: 'pointer'
}

const SortableItem = SortableElement(
  ({ payload, editPageSettings, targetPageId }) => (
    <div className="layer-item" style={style}>
      {payload.name}
      <Button onClick={() => editPageSettings(true, payload, targetPageId)}>
        设置
      </Button>
    </div>
  )
)

const SortableList = SortableContainer(
  ({ items, editPageSettings, targetPageId }) => {
    return (
      <div>
        {items.map((value, index) => (
          <SortableItem
            key={`item-${index}`}
            index={index}
            {...value.settings}
            editPageSettings={editPageSettings}
            targetPageId={targetPageId}
          />
        ))}
      </div>
    )
  }
)

class Pages extends React.Component<Props> {
  render() {
    const {
      pages,
      updatePageOrder,
      addPage,
      focusPage,
      editPageSettings,
      targetPageId
    } = this.props

    const editPage = {
      targetPageId,
      editPageSettings
    }

    // find page settings by id
    const settings = pages.find(item => item.id === targetPageId)

    const onSortEnd = ({ oldIndex, newIndex }) => {
      updatePageOrder(oldIndex, newIndex)
      focusPage(oldIndex)
    }
    return (
      <div>
        <SortableList items={pages} onSortEnd={onSortEnd} {...editPage} />
        <Button onClick={() => addPage()}>新增</Button>
        <Settings
          {...settings}
          editPageSettings={editPageSettings}
          targetPageId={targetPageId}
        />
      </div>
    )
  }
}

export default Pages
