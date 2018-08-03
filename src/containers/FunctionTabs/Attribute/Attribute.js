import { connect } from 'react-redux'
import { updateCom } from '../../../actions'
import Attribute from '../../../components/FunctionTabs/Attribute/Attribute'

const mapStateToProps = state => ({
  focusCom: state.comList.find(com => com.id === state.status.com.current)
})

const mapDispatchToProps = dispatch => ({
  updateCom: (id, attribute) => {
    dispatch(updateCom(id, attribute))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Attribute)
