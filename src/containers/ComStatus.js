import { connect } from 'react-redux'
import comstatus from '../components/ComStatus'

const getCurrentCom = com => {
  return com
}

const mapStateToProps = state => ({
  com: getCurrentCom(state.comstatus)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(comstatus)
