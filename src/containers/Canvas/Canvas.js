import { connect } from 'react-redux'
import { updateCom, focusCom } from '../../actions/Coms'
import Canvas from '../../components/Canvas/Canvas'

const mapStateToProps = state => ({
  comList: state.comList.filter(
    item =>
      state.pageList.find(e => e.id === state.status.page.current) === undefined
        ? []
        : state.pageList
            .find(e => e.id === state.status.page.current)
            .order.includes(item.id)
  ),
  currentCom: state.status.com.order
})

const mapDispatchToProps = dispath => ({
  updateCom: (id, style, context) => {
    dispath(updateCom(id, style, context))
  },
  focusCom: id => {
    dispath(focusCom(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas)
