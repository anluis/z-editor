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
  swichSetting: (showOrNotShow: boolean) => void,
  shouldSettingsShow: boolean,
  currentSettings: any
}

const style = {
  background: '#fff',
  borderTop: '1px solid #ece6e6',
  padding: '15px 20px',
  cursor: 'pointer'
}

const SortableItem = SortableElement(({ value, swichSetting }) => (
  <div className="layer-item" style={style}>
    {value}
    <Button onClick={() => swichSetting(true)}>设置</Button>
  </div>
))

const SortableList = SortableContainer(({ items, swichSetting }) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          value={value.name}
          swichSetting={swichSetting}
        />
      ))}
    </div>
  )
})

class Pages extends React.Component<Props> {
  render() {
    const {
      pages,
      updatePageOrder,
      addPage,
      focusPage,
      shouldSettingsShow,
      swichSetting,
      currentSettings
    } = this.props

    const onSortEnd = ({ oldIndex, newIndex }) => {
      updatePageOrder(oldIndex, newIndex)
      focusPage(oldIndex)
    }
    return (
      <div>
        <SortableList
          items={pages}
          onSortEnd={onSortEnd}
          swichSetting={swichSetting}
        />
        <Button onClick={() => addPage()}>新增</Button>
        <Settings
          shouldSettingsShow={shouldSettingsShow}
          swichSetting={swichSetting}
          currentSettings={currentSettings}
        />
      </div>
    )
  }
}

export default Pages
