import { connect } from 'react-redux'
import { updatePageOrder, focusPage } from '../../../actions'
import Pages from '../../../components/FunctionTabs/Pages/Pages'

const mapStateToProps = state => ({
  pages: state.pageList
})

const mapDispatchToProps = dispatch => ({
  updatePageOrder: (id, oldIndex, newIndex) => {
    dispatch(updatePageOrder(id, oldIndex, newIndex))
  },
  focusPage: id => {
    dispatch(focusPage(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages)
