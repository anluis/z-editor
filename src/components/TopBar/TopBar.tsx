import * as React from 'react'
import styles from './TopBar.module.css'
import { Button } from '@material-ui/core'
import IStoreState from '../../types/IStoreState';
import { ThunkDispatch } from 'redux-thunk'
import { redo, undo } from '../../actions/status'
import { connect } from 'react-redux'
import { addCom } from '../../actions/coms'
import { Com } from '../../types/coms'
import { topBarItem, topBarSettings } from '../../constants/topBar'
import maxOfArray from '../../utils/helper/maxOfArray'

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
  currentPageId: number
  comsIds: Array<number>
}

interface DispatchProps {
  redo: () => void
  undo: () => void
  addCom: (id: number, com: Com) => void
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

  preview = () => {

  }

  handleAddCom = (type: string) => {
    const { currentPageId, comsIds, addCom } = this.props
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
            onClick={() => this.preview}
            className={styles.publishbt}>
            预览
          </Button>
          <Button
            variant="contained" color="primary"
            onClick={() => this.publish}
            className={styles.publishbt}>
            发布
          </Button>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { currentComId, currentPageId } = state.status
  const comsIds = state.work.coms.map(item => { return item.id })
  return {
    currentComId,
    currentPageId,
    comsIds
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)