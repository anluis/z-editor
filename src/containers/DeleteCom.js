import { connect } from 'react-redux'
import DeleteCom from '../components/DeleteCom'

const mapStateToProps = state => ({
  currentCom: state.coms[state.comstatus]
})

export default connect(mapStateToProps)(DeleteCom)
