import { connect } from 'react-redux'
import { updateCom, focusCom } from '../../actions'
import ComCollections from '../../components/ComCollections/ComCollections'

const mapStateToProps = state => ({
  coms: state.coms
})

const mapDispatchToProps = dispath => {
  return {
    updateCom: (id, style, context) => {
      dispath(updateCom(id, style, context))
    },
    focusCom: id => {
      dispath(focusCom(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComCollections)
