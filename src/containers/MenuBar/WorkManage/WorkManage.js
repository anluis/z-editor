import { connect } from 'react-redux'
import {
  fetchWorksBegin,
  fetchWorksSuccess,
  fetchWorksFailure
} from '@/actions/WorkList'
import WorkManage from '@/components/MenuBar/WorkManage/WorkManage'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  fetchWorkBegin: () => {
    dispatch(fetchWorksBegin())
  },
  fetchWorkSuccess: () => {
    dispatch(fetchWorksSuccess())
  },
  fetchWorkFailure: () => {
    dispatch(fetchWorksFailure())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkManage)
