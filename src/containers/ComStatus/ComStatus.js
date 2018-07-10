// 组件状态
import { connect } from 'react-redux'
import { updateCom } from '../../actions'
import ComStatus from '../../components/ComCollections/ComStatus'

const mapStateToProps = state => ({
  currentCom: state.coms[state.comstatus]
})

const mapDispatchToProps = dispath => {
  return {
    updateCom: (id, style, context) => {
      dispath(updateCom(id, style, context))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComStatus)
