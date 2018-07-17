import Layers from '../../components/Layers/Layers'
import { connect } from 'react-redux'
import { moveLayer } from '../../actions'

const mapStateToProps = state => ({
  layers: state.layers
})

const mapDispatchToProps = dispatch => {
  return {
    moveLayer: (oldIndex, newIndex) => {
      dispatch(moveLayer(oldIndex, newIndex))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layers)
