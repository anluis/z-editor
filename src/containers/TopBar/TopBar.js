// 顶部功能区域
import { connect } from 'react-redux'
import { addCom } from '../../actions/Coms'
import TopBar from '../../components/TopBar/TopBar'
import {
  imageModule,
  backgroundModule,
  textModule
} from '../../components/Module/Module'
import {
  IMG_MODULE,
  BACKGROUND_MODULE,
  INPUT_MODULE
} from '../../constants/ModuleTypes'

const mapStateToProps = state => ({
  currentPageId: state.status.page.current
})

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
        dispatch(addCom(textModule, targetPageId))
        break
      default:
        break
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar)
