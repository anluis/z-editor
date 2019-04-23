import * as React from 'react'
import styles from './TopBar.module.css'
import { Button } from '@material-ui/core'
import { textIcon, imgIcon, bgIcon, lottieIcon, getIcon, videoIcon } from '../../constants/imgs'
import IStoreState from '../../types/IStoreState';
import { ThunkDispatch } from 'redux-thunk'
import { redo, undo } from '../../actions/status'
import { connect } from 'react-redux'

interface OwnProps {

}

interface DispatchProps {
  redo: () => void
  undo: () => void
}

type Props = DispatchProps & OwnProps

class TopBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  undo = () => {

  }

  redo = () => {

  }

  publish = () => {

  }

  addCom = () => {

  }

  render() {
    return (
      <>
        <div className={styles.head}>
          <Button variant="contained" color="primary" onClick={() => this.undo}>Undo</Button>
          <Button variant="contained" color="primary" onClick={() => this.undo}>Redo</Button>
        </div>

        <div className={styles.functions}>
          <div className={styles.fitem} onClick={() => this.addCom}>
            Text
            <img className={styles.icon} src={textIcon} alt="文字组件" />
          </div>
          <div className={styles.fitem} onClick={() => this.addCom}>
            Image
            <img className={styles.icon} src={imgIcon} alt="图片组件" />
          </div>
          <div className={styles.fitem} onClick={() => this.addCom}>
            Bg
            <img className={styles.icon} src={bgIcon} alt="背景组件" />
          </div>
          <div className={styles.fitem} onClick={() => this.addCom}>
            Input
            <img className={styles.icon} src={bgIcon} alt="输入框组件" />
          </div>
          <div className={styles.fitem} onClick={() => this.addCom}>
            Video
            <img className={styles.icon} src={videoIcon} alt="视频组件" />
          </div>
          <div className={styles.fitem} onClick={() => this.addCom}>
            PhotoGet
            <img className={styles.icon} src={getIcon} alt="提取组件" />
          </div>
          <div className={styles.fitem} onClick={() => this.addCom}>
            Lottie
            <img className={styles.icon} src={lottieIcon} alt="动画组件" />
          </div>
        </div>

        <div className={styles.publish}>
          <Button
            variant="contained" color="primary"
            onClick={() => this.publish}
            className={styles.publishbt}>
            Publish
          </Button>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  return {}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    redo: () => {
      dispatch(redo())
    },
    undo: () => {
      dispatch(undo())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)