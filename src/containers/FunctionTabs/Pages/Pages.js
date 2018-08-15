import { connect } from 'react-redux'
import {
  updatePageOrder,
  focusPage,
  addPage,
  switchSettings
} from '../../../actions/Pages'
import Pages from '../../../components/FunctionTabs/Pages/Pages'

const mapStateToProps = state => ({
  pages: state.mywork.present.pageList,
  targetPageId: state.mywork.present.status.page.current,
  shouldSettingsShow: state.mywork.present.status.shouldSettingsShow,
  currentSettings: null
})

const mapDispatchToProps = dispatch => ({
  updatePageOrder: (oldIndex, newIndex) => {
    dispatch(updatePageOrder(oldIndex, newIndex))
  },
  focusPage: id => {
    dispatch(focusPage(id))
  },
  addPage: () => {
    dispatch(addPage())
  },
  swichSetting: shouldSettingsShow => {
    dispatch(switchSettings(shouldSettingsShow))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages)
