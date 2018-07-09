import { connect } from 'react-redux'
import ComList from '../components/ComList'

const mapStateToProps = state => ({
  coms: state.coms
})

export default connect(mapStateToProps)(ComList)
