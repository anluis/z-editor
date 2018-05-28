import { connect } from 'react-redux'
import comstatus from '../components/ComStatus'

const getCurrentCom = coms => {
  return coms
}

const mapStateToProps = state => ({
  coms: getCurrentCom(state.comstatus)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(comstatus)
