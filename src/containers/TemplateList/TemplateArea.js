// 左侧模版列表
import { connect } from 'react-redux'
import TemplateList from '../components/TemplateList'

const TemplateArea = () => {}

const mapStateToProps = state => ({
  temps: TemplateArea
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateList)
