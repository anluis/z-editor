import * as React from 'react'
import styles from './TopBar.module.css'
import { Button } from '@material-ui/core'
import IStoreState from '../../types/IStoreState';
import { ThunkDispatch } from 'redux-thunk'
import { redo, undo } from '../../actions/status'
import { connect } from 'react-redux'
import { addCom } from '../../actions/coms'
import { setMaterialDialogStatus } from '../../actions/status'
import { Com } from '../../types/coms'
import { updateSettings } from '../../actions/settings'
import { topBarItem, topBarSettings } from '../../constants/topBar'
import maxOfArray from '../../utils/helper/maxOfArray'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
  TEXT,
  initText,
  IMAGE,
  initImage,
  VIDEO,
  initVideo,
  LOTTIE,
  initLottie,
  PHOTO_GET,
  initPhotoGet
} from '../../constants/coms';

interface OwnProps {
  currentPageId: number | null
  comsIds: Array<number>
  title: string
  desc: string
}

interface DispatchProps {
  redo: () => void
  undo: () => void
  addCom: (id: number, com: Com) => void
  updateSettings: (title: string, desc: string) => void
  setMaterialDialogStatus: (status: boolean) => void
}

type Props = DispatchProps & OwnProps

interface State {
  settingOpen: boolean
  title: string
  desc: string
}

class TopBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      settingOpen: false,
      title: '',
      desc: ''
    }
  }

  undo = () => {

  }

  redo = () => {

  }

  publish = () => {

  }

  handleSettingsOpen = () => {
    const { title, desc } = this.props
    this.setState({
      title: title,
      desc: desc,
      settingOpen: true
    })
  }

  handleDialogClose = () => {
    this.setState({
      settingOpen: false
    })
  }

  hanldeDialogCloseAndSave = () => {
    this.props.updateSettings(this.state.title, this.state.desc)
    this.setState({
      settingOpen: false
    })
  }

  handleAddCom = (type: string) => {
    const { currentPageId, comsIds, addCom, setMaterialDialogStatus } = this.props
    console.log(currentPageId)
    if (currentPageId === null) {
      return
    }
    const newId = maxOfArray(comsIds) + 1
    switch (type) {
      case TEXT:
        const newText = {
          ...initText,
          name: `Text-${newId}`,
          id: newId,
        }
        addCom(currentPageId, newText)
        return
      case IMAGE:
        const newImage = {
          ...initImage,
          id: newId,
          name: `Image-${newId}`,
          imgUrl: 'https://dn-coding-net-production-static.qbox.me/d4c0b468-29dd-4996-ae65-58a4b038fc39.JPG?imageMogr2/auto-orient/format/jpeg/crop/!538x538a0a0'
        }
        // setDialogStatus(true)
        addCom(currentPageId, newImage)
        return
      case VIDEO:
        const newVideo = {
          ...initVideo,
          id: newId,
          name: `Video-${newId}`,
          videoUrl: 'http://h5-images.oss-cn-shanghai.aliyuncs.com/xingshidu_h5/marketing/pages/ad/vedio.mp4'
        }
        addCom(currentPageId, newVideo)
        return
      case LOTTIE:
        const newLottie = {
          ...initLottie,
          id: newId,
          name: `Lottie-${newId}`,
          path: 'http://cdn.xingstation.cn/fe/marketing/jqsjb/json/data.json',
          assetsPath: 'http://cdn.xingstation.cn/fe/marketing/jqsjb/img/'
        }
        addCom(currentPageId, newLottie)
        return
      case PHOTO_GET:
        const newPhotoGet = {
          ...initPhotoGet,
          id: newId,
          name: `PhotoGet-${newId}`
        }
        addCom(currentPageId, newPhotoGet)
        return
      default:
        return
    }
  }

  handleTitleChange = (e: string) => {
    this.setState({
      title: e
    })
  }

  handleDescChange = (e: string) => {
    this.setState({
      desc: e
    })
  }

  render() {
    const renderItem = (item: topBarItem, index: number) => {
      return <div key={index} className={styles.fitem} >
        {item.name}
        <img className={styles.icon} src={item.imgUrl} onClick={() => this.handleAddCom(item.type)} />
      </div>

    }
    const renderItems = topBarSettings.map((item, index) => {
      return (renderItem(item, index))
    })

    return (
      <>
        <div className={styles.head}>
          <Button variant="contained" color="primary" onClick={() => this.undo}>撤销</Button>
          <Button variant="contained" color="primary" onClick={() => this.undo}>重做</Button>
        </div>

        <div className={styles.functions}>
          {renderItems}
        </div>

        <div className={styles.publish}>
          <Button
            variant="contained" color="primary"
            onClick={this.handleSettingsOpen}
            className={styles.publishbt}>
            设置
          </Button>
          <Button
            variant="contained" color="primary"
            onClick={this.publish}
            className={styles.publishbt}>
            发布
          </Button>
        </div>

        <Dialog
          open={this.state.settingOpen}
          onClose={this.handleDialogClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">作品设置</DialogTitle>
          <DialogContent>
            <DialogContentText>
              请填写关于作品的设置
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="标题"
              fullWidth
              value={this.state.title}
              onChange={(e) => this.handleTitleChange(e.target.value)}
            />
            <TextField
              margin="dense"
              id="desc"
              label="简介"
              fullWidth
              value={this.state.desc}
              onChange={(e) => this.handleDescChange(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDialogClose} color="primary">
              取消
            </Button>
            <Button onClick={this.hanldeDialogCloseAndSave} color="primary">
              确定
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { desc, title } = state.work.settings
  const { currentComId, currentPageId } = state.status
  const comsIds = state.work.coms.map(item => { return item.id })
  return {
    currentComId,
    currentPageId,
    comsIds,
    desc,
    title
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    redo: () => {
      dispatch(redo())
    },
    undo: () => {
      dispatch(undo())
    },
    addCom: (id: number, com: Com) => {
      dispatch(addCom(id, com))
    },
    updateSettings: (title: string, desc: string) => {
      dispatch(updateSettings(title, desc))
    },
    setMaterialDialogStatus: (status: boolean) => {
      dispatch(setMaterialDialogStatus(status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)