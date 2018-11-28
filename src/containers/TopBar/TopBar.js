// 顶部功能区域
import { connect } from 'react-redux'
import { addCom } from '@/actions/Coms'
import { saveWorkBegin, saveWorkSuccess, saveWorkFailure } from '@/actions/Work'
import { undo, redo } from '../../actions/index'
import { changeWorkSettings } from '@/actions/Status'
import TopBar from '@/components/TopBar/TopBar'
import {
  imageModule,
  backgroundModule,
  inputModule,
  videoModule,
  textModule,
  photoModule,
  lottieModule
} from '@/constants/ModuleDefaultSettings'
import {
  IMG_MODULE,
  BACKGROUND_MODULE,
  INPUT_MODULE,
  VIDEO_MODULE,
  TEXT_MODULE,
  PHOTO_MODULE,
  LOTTIE_MODULE
} from '@/constants/ModuleTypes'

const mapStateToProps = state => {
  return {
    currentPageId: state.mywork.present.status.page.current,
    canRedo: state.mywork.future.length > 0,
    canUndo: state.mywork.past.length > 0,
    project: state.mywork.present.status.project,
    workSettings: state.mywork.present.status.workSettings,
    myWorkTree: state.mywork.present
  }
}

const mapDispatchToProps = dispatch => ({
  addCom: (targetPageId, moduleType) => {
    switch (moduleType) {
      case IMG_MODULE:
        dispatch(addCom(imageModule, targetPageId, moduleType))
        break
      case BACKGROUND_MODULE:
        dispatch(addCom(backgroundModule, targetPageId, moduleType))
        break
      case INPUT_MODULE:
        dispatch(addCom(inputModule, targetPageId, moduleType))
        break
      case VIDEO_MODULE:
        dispatch(addCom(videoModule, targetPageId, moduleType))
        break
      case TEXT_MODULE:
        dispatch(addCom(textModule, targetPageId, moduleType))
        break
      case PHOTO_MODULE:
        dispatch(addCom(photoModule, targetPageId, moduleType))
        break
      case LOTTIE_MODULE:
        dispatch(addCom(lottieModule, targetPageId, moduleType))
        break
      default:
        break
    }
  },
  undo: () => {
    dispatch(undo())
  },
  redo: () => {
    dispatch(redo())
  },
  changeWorkSettingVisible: (status, payload) => {
    dispatch(changeWorkSettings(status, payload))
  },
  saveWorkBegin: () => {
    dispatch(saveWorkBegin())
  },
  saveWorkSuccess: () => {
    dispatch(saveWorkSuccess())
  },
  saveWorkFailure: () => {
    dispatch(saveWorkFailure())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar)
