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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { exchangeComOrder } from '../../../actions/pages'
import listItemSortByOrder from '../../../utils/getters/coms'
import { getCurrentPage } from '../../../utils/getters/works'
import { Page } from '../../../types/pages';

interface StateProps {
  currentComs: Coms
  currentPageId: number | null
  currentPage: Page | undefined
}

interface DispatchProps {
  deleteCom: (id: number, targetPageId: number) => void
  updateCom: (id: number, com: Com) => void
  exchangeComOrder: (targetPageId: number, oldComId: number, newComId: number) => void
}

interface State {
  deleteDialogOpen: boolean
  choosenCom: Com | null
  topRemindText: string
  canBeSort: boolean
}

type Props = StateProps & DispatchProps

const SortableItem = SortableElement(({ item, canBeSort, handleDialogOpen }: { item: Com, canBeSort: boolean, handleDialogOpen: (com: Com) => void }) => {
  return (
    <div className={styles.layerItem}>
      {item.name}
      {/* <Button variant="outlined">设置</Button> */}
      {!canBeSort && <Button
        variant="outlined"
        color="secondary"
        onClick={(e) => {
          e.preventDefault()
          handleDialogOpen(item)
        }}
      >
        删除
      </Button>}
      {canBeSort && <img className={styles.dragbutton} src={'https://cdn.xingstation.cn/fe/cms/img/drag.svg'} />}
    </div>
  )
})

const SortableList = SortableContainer(({ items, handleDialogOpen, canBeSort }: { items: Coms, handleDialogOpen: (com: Com) => void, canBeSort: boolean }) => {
  return (
    <div className={styles.layers}>
      {items.map((item, index) => {
        return (
          <SortableItem
            disabled={!canBeSort}
            canBeSort={canBeSort}
            item={item}
            key={`sortableItem-${index}`}
            index={index}
            handleDialogOpen={handleDialogOpen}
          />
        )
      })}
    </div>
  )
})

class Layers extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      deleteDialogOpen: false,
      choosenCom: null,
      topRemindText: '点击进入排序',
      canBeSort: false
    }
  }

  handleDialogOpen = (item: Com) => {
    this.setState({ deleteDialogOpen: true, choosenCom: item })
  }

  hanldeDialogClose = () => {
    this.setState({ deleteDialogOpen: false })
  }

  hanldeDialogCloseAndDeleteCom = () => {
    this.setState({ deleteDialogOpen: false })
    const { currentPageId } = this.props
    const { choosenCom } = this.state
    if (!choosenCom) {
      return
    }
    if (currentPageId === null) {
      return
    }
    this.props.deleteCom(choosenCom.id, currentPageId)
  }

  onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {
    const { currentComs, exchangeComOrder, currentPageId } = this.props
    if (currentPageId === null) {
      return
    }
    console.log(currentComs[oldIndex].id)
    console.log(currentComs[newIndex].id)
    exchangeComOrder(currentPageId, currentComs[oldIndex].id, currentComs[newIndex].id)
  }

  deleteCom = (id: number, currentPageId: number) => {
    if (currentPageId === null) {
      return
    }
    this.props.deleteCom(id, currentPageId)
  }

  sortModeChange = () => {
    this.setState({
      topRemindText: this.state.canBeSort ? '点击进入排序' : '关闭排序模式',
      canBeSort: !this.state.canBeSort
    })
  }


  render() {
    const { currentComs, currentPage } = this.props
    const { topRemindText, canBeSort } = this.state
    if (!currentPage) {
      return
    }
    const listSorted = listItemSortByOrder(currentComs, currentPage.order)
    return (
      <>
        <div className={styles.inaddmode}>
          <Button color="primary" onClick={this.sortModeChange}>
            {topRemindText}
          </Button>
        </div>
        <SortableList
          canBeSort={canBeSort}
          items={listSorted}
          onSortEnd={this.onSortEnd}
          handleDialogOpen={this.handleDialogOpen}
          pressThreshold={20}
        />
        <Dialog
          open={this.state.deleteDialogOpen}
          onClose={this.hanldeDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">前方高能预警！</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              你确实要删除组件{this.state.choosenCom ? this.state.choosenCom.name : ''}吗？
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.hanldeDialogClose} color="primary">
              取消
            </Button>
            <Button onClick={this.hanldeDialogCloseAndDeleteCom} color="primary" autoFocus>
              确定
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { currentPageId } = state.status
  const currentPage = getCurrentPage(state)
  return {
    currentComs: getComsByCurrentPageId(state),
    currentPageId,
    currentPage
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    deleteCom: (id: number, currentPageId: number | null) => {
      if (currentPageId === null) {
        return
      }
      dispatch(deleteCom(id, currentPageId))
    },
    updateCom: (id: number, com: Com) => {
      dispatch(updateCom(id, com))
    },
    exchangeComOrder: (tagetPageId: number, oldComId: number, newComId: number) => {
      dispatch(exchangeComOrder(tagetPageId, oldComId, newComId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layers)