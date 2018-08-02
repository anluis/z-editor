import { connect } from 'react-redux'
import { updateCom } from '../../../actions'
import Attribute from '../../../components/FunctionTabs/Attribute/Attribute'

const mapStateToProps = state => ({
  status: state.status
})

const mapDispatchToProps = dispatch => {
  return {
    updateCom: (id, attribute) => {
      dispatch(updateCom(id, attribute))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Attribute)
