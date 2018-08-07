import { connect } from 'react-redux'
import { updateComZindex } from '../../../actions/Coms'
import Layers from '../../../components/FunctionTabs/Layers/Layers'

const mapStateToProps = state => ({
  layers: state.comList.filter(item =>
    state.status.com.order.includes(item.id)
  ),
  order: state.pageList.find(item => item.id === state.status.page.current)
    .order,
  targetPageId: state.status.page.current
})

const mapDispatchToProps = dispatch => ({
  updateComZindex: (order, oldIndex, newIndex, targetPageId) => {
    dispatch(updateComZindex(order, oldIndex, newIndex, targetPageId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layers)
