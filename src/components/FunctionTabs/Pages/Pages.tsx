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
import { deletePage, addPage, focusPage } from '../../../actions/pages';
import { initPage } from '../../../constants/pages';
import maxOfArray from '../../../utils/helper/maxOfArray';
import minOfArray from '../../../utils/helper/minOfArray';
import { setPageSettingsDialogStatus } from '../../../actions/status';

interface OwnProps {
  currentPages: PagesType
  currentPageId: number | null
}

interface DispatchProps {
  deletePage: (id: number, nextPageId: number) => void
  addPage: (page: Page) => void
  focusPage: (id: number) => void
  setPageSettingsDialogStatus: (status: boolean, choosenPageId: number) => void
}

type Props = OwnProps & DispatchProps

interface OwnState {
  deleteDialogOpen: boolean
  choosenPage: Page | null
}

type State = OwnState

class Pages extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      deleteDialogOpen: false,
      choosenPage: null
    }
  }

  handleDialogOpen = (item: Page) => {
    this.setState({
      deleteDialogOpen: true,
      choosenPage: item
    })
  }

  handleDialogClose = () => {
    this.setState({ deleteDialogOpen: false })
  }

  handleDialogCloseAndDeletePage = () => {
    this.setState({ deleteDialogOpen: false })
    const { choosenPage } = this.state
    if (!choosenPage) {
      return
    }
    const pageIds = this.props.currentPages.map(item => { return item.id })
    const nextPageId = minOfArray(pageIds)
    this.props.deletePage(choosenPage.id, nextPageId)
    this.props.focusPage(nextPageId)
  }

  handleAddPage = () => {
    let pageCopy = { ...initPage }
    const pageIds = this.props.currentPages.map(item => item.id)
    const newPageId = maxOfArray(pageIds) + 1
    const newPage = {
      ...pageCopy,
      id: newPageId,
      name: '页面 - ' + newPageId,
      order: []
    }
    this.props.addPage(newPage)
  }

  handlePageItemFocus = (id: number) => {
    this.props.focusPage(id)
  }

  handlePageSettingDialogOpen = (choosenPageId: number) => {
    this.props.setPageSettingsDialogStatus(true, choosenPageId)
  }

  renderPageItem = (item: Page, index: number) => {
    return <div className={item.id === this.props.currentPageId ? styles.pageItemf : styles.pageItem} key={index} onClick={() => this.handlePageItemFocus(item.id)}>
      {item.name}
      <Button
        variant="outlined"
        onClick={() => this.handlePageSettingDialogOpen(item.id)}
      >
        设置
      </Button>
      {index !== 0 && <Button
        variant="outlined"
        color="secondary"
        onClick={
          () => this.handleDialogOpen(item)
        }
      >
        删除
      </Button>}
    </div>
  }

  render() {
    const { currentPages } = this.props
    const renderPageMenuItems = currentPages.map((item, index) => {
      return this.renderPageItem(item, index)
    })
    return (
      <>
        <div className={styles.pagefunc}>
          <Button variant="contained" color="primary" onClick={this.handleAddPage}>新增</Button>
        </div>
        {renderPageMenuItems}
        <Dialog
          open={this.state.deleteDialogOpen}
          onClose={this.handleDialogClose}
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
            <Button onClick={this.handleDialogClose} color="primary">
              取消
            </Button>
            <Button onClick={this.handleDialogCloseAndDeletePage} color="primary" autoFocus>
              确定
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  const currentPages = state.work.present.pages
  const { currentPageId } = state.status.present
  return {
    currentPages,
    currentPageId
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    deletePage: (id: number, nextPageId: number) => {
      dispatch(deletePage(id, nextPageId))
    },
    addPage: (page: Page) => {
      dispatch(addPage(page))
    },
    focusPage: (id: number) => {
      dispatch(focusPage(id))
    },
    setPageSettingsDialogStatus: (status: boolean, choosenPageId: number) => {
      dispatch(setPageSettingsDialogStatus(status, choosenPageId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pages)