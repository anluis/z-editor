import { connect } from 'react-redux'
import { updateComZindex } from '../../../actions'
import Layers from '../../../components/FunctionTabs/Layers/Layers'

const mapStateToProps = state => ({
  layers: state.status.com.order
})

const mapDispatchToProps = dispatch => ({
  updateComZindex: (id, oldIndex, newIndex) => {
    dispatch(updateComZindex(id, oldIndex, newIndex))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layers)
