import { connect } from 'react-redux'
import Pages from '../../components/Pages/Pages'
import addPage from '../../actions'

const mapStateToProps = state => ({
  pages: state.pages
})

const mapDispatchToProps = dispatch => {
  return {
    addPage: () => {
      dispatch(addPage())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages)
