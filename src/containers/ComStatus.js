// 组件状态
import { connect } from 'react-redux'
import ComStatus from '../components/ComStatus'

const mapStateToProps = state => ({
  currentCom: state.coms[state.comstatus]
})

export default connect(mapStateToProps)(ComStatus)
