import * as React from 'react'
import IStoreState from '../../types/IStoreState';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PageSettings, Page, PageStyles } from '../../types/pages';
import { connect } from 'react-redux'
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { setPageSettingsDialogStatus } from '../../actions/status';
import { setPageSettings, setPageStyles, asyncSetPageSettingsAndStyles } from '../../actions/pages';
import { getCurrentPage } from '../../utils/getters/works';

interface OwnProps {
  pageSettingDialogShow: boolean
  choosenPageId: number | null
  currentPage: Page | undefined
}

interface DispatchProps {
  setPageSettingsDialogStatus: (status: boolean, choosenPageId: number | null) => void
  setPageSettings: (pageSettingArgs: PageSettings, pageId: number) => void
  setPageStyles: (pageStyleArgs: PageStyles, pageId: number) => void
  asyncSetPageSettingsAndStyles: (pageSettings: PageSettings, pageStyles: PageStyles, pageId: number) => Promise<void>
}

interface OwnState extends PageSettings {
  width: number
  height: number
}

type Props = OwnProps & DispatchProps

type State = OwnState

class PageSettingDialog extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    const { currentPage } = props
    if (currentPage) {
      this.state = {
        wechatShareTitle: '',
        wechatShareDescription: '',
        wechatShareIcon: '',
        pageTitle: currentPage.settings.pageTitle,
        width: currentPage.styles.width,
        height: currentPage.styles.height
      }
    } else {
      this.state = {
        pageTitle: '',
        wechatShareTitle: '',
        wechatShareDescription: '',
        wechatShareIcon: '',
        width: 0,
        height: 0
      }
    }
  }

  handleConfirm = async () => {
    const { asyncSetPageSettingsAndStyles, choosenPageId, setPageSettingsDialogStatus } = this.props
    if (choosenPageId === null) {
      return
    }
    try {
      const { wechatShareDescription, wechatShareIcon, wechatShareTitle, pageTitle, width, height } = this.state
      const pageSettings = {
        wechatShareTitle: wechatShareTitle,
        wechatShareDescription: wechatShareDescription,
        wechatShareIcon: wechatShareIcon,
        pageTitle: pageTitle
      }
      const pageStyles = {
        width: width,
        height: height
      }
      console.log(choosenPageId)
      await asyncSetPageSettingsAndStyles(pageSettings, pageStyles, choosenPageId)
      setPageSettingsDialogStatus(false, null)
    } catch (err) {
      console.warn(err.message)
    }
  }

  handleClose = () => {
    const { setPageSettingsDialogStatus } = this.props
    setPageSettingsDialogStatus(false, null)
  }

  handleTitleChange = (e: string) => {
    this.setState({
      wechatShareTitle: e
    })
  }

  handleDescChange = (e: string) => {
    this.setState({
      wechatShareDescription: e
    })
  }

  handleIconChange = (e: string) => {
    this.setState({
      wechatShareIcon: e
    })
  }

  handleWidthChange = (e: string) => {
    this.setState({
      width: Number(e)
    })
  }

  handleHeightChange = (e: string) => {
    this.setState({
      height: Number(e)
    })
  }

  handlePageTitleChange = (e: string) => {
    this.setState({
      pageTitle: e
    })
  }

  handleWechatShareIconChange = (e: string) => {
    this.setState({
      wechatShareIcon: e
    })
  }

  render() {
    const { pageSettingDialogShow } = this.props
    return (
      <div>
        <Dialog
          open={pageSettingDialogShow}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">页面设置</DialogTitle>
          <DialogContent>
            <DialogContentText>
              请填写页面相关设置
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="page-title"
              label="页面标题"
              fullWidth
              value={this.state.pageTitle}
              onChange={(e) => this.handlePageTitleChange(e.target.value)}
            />
            <TextField
              margin="dense"
              id="share-title"
              label="微信分享标题"
              fullWidth
              value={this.state.wechatShareTitle}
              onChange={(e) => this.handleTitleChange(e.target.value)}
            />
            <TextField
              margin="dense"
              id="desc"
              label="微信分享描述"
              fullWidth
              value={this.state.wechatShareDescription}
              onChange={(e) => this.handleDescChange(e.target.value)}
            />

            <TextField
              margin="dense"
              id="width"
              label="页面宽度"
              fullWidth
              value={this.state.width}
              onChange={(e) => this.handleWidthChange(e.target.value)}
            />
            <TextField
              margin="dense"
              id="height"
              label="页面高度"
              fullWidth
              value={this.state.height}
              onChange={(e) => this.handleHeightChange(e.target.value)}
            />
            <TextField
              margin="dense"
              id="icon"
              label="微信分享图标链接"
              fullWidth
              value={this.state.wechatShareIcon}
              onChange={(e) => this.handleWechatShareIconChange(e.target.value)}
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              取消
            </Button>
            <Button onClick={this.handleConfirm} color="primary">
              确定
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { pageSettingDialogShow, choosenPageId } = state.status.present
  const currentPage = getCurrentPage(state)
  return {
    pageSettingDialogShow,
    choosenPageId,
    currentPage
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>): DispatchProps => {
  return {
    setPageSettingsDialogStatus: (status: boolean, choosenPageId: number | null) => {
      dispatch(setPageSettingsDialogStatus(status, choosenPageId))
    },
    setPageSettings: (pageSettingArgs: PageSettings, pageId: number) => {
      dispatch(setPageSettings(pageSettingArgs, pageId))
    },
    setPageStyles: (pageStyleArgs: PageStyles, pageId: number) => {
      dispatch(setPageStyles(pageStyleArgs, pageId))
    },
    asyncSetPageSettingsAndStyles: async (pageSettings: PageSettings, pageStyles: PageStyles, pageId: number) => {
      dispatch(asyncSetPageSettingsAndStyles(pageSettings, pageStyles, pageId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageSettingDialog)