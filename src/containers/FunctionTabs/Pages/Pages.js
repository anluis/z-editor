import { connect } from 'react-redux'
import { updatePageOrder, focusPage, addPage } from '../../../actions/Pages'
import Pages from '../../../components/FunctionTabs/Pages/Pages'

const mapStateToProps = state => ({
  pages: state.pageList,
  targetPageId: state.status.page.current
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
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages)
