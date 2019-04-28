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

interface StateProps {
  currentComs: Coms
  currentPageId: number
}

interface DispatchProps {
  deleteCom: (id: number, targetPageId: number) => void
  updateCom: (id: number, com: Com) => void
}

interface State {
  deleteDialogOpen: boolean
  choosenCom: Com | null
}

type Props = StateProps & DispatchProps

const SortableItem = SortableElement(({ item, currentPageId, handleDialogOpen }: { item: Com, currentPageId: number, handleDialogOpen: (com: Com) => void }) => {
  return (
    <div className={styles.layerItem}>
      {item.name}
      <Button variant="outlined">设置</Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={(e) => {
          e.preventDefault()
          handleDialogOpen(item)
        }}
      >
        删除
      </Button>
    </div>
  )
})

const SortableList = SortableContainer(({ items, currentPageId, handleDialogOpen }: { items: Coms, currentPageId: number, handleDialogOpen: (com: Com) => void }) => {
  return (
    <div className={styles.layers}>
      {items.map((item, index) => {
        return (
          <SortableItem
            // need to process Here
            // disabled
            item={item}
            key={`sortableItem-${index}`}
            index={index}
            currentPageId={currentPageId}
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
      choosenCom: null
    }
  }

  handleDialogOpen = (item: Com) => {
    console.log(22)
    this.setState({ deleteDialogOpen: true, choosenCom: item })
  }

  hanldeDialogClose = () => {
    this.setState({ deleteDialogOpen: false })
    const { currentPageId, } = this.props
    const { choosenCom } = this.state
    if (!choosenCom) {
      return
    }
    this.props.deleteCom(choosenCom.id, currentPageId)
  }

  onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {

  }

  deleteCom = (id: number, currentPageId: number) => {
    this.props.deleteCom(id, currentPageId)
  }


  render() {
    const { currentComs, currentPageId } = this.props
    return (
      <>
        <SortableList
          items={currentComs}
          currentPageId={currentPageId}
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
            <Button onClick={this.hanldeDialogClose} color="primary" autoFocus>
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
  return {
    currentComs: getComsByCurrentPageId(state),
    currentPageId
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    deleteCom: (id: number, currentPageId: number) => {
      dispatch(deleteCom(id, currentPageId))
    },
    updateCom: (id: number, com: Com) => {
      dispatch(updateCom(id, com))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layers)