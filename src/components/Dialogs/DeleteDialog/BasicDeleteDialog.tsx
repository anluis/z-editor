import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface MaterialDeleteDialogProps {
  open: boolean
  confirmDeleteFunction: () => void
  closeFunction: () => void
  remindWord: string
}

type Props = MaterialDeleteDialogProps

class BasicDeleteDialog extends React.Component<Props> {

  handleClose = () => {
    this.props.closeFunction()
  }

  handleConfirm = () => {
    this.props.confirmDeleteFunction()
  }

  render() {
    const { open, remindWord } = this.props
    return (
      <Dialog
        open={open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">请确认</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {remindWord}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            取消
            </Button>
          <Button onClick={this.handleConfirm} color="secondary" autoFocus>
            确定
            </Button>
        </DialogActions>
      </Dialog>
    );
  }
}


export default BasicDeleteDialog