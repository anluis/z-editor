// 顶部功能区域
import { connect } from 'react-redux'
import { addCom } from '../../actions/Coms'
import { undo, redo } from '../../actions/index'
import { visible } from '../../actions/Visible'
import TopBar from '../../components/TopBar/TopBar'
import {
  imageModule,
  backgroundModule,
  inputModule,
  vedioModule,
  textModule,
  photoModule
} from '../../components/Module/Module'
import {
  IMG_MODULE,
  BACKGROUND_MODULE,
  INPUT_MODULE,
  VEDIO_MODULE,
  TEXT_MODULE,
  PHOTO_MODULE
} from '../../constants/ModuleTypes'

const mapStateToProps = state => {
  return {
    currentPageId: state.mywork.present.status.page.current,
    canRedo: state.mywork.future.length > 0,
    canUndo: state.mywork.past.length > 0,
    modal: state.model.modal.visible
  }
}

const mapDispatchToProps = dispatch => ({
  addCom: (targetPageId, moduleType) => {
    switch (moduleType) {
      case IMG_MODULE:
        dispatch(addCom(imageModule, targetPageId))
        break
      case BACKGROUND_MODULE:
        dispatch(addCom(backgroundModule, targetPageId))
        break
      case INPUT_MODULE:
        dispatch(addCom(inputModule, targetPageId))
        break
      case VEDIO_MODULE:
        dispatch(addCom(vedioModule, targetPageId))
        break
      case TEXT_MODULE:
        dispatch(addCom(textModule, targetPageId))
        break
      case PHOTO_MODULE:
        dispatch(addCom(photoModule, targetPageId))
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
  visible: Modal => {
    dispatch(visible(Modal))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar)
