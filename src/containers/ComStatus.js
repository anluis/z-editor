import { connect } from 'react-redux'
import { setCurrentCom } from '../actions'
import { ComList } from '../components/ComList'

const getCurrentCom = (coms, filter) => {
  return coms
}

const mapStateToProps = state => ({
  coms: state.com
})

const mapDispatchToProps = dispatch => ({})
