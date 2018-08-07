import { connect } from 'react-redux'
import { updateComZindex, updateCom } from '../../../actions'
import Layers from '../../../components/FunctionTabs/Layers/Layers'

const mapStateToProps = state => ({
  layers: state.comList
})

const mapDispatchToProps = dispatch => ({
  updateComZindex: (id, oldIndex, newIndex, attribute) => {
    dispatch(updateComZindex(id, oldIndex, newIndex, attribute))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layers)
