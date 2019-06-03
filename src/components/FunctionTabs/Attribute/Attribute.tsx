import * as React from 'react'
import styles from './Attribute.module.css'
import { SketchPicker, RGBColor } from 'react-color'
import IStoreState from '../../../types/IStoreState'
import { connect } from 'react-redux'
import { Com } from '../../../types/coms';
import { getCurrentComById } from '../../../utils/getters/works'
import InputLabel from '@material-ui/core/InputLabel';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { updateCom, deleteCom } from '../../../actions/coms'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

interface DispatchProps {
  updateCom: (id: number, com: Com) => void
  deleteCom: (id: number, currentPageId: number) => void
}

interface OwnProps {
  currentCom: Com | undefined
  currentPageId: number | null
}

interface OwnState {
  deleteDialogOpen: boolean
}

type Props = DispatchProps & OwnProps

type State = OwnState

class Attribute extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      deleteDialogOpen: false
    }
  }

  handleDialogOpen = () => {
    this.setState({ deleteDialogOpen: true })
  }

  hanldeDialogClose = () => {
    this.setState({ deleteDialogOpen: false })
    // const { currentCom, targetPageId } = this.props
    // if (!currentCom) {
    //   return
    // }
    // this.props.deleteCom(currentCom.id, targetPageId)
  }

  hanldeDialogCloseAndDeleteCom = () => {
    this.setState({ deleteDialogOpen: false })
    const { currentPageId, currentCom } = this.props
    if (!currentCom) {
      return
    }
    if (currentPageId === null) {
      return
    }
    this.props.deleteCom(currentCom.id, currentPageId)
  }

  updateTextContext = (e: string) => {
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('context' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.context = e
      updateCom(currentCom.id, comCopy)
    }
  }

  updateComName = (e: string) => {
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('name' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.name = e
      updateCom(currentCom.id, comCopy)
    }
  }

  updateBgColor = (e: RGBColor) => {
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('backgroundColor' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.backgroundColor = `rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`
      updateCom(currentCom.id, comCopy)
    }
  }

  updateFontSize = (fontSize: number) => {
    if (typeof fontSize !== 'number') {
      return
    }
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('fontSize' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.fontSize = fontSize
      updateCom(currentCom.id, comCopy)
    }
  }

  updateLetterSpacing = (letterSpacing: string) => {
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('letterSpacing' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.letterSpacing = letterSpacing
      updateCom(currentCom.id, comCopy)
    }
  }
  updateImgUrl = (imgUrl: string) => {
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('imgUrl' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.imgUrl = imgUrl
      updateCom(currentCom.id, comCopy)
    }
  }

  updateVideoUrl = (videoUrl: string) => {
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('videoUrl' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.videoUrl = videoUrl
      updateCom(currentCom.id, comCopy)
    }
  }

  updateHref = (href: string) => {
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('href' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.href = href
      updateCom(currentCom.id, comCopy)
    }
  }

  updateComX = (x: number) => {
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('x' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.x = x
      updateCom(currentCom.id, comCopy)
    }
  }

  updateComY = (y: number) => {
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('y' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.y = y
      updateCom(currentCom.id, comCopy)
    }
  }

  updateComWidth = (width: number) => {
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('width' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.width = width
      updateCom(currentCom.id, comCopy)
    }
  }

  updateComHeight = (height: number) => {
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('height' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.height = height
      updateCom(currentCom.id, comCopy)
    }
  }


  render() {
    const { currentCom } = this.props
    if (!currentCom) {
      return <div className={styles.nocurrentcom}> 你没有选中组件,点击组件查看修改属性 </div>
    }
    return (
      <div className={styles.attributes}>
        <div className={styles.base}>
          <Button variant="outlined" color="secondary" onClick={this.handleDialogOpen}>
            删除
          </Button>
          <div className={styles.attr}>
            <TextField
              label="组件名称"
              id="com-name"
              fullWidth
              onChange={e => this.updateComName(e.target.value)}
              value={currentCom.name}
              margin="dense"
            />
          </div>
          {
            ('x' in currentCom) &&
            <div className={styles.attr}>
              <TextField
                label="X轴距离(单位:逻辑像素)"
                id="com-x"
                fullWidth
                value={currentCom.x}
                margin="dense"
                onChange={e => this.updateComX(Number(e.target.value))}
              />
            </div>
          }
          {
            ('y' in currentCom) &&
            <div className={styles.attr}>
              <TextField
                label="Y轴距离(单位:逻辑像素)"
                id="com-y"
                fullWidth
                value={currentCom.y}
                margin="dense"
                onChange={e => this.updateComY(Number(e.target.value))}
              />
            </div>
          }
          {
            ('width' in currentCom) &&
            <div className={styles.width}>
              <TextField
                label="组件宽度(单位:逻辑像素)"
                id="com-width"
                fullWidth
                value={currentCom.width}
                margin="dense"
                onChange={e => this.updateComWidth(Number(e.target.value))}
              />
            </div>
          }
          {
            ('height' in currentCom) &&
            <div className={styles.width}>
              <TextField
                label="组件高度(单位:逻辑像素)"
                id="com-height"
                fullWidth
                value={currentCom.height}
                margin="dense"
                onChange={e => this.updateComHeight(Number(e.target.value))}
              />
            </div>
          }
          {
            ('context' in currentCom) &&
            <div className={styles.attr}>
              <TextField
                label="文本内容"
                id="com-context"
                fullWidth
                onChange={e => this.updateTextContext(e.target.value)}
                value={currentCom.context}
                margin="dense"
              />
            </div>
          }
          {
            ('href' in currentCom) &&
            <div className={styles.attr}>
              <TextField
                label="跳转链接(Url)"
                id="com-href"
                fullWidth
                onChange={e => this.updateHref(e.target.value)}
                value={currentCom.href}
                margin="dense"
              />
            </div>
          }

          {('imgUrl' in currentCom) &&
            <div className={styles.attr}>
              <TextField
                label="图片链接"
                id="com-img-url"
                fullWidth
                onChange={e => this.updateImgUrl(e.target.value)}
                value={currentCom.imgUrl}
                margin="dense"
              />
            </div>
          }
          {('videoUrl' in currentCom) &&
            <div className={styles.attr}>
              <TextField
                label="视频链接"
                id="com-video-url"
                fullWidth
                onChange={e => this.updateVideoUrl(e.target.value)}
                value={currentCom.videoUrl}
                margin="dense"
              />
            </div>
          }
          {('backgroundColor' in currentCom) &&
            <div className={styles.attr}>
              <InputLabel>背景颜色:  </InputLabel>
              <SketchPicker
                color={currentCom.backgroundColor}
                onChangeComplete={e => {
                  this.updateBgColor(e.rgb)
                }}
              />
            </div>}
          {('path' in currentCom) &&
            <div className={styles.attr}>
              <TextField
                label="Json路径"
                id="com-json-path"
                fullWidth
                value={currentCom.path}
                margin="dense"
                disabled
              />
            </div>}
          {('fontSize' in currentCom &&
            <div className={styles.attr}>
              <TextField
                label="字体大小(Px)"
                id="com-font-size"
                fullWidth
                inputProps={{ maxLength: 12 }}
                onChange={e => this.updateFontSize(Number(e.target.value))}
                value={currentCom.fontSize}
              />
            </div>)}
          {('letterSpacing' in currentCom &&
            <div className={styles.attr}>
              <TextField
                label="字体间距(Px)"
                id="com-letter-spacing"
                fullWidth
                inputProps={{ maxLength: 12 }}
                onChange={e => this.updateLetterSpacing(e.target.value)}
                value={currentCom.letterSpacing}
                margin="dense"
              />
            </div>)
          }
        </div>
        <Dialog
          open={this.state.deleteDialogOpen}
          onClose={this.hanldeDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">请确认</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              你确实要删除组件 -{currentCom.name}- 吗？
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.hanldeDialogClose} color="primary">
              取消
            </Button>
            <Button onClick={this.hanldeDialogCloseAndDeleteCom} color="primary" autoFocus>
              确定
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  const currentCom = getCurrentComById(state)
  const { currentPageId } = state.status
  return {
    currentCom,
    currentPageId
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>): DispatchProps => {
  return {
    updateCom: (id: number, com: Com) => {
      dispatch(updateCom(id, com))
    },
    deleteCom: (id: number, currentPageId: number) => {
      dispatch(deleteCom(id, currentPageId))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Attribute)