import { connect } from 'react-redux'
import { updateCom, focusCom } from '../../actions/Coms'
import Canvas from '../../components/Canvas/Canvas'

const mapStateToProps = state => ({
  comList: state.present.comList.filter(
    item =>
      state.present.pageList.find(
        e => e.id === state.present.status.page.current
      ) === undefined
        ? []
        : state.present.pageList
            .find(e => e.id === state.present.status.page.current)
            .order.includes(item.id)
  ),
  currentCom: state.present.pageList.find(
    e => e.id === state.present.status.page.current
  ).order,
  currentPage: state.present.status.page.current
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
