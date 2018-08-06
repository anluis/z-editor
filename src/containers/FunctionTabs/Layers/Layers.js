import { connect } from 'react-redux'
import { updateComZindex } from '../../../actions'
import Layers from '../../../components/FunctionTabs/Layers/Layers'

const mapStateToProps = state => ({
  layers: state.status.com.order
})

const mapDispatchToProps = dispatch => ({
  updateComZindex: (layers, oldIndex, newIndex) => {
    dispatch(updateComZindex(layers, oldIndex, newIndex))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layers)
