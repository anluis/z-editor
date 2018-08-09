import { connect } from 'react-redux'
import { updateComZindex } from '../../../actions/Coms'
import Layers from '../../../components/FunctionTabs/Layers/Layers'

const mapStateToProps = state => {
  let targetPageItem = state.pageList.find(
    pageItem => pageItem.id === state.status.page.current
  )
  return {
    layers: state.comList.filter(item => {
      return targetPageItem.order.includes(item.id)
    }),
    order: state.pageList.find(item => item.id === state.status.page.current)
      .order,
    targetPageId: state.status.page.current,
    currentComId: state.status.com.current
  }
}

const mapDispatchToProps = dispatch => ({
  updateComZindex: (order, oldIndex, newIndex, targetPageId, chooseComId) => {
    dispatch(
      updateComZindex(order, oldIndex, newIndex, targetPageId, chooseComId)
    )
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layers)
