import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IStoreState from '../../../types/IStoreState';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux'
import { setBasicDialogStatus } from '../../../actions/status';

interface OwnProps {
  basicDialogShow: boolean
  basicDialogMessage: string
  latestWorkId: string | null
}

interface DispatchProps {
  setBasicDialogShowStatus: (status: boolean, msg: string) => void
}

type Props = OwnProps & DispatchProps

class BasicDialog extends React.Component<Props> {

  handleClose = () => {
    this.props.setBasicDialogShowStatus(false, '')
  };

  render() {
    const { latestWorkId } = this.props
    const workUrl = window.location.hostname + '/' + latestWorkId + '/1'
    const renderUrl =
      <>
        <span>发布链接为: </span>
        <a href={workUrl}>{workUrl}</a>
      </>
    return (
      <Dialog
        open={this.props.basicDialogShow}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          恭喜！
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {this.props.basicDialogMessage}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            {latestWorkId !== null && renderUrl}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            好的
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}


const mapStateToProps = (state: IStoreState) => {
  const { basicDialogShow, basicDialogMessage, latestWorkId } = state.status
  return {
    basicDialogShow,
    basicDialogMessage,
    latestWorkId
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    setBasicDialogShowStatus: (status: boolean, msg: string) => {
      dispatch(setBasicDialogStatus(status, msg))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BasicDialog)