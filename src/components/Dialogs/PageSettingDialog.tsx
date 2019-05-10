import * as React from 'react'
import IStoreState from '../../types/IStoreState';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PageSettings } from '../../types/pages';
import { connect } from 'react-redux'
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { setPageSettingsDialogStatus } from '../../actions/status';
import { setPageSettings } from '../../actions/pages';

interface OwnProps {
  pageSettingDialogShow: boolean
  choosenPageId: number | null
}

interface DispatchProps {
  setPageSettingsDialogStatus: (status: boolean, choosenPageId: number | null) => void
  setPageSettings: (pageSettingArgs: PageSettings, pageId: number) => void
}

interface OwnState extends PageSettings {

}

type Props = OwnProps & DispatchProps

type State = OwnState

class PageSettingDialog extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      wechatShareTitle: '',
      wechatShareDescription: '',
      wechatShareIcon: ''
    }
  }

  handleConfirm = () => {
    const { setPageSettings, choosenPageId } = this.props
    if (choosenPageId === null) {
      return
    }
    setPageSettings(this.state, choosenPageId)
    this.handleClose()
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
              id="title"
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
              id="icon"
              label="微信分享图标"
              fullWidth
              value={this.state.wechatShareIcon}
              onChange={(e) => this.handleDescChange(e.target.value)}
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
  return {
    pageSettingDialogShow,
    choosenPageId
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  return {
    setPageSettingsDialogStatus: (status: boolean, choosenPageId: number | null) => {
      dispatch(setPageSettingsDialogStatus(status, choosenPageId))
    },
    setPageSettings: (pageSettingArgs: PageSettings, pageId: number) => {
      dispatch(setPageSettings(pageSettingArgs, pageId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageSettingDialog)