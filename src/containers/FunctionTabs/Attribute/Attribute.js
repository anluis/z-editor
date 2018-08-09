import { connect } from 'react-redux'
import { updateCom, deleteCom } from '../../../actions/Coms'
import Attribute from '../../../components/FunctionTabs/Attribute/Attribute'

const mapStateToProps = state => ({
  focusCom: state.comList.find(
    com => com.id === state.status.present.com.current
  ),
  status: state.status
})

const mapDispatchToProps = dispatch => ({
  updateCom: (id, attribute) => {
    dispatch(updateCom(id, attribute))
  },
  deleteCom: (id, targetPageId) => {
    dispatch(deleteCom(id, targetPageId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Attribute)
