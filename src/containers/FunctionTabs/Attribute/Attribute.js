import { connect } from 'react-redux'
import { updateCom, deleteCom } from '../../../actions/Coms'
import Attribute from '../../../components/FunctionTabs/Attribute/Attribute'

const mapStateToProps = state => ({
  focusCom: state.present.comList.find(
    com => com.id === state.present.status.com.current
  ),
  status: state.present.status
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
