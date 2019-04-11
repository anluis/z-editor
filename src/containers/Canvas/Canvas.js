import { connect } from 'react-redux'
import { updateCom, focusCom } from '@/actions/Coms'
import { updatePage } from '@/actions/Pages'
import Canvas from '@/components/Canvas/Canvas'

const mapStateToProps = (state) => {
  const currentPageId = state.mywork.present.status.page.current
  const currentPageItem = state.mywork.present.pageList.find(item => item.id === currentPageId)
  return {
    comList: state.mywork.present.comList.filter(item =>
      state.mywork.present.pageList.find(
        e => e.id === state.mywork.present.status.page.current
      ) === undefined
        ? []
        : state.mywork.present.pageList
          .find(e => e.id === state.mywork.present.status.page.current)
          .order.includes(item.id)
    ),
    currentCom: state.mywork.present.pageList.find(
      e => e.id === state.mywork.present.status.page.current
    ).order,
    currentPage: currentPageId,
    currentPageItem: currentPageItem
  }
}

const mapDispatchToProps = dispath => ({
  updateCom: (id, style, context) => {
    dispath(updateCom(id, style, context))
  },
  focusCom: id => {
    dispath(focusCom(id))
  },
  updatePage: (id, pageItem) => {
    dispath(updatePage(id, pageItem))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas)
