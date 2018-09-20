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
  targetPageId: string,
  deletePage: (id: string) => void,
  order: Array<number>
}

const makePagesSortByOrder = (layers, order) => {
  let result = []
  order.forEach(e => {
    let r = layers.find(item => item.id === e)
    if (r !== undefined) {
      result.push(r)
    }
  })
  return result
}

const layerItemStyle = {
  background: '#fff',
  borderTop: '1px solid #ece6e6',
  padding: '15px 20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const selected = {
  ...layerItemStyle,
  color: 'red'
}

const SortableItem = SortableElement(
  ({ payload, editPageSettings, targetPageId, id, deletePage }) => {
    let bindStyle = targetPageId === id ? selected : layerItemStyle
    return (
      <div className="layer-item" style={bindStyle}>
        {payload.name}
        <Button onClick={() => editPageSettings(true, payload, targetPageId)}>
          设置
        </Button>
        {id === 0 ? (
          <Button disabled type="danger">
            删除
          </Button>
        ) : (
          <Button onClick={() => deletePage(id)} type="danger">
            删除
          </Button>
        )}
      </div>
    )
  }
)

const SortableList = SortableContainer(
  ({ items, editPageSettings, targetPageId, deletePage }) => {
    return (
      <div className="layers">
        {items.map((value, index) => (
          <SortableItem
            key={`item-${index}`}
            index={index}
            id={value.id}
            {...value.settings}
            editPageSettings={editPageSettings}
            targetPageId={targetPageId}
            deletePage={deletePage}
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
      targetPageId,
      order,
      deletePage
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

    const pagesSorted = makePagesSortByOrder(pages, order)

    return (
      <div>
        <div className="layer-function">
          <Button onClick={() => addPage()}>新增</Button>
        </div>
        <SortableList
          items={pagesSorted}
          onSortEnd={onSortEnd}
          {...editPage}
          deletePage={deletePage}
        />
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
