import * as React from 'react'
import styles from './Attribute.module.css'
import Input from '@material-ui/core/Input';
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

interface DispatchProps {
  updateCom: (id: number, com: Com) => void
  deleteCom: (id: number, targetPageId: number) => void
}

interface OwnProps {
  currentCom: Com | undefined
  targetPageId: number
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
    const { currentCom, targetPageId } = this.props
    if (!currentCom) {
      return
    }
    this.props.deleteCom(currentCom.id, targetPageId)
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

  render() {
    const { currentCom } = this.props
    if (!currentCom) {
      return <div> 你竟然没有选中任何一个组件 </div>
    }
    return (
      <div className={styles.attributes}>
        <div className={styles.base}>
          <Button variant="outlined" color="secondary" onClick={this.handleDialogOpen}>
            删除
          </Button>
          <div className={styles.attrId}>
            <InputLabel>组件编号:  </InputLabel>
            <Input
              value={currentCom.id}
              disabled>
            </Input>
          </div>
          <div className={styles.attr}>
            <InputLabel>组件名称:  </InputLabel>
            <Input
              value={currentCom.name}
              disabled>
            </Input>
          </div>
          {('context' in currentCom) &&
            <div className={styles.attr}>
              <InputLabel>文本内容:  </InputLabel>
              <Input
                inputProps={{ maxLength: 12 }}
                onChange={e => this.updateTextContext(e.target.value)}
                value={currentCom.context}
              />
            </div>}
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
              <InputLabel>Json路径:  </InputLabel>
              <Input
                value={currentCom.path}
                disabled>
              </Input>
            </div>}
          {('fontSize' in currentCom &&
            <div className={styles.attr}>
              <InputLabel>字体大小:  </InputLabel>
              <Input
                inputProps={{ maxLength: 12 }}
                onChange={e => this.updateFontSize(Number(e.target.value))}
                value={currentCom.fontSize}
              />
            </div>)}
          {('letterSpacing' in currentCom &&
            <div className={styles.attr}>
              <InputLabel>字体间距:  </InputLabel>
              <Input
                inputProps={{ maxLength: 12 }}
                onChange={e => this.updateLetterSpacing(e.target.value)}
                value={currentCom.letterSpacing}
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
          <DialogTitle id="alert-dialog-title">前方高能预警！</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              你确实要删除组件{currentCom.name}吗？
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.hanldeDialogClose} color="primary">
              取消
            </Button>
            <Button onClick={this.hanldeDialogClose} color="primary" autoFocus>
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
  const targetPageId = state.status.currentPageId
  return {
    currentCom,
    targetPageId
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>): DispatchProps => {
  return {
    updateCom: (id: number, com: Com) => {
      dispatch(updateCom(id, com))
    },
    deleteCom: (id: number, targetPageId: number) => {
      dispatch(deleteCom(id, targetPageId))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Attribute)