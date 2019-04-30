import * as React from 'react'
import { connect } from 'react-redux'
import IStoreState from '../../../types/IStoreState';
import { Pages as PagesType, Page } from '../../../types/pages'
import styles from './Pages.module.css'
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ThunkDispatch } from 'redux-thunk';
import { deletePage } from '../../../actions/pages';

interface OwnProps {
  currentPages: PagesType
}

interface DispatchProps {
  deletePage: (id: number) => void
}

type Props = OwnProps & DispatchProps

interface OwnState {
  deleteDialogOpen: boolean
  topRemindText: string
  canBeSort: boolean
  choosenPage: Page | null
}

type State = OwnState

class Pages extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      deleteDialogOpen: false,
      topRemindText: '点击进入排序',
      canBeSort: false,
      choosenPage: null
    }
  }

  hanldeDialogOpen = (item: PagesType) => {
    this.setState({
      deleteDialogOpen: true,
      choosenPage: item
    })
  }

  hanldeDialogClose = () => {
    this.setState({ deleteDialogOpen: false })
  }

  hanldeDialogCloseAndDeletePage = () => {
    this.setState({ deleteDialogOpen: false })
    const { choosenPage } = this.state
    if (!choosenPage) {
      return
    }
    this.props.deletePage(choosenPage.id)
  }

  sortModeChange = () => {
    this.setState({
      topRemindText: this.state.canBeSort ? '点击进入排序' : '关闭排序模式',
      canBeSort: !this.state.canBeSort
    })
  }

  render() {
    const { topRemindText } = this.state
    return (
      <>
        <div className={styles.inaddmode}>
          <Button color="primary" onClick={this.sortModeChange}>
            {topRemindText}
          </Button>
        </div>
        <Dialog
          open={this.state.deleteDialogOpen}
          onClose={this.hanldeDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">前方高能预警！</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              你确实要删除组件{this.state.choosenPage ? this.state.choosenPage.name : ''}吗？
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.hanldeDialogClose} color="primary">
              取消
            </Button>
            <Button onClick={this.hanldeDialogCloseAndDeletePage} color="primary" autoFocus>
              确定
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  const currentPages = state.work.pages
  return {
    currentPages
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    deletePage: (id: number) => {
      dispatch(deletePage(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pages)