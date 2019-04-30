import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import IStoreState from '../../types/IStoreState';
import { connect } from 'react-redux'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { ThunkDispatch } from 'redux-thunk';
import { setDialogStatus } from '../../actions/status'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { Button } from '@material-ui/core'

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

interface OwnProps {
  dialogShow: boolean
}

interface DispatchProps {
  setDialogStatus: (status: boolean) => void
}

type Props = OwnProps & DispatchProps

function Transition(props: any) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component<Props> {

  // handleClickOpen = () => {
  //   // this.setState({ open: true });
  // };

  handleClose = () => {
    this.props.setDialogStatus(false)
  };

  render() {
    // @ts-ignore
    const { dialogShow, classes } = this.props
    return (
      <Dialog
        fullScreen
        open={dialogShow}
        onClose={this.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              选择
              </Typography>
            <Button color="inherit" onClick={this.handleClose}>
              确定
              </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { dialogShow } = state.status
  return {
    dialogShow
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    setDialogStatus: (status: boolean) => {
      dispatch(setDialogStatus(status))
    }
  }
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FullScreenDialog))