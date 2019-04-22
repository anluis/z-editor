import * as React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { getComsByCurrentPageId } from '../../../utils/getters/works'
import { Coms, Com } from '../../../types/coms';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { deleteCom, updateCom } from '../../../actions/coms'
import IStoreState from '../../../types/IStoreState';
import styles from './Layers.module.css'

interface StateProps {
  currentComs: Coms
  currentPageId: number
}

interface DispatchProps {
  deleteCom: (id: number) => void
  updateCom: (id: number, com: Com) => void
}

type Props = StateProps & DispatchProps

const SortableItem = SortableElement(({ item, deleteCom }: { item: Com, deleteCom: (id: number) => void }) => {
  return (
    <div className={styles.layerItem}>
      {item.name}
      <Button>设置</Button>
      <Button onClick={() => deleteCom(item.id)}>删除</Button>
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

  onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {

  }

  deleteCom = (id: number) => {
    this.props.deleteCom(id)
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

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    deleteCom: (id: number) => {
      dispatch(deleteCom(id))
    },
    updateCom: (id: number, com: Com) => {
      dispatch(updateCom(id, com))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layers)