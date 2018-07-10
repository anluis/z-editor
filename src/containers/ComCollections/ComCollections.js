import { connect } from 'react-redux'
import ComCollections from '../../components/ComCollections/ComCollections'

const mapStateToProps = state => ({
  coms: state.coms
})

export default connect(mapStateToProps)(ComCollections)
