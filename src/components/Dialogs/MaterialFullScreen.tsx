import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import IStoreState from '../../types/IStoreState';
import { connect } from 'react-redux'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { ThunkDispatch } from 'redux-thunk';
import { setMaterialDialogStatus } from '../../actions/status'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { Button } from '@material-ui/core'

const styles: any = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

interface OwnProps {
  materialDialogShow: boolean
  classes: any
}

interface DispatchProps {
  setMaterialDialogStatus: (status: boolean) => void
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
    this.props.setMaterialDialogStatus(false)
  };

  render() {
    const { materialDialogShow, classes } = this.props
    return (
      <Dialog
        fullScreen
        open={materialDialogShow}
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
  const { materialDialogShow } = state.status
  return {
    materialDialogShow
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    setMaterialDialogStatus: (status: boolean) => {
      dispatch(setMaterialDialogStatus(status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FullScreenDialog))