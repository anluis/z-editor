import { connect } from 'react-redux'
import { updateCom, focusCom } from '../../actions'
import Canvas from '../../components/Canvas/Canvas'

const mapStateToProps = state => ({
  comList: state.comList
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
)(Canvas)
