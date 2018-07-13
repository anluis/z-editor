// 左侧模版列表
import { connect } from 'react-redux'
import TemplateList from '../components/TemplateList'
import {
  fetchTemplateListBegin,
  fetchTemplateListSuccess,
  fetchTemplateListFailure
} from '../../actions'

const mapStateToProps = state => ({
  temps: state.items
})

const mapDispatchToProps = dispatch => {
  return {
    fetchTemplateListBegin: () => {
      dispatch(fetchTemplateListBegin())
    },
    fetchTemplateListSuccess: items => {
      dispatch(fetchTemplateListSuccess(items))
    },
    fetchTemplateListFailure: error => {
      dispatch(fetchTemplateListFailure(error))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateList)
