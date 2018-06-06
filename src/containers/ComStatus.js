// 组件状态
import { connect } from 'react-redux'
import ComStatus from '../components/ComStatus'

const getCurrentCom = coms => {
  return coms.filter(com => com.beSelected === true)
}

const mapStateToProps = state => ({
  coms: getCurrentCom(state.coms)
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComStatus)
