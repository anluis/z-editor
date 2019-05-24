import * as React from 'react'
import styles from './TopBar.module.css'
import { Button } from '@material-ui/core'
import IStoreState, { Work } from '../../types/IStoreState';
import { ThunkDispatch } from 'redux-thunk'
import { redo, undo, setMaterialCurrentValue, setBasicDialogStatus, setLatestWorkId } from '../../actions/status'
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
  VIDEO,
  LOTTIE,
  PHOTO_GET,
  initPhotoGet
} from '../../constants/coms';
import { handleAxiosAsyncError } from '../../utils/helper/errorHandle/axiosError';
import workPublish from '../../apis/works/workPublish';
import workUpdate from '../../apis/works/workUpdate';

interface OwnProps {
  currentPageId: number | null
  comsIds: Array<number>
  title: string
  desc: string
  work: Work
  latestWorkId: string | null
  pastLength: number
  futureLength: number
}

interface DispatchProps {
  redo: () => void
  undo: () => void
  addCom: (id: number, com: Com) => void
  updateSettings: (title: string, desc: string) => void
  setMaterialDialogStatus: (status: boolean) => void
  setMaterialCurrentValue: (value: number) => void
  setBasicDialogShowStatus: (status: boolean, msg: string) => void
  setLatestWorkId: (id: string | null) => void
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
    // this.props.setLatestWorkId(null)
    // this.props.setBasicDialogShowStatus(true, '功能还在debug...')
    this.props.undo()
  }

  redo = () => {
    // this.props.setLatestWorkId(null)
    // this.props.setBasicDialogShowStatus(true, '功能还在debug...')
    this.props.redo()
  }

  showPublishDialog = () => {
    this.props.setBasicDialogShowStatus(true, '请点击链接预览，调整浏览器至手机模式。')
  }

  checkCanPublish = () => {
    const { desc, title } = this.props
    if (desc === '' || title === '') {
      // this.props.setLatestWorkId(null)
      this.props.setBasicDialogShowStatus(true, '请填写作品设置')
      return false
    } else {
      return true
    }
  }

  publish = async () => {
    const { latestWorkId } = this.props
    if (this.checkCanPublish()) {
      try {
        if (latestWorkId === null) {
          const publishResult: any = await workPublish(this.props.work)
          this.props.setLatestWorkId(publishResult.data._id)
        } else {
          await workUpdate(latestWorkId, this.props.work)
        }

      } catch (err) {
        handleAxiosAsyncError(err)
      }
      this.showPublishDialog()
    }
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
    const { currentPageId, comsIds, addCom, setMaterialDialogStatus, setMaterialCurrentValue } = this.props
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
        setMaterialCurrentValue(0)
        setMaterialDialogStatus(true)
        return
      case VIDEO:
        setMaterialCurrentValue(1)
        setMaterialDialogStatus(true)
        return
      case LOTTIE:
        setMaterialCurrentValue(2)
        setMaterialDialogStatus(true)
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

  preview = async () => {
    try {
      const publishResult = await workPublish(this.props.work)
      console.dir(publishResult)
    } catch (err) {
      handleAxiosAsyncError(err)
    }
    // this.props.setLatestWorkId('test')
    // this.props.setBasicDialogShowStatus(true, '请点击链接预览，调整浏览器至手机模式。')
  }

  render() {
    const { latestWorkId, pastLength, futureLength } = this.props
    const renderItem = (item: topBarItem, index: number) => {
      return <div key={index} className={styles.fitem} onClick={() => this.handleAddCom(item.type)}>
        {item.name}
        <img className={styles.icon} src={item.imgUrl} />
      </div>

    }
    const renderItems = topBarSettings.map((item, index) => {
      return (renderItem(item, index))
    })

    return (
      <>
        <div className={styles.head}>
          <Button variant="contained" color="primary" onClick={this.undo} disabled={pastLength <= 0}>撤销</Button>
          <Button variant="contained" color="primary" onClick={this.redo} disabled={futureLength <= 0}>重做</Button>
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
          {/* <Button
            variant="contained" color="primary"
            onClick={this.preview}
            className={styles.publishbt}>
            预览
          </Button> */}
          <Button
            variant="contained" color="primary"
            onClick={this.publish}
            className={styles.publishbt}>
            {latestWorkId === null && <>发布</>}
            {latestWorkId !== null && <>更新</>}
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
  const { present } = state.work
  const { desc, title } = state.work.present.settings
  const { currentComId, currentPageId, latestWorkId } = state.status
  const comsIds = state.work.present.coms.map(item => { return item.id })
  const pastLength = state.work.past.length
  const futureLength = state.work.future.length
  return {
    currentComId,
    currentPageId,
    comsIds,
    desc,
    title,
    work: present,
    latestWorkId,
    pastLength,
    futureLength
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
    },
    setMaterialCurrentValue: (value: number) => {
      dispatch(setMaterialCurrentValue(value))
    },
    setBasicDialogShowStatus: (status: boolean, msg: string) => {
      dispatch(setBasicDialogStatus(status, msg))
    },
    setLatestWorkId: (id: string | null) => {
      dispatch(setLatestWorkId(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)