import { connect } from 'react-redux'
import { updateComZindex } from '../../../actions/Coms'
import Layers from '../../../components/FunctionTabs/Layers/Layers'

const mapStateToProps = state => {
  let targetPageItem = state.present.pageList.find(
    pageItem => pageItem.id === state.present.status.page.current
  )
  return {
    layers: state.present.comList.filter(item => {
      return targetPageItem.order.includes(item.id)
    }),
    order: state.present.pageList.find(
      item => item.id === state.present.status.page.current
    ).order,
    targetPageId: state.present.status.page.current,
    currentComId: state.present.status.com.current
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
