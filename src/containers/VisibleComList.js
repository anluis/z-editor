import { connect } from 'react-redux'
import ComList from '../components/ComList'

const getVisibleComs = (coms, filter) => {
  return coms
}

const mapStateToProps = state => ({
  coms: getVisibleComs(state.coms, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ComList)
