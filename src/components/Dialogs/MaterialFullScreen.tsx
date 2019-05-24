import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import IStoreState from '../../types/IStoreState';
import { connect } from 'react-redux'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { ThunkDispatch } from 'redux-thunk';
import { setMaterialDialogStatus, setMaterialChoosenCom } from '../../actions/status'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { Button } from '@material-ui/core'
import Material from '../Material/Material'
import { Com } from '../../types/coms';
import { addCom } from '../../actions/coms';

const styles: any = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

interface OwnProps {
  materialChoosenCom: Com | null
  materialDialogShow: boolean
  currentPageId: number | null
  classes: any
}

interface DispatchProps {
  setMaterialDialogStatus: (status: boolean) => void
  addCom: (currentPageId: number, com: Com) => void
  setMaterialChoosenCom: (com: Com | null) => void
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
    this.props.setMaterialChoosenCom(null)
    this.props.setMaterialDialogStatus(false)
  }

  handleAddCom = () => {
    const { currentPageId, materialChoosenCom, setMaterialChoosenCom, addCom, setMaterialDialogStatus } = this.props
    console.log(currentPageId)
    console.log(materialChoosenCom)

    if (currentPageId !== null && materialChoosenCom !== null) {
      addCom(currentPageId, materialChoosenCom)
    }
    setMaterialChoosenCom(null)
    setMaterialDialogStatus(false)
  }

  render() {
    const { materialDialogShow, classes, materialChoosenCom } = this.props
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
              {materialChoosenCom === null && '请选择'}
              {materialChoosenCom !== null && '已选择, 将要插入组件 ' + materialChoosenCom.name}
            </Typography>
            <Button disabled={materialChoosenCom === null} color="inherit" onClick={this.handleAddCom}>
              确定
            </Button>
          </Toolbar>
        </AppBar>
        <Material />
      </Dialog>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { materialDialogShow, materialChoosenCom, currentPageId } = state.status
  return {
    materialDialogShow,
    materialChoosenCom,
    currentPageId
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    setMaterialDialogStatus: (status: boolean) => {
      dispatch(setMaterialDialogStatus(status))
    },
    addCom: (currentPageId: number, com: Com) => {
      dispatch(addCom(currentPageId, com))
    },
    setMaterialChoosenCom: (com: Com | null) => {
      dispatch(setMaterialChoosenCom(com))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FullScreenDialog))