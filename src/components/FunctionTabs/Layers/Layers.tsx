import * as React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { connect } from 'react-redux'
import IStoreState from '../../../types/IStoreState';
import { getComsByCurrentPageId } from '../../../utils/getters/works'
import { Coms, Com } from '../../../types/coms';
import { Button } from '@material-ui/core';
import styles from './Layers.module.css'

interface Props {
  currentComs: Coms
  currentPageId: number
}

const SortableItem = SortableElement(({ item, deleteCom }: { item: Com, deleteCom: (id: number) => void }) => {
  return (
    <div className={styles.layerItem}>
      {item.name}
      <Button>设置</Button>
      <Button >删除</Button>
    </div>
  )
})

const SortableList = SortableContainer(({ items, deleteCom }: { items: Coms, deleteCom: (id: number) => void }) => {
  return (
    <div className={styles.layers}>
      {items.map((item, index) => {
        <SortableItem
          item={item}
          key={`sortableItem-${index}`}
          index={index}
          deleteCom={deleteCom}
        />
      })}
    </div>
  )
})

class Layers extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  onSortEnd = () => {

  }

  deleteCom = (id: number) => {

  }


  render() {
    const { currentComs } = this.props
    return (
      <SortableList
        items={currentComs}
        onSortEnd={this.onSortEnd}
        deleteCom={this.deleteCom}
      />
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { currentPageId } = state.work.status
  return {
    currentComs: getComsByCurrentPageId(state),
    currentPageId
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layers)