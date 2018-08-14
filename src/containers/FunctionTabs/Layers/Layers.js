import { connect } from 'react-redux'
import { updateComZindex } from '../../../actions/Coms'
import Layers from '../../../components/FunctionTabs/Layers/Layers'

const mapStateToProps = state => {
  let targetPageItem = state.mywork.present.pageList.find(
    pageItem => pageItem.id === state.mywork.present.status.page.current
  )
  return {
    layers: state.mywork.present.comList.filter(item => {
      return targetPageItem.order.includes(item.id)
    }),
    order: state.mywork.present.pageList.find(
      item => item.id === state.mywork.present.status.page.current
    ).order,
    targetPageId: state.mywork.present.status.page.current,
    currentComId: state.mywork.present.status.com.current
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
