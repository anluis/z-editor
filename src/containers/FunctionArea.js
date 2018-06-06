// 顶部功能区域
import { connect } from 'react-redux'
import FuctionBar from '../components/FunctionBar'

const FunctionArea = () => {}

const mapStateToProps = state => ({
  functions: FunctionArea
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FuctionBar)
