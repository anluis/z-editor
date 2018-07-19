// 顶部功能区域
import { connect } from 'react-redux'
import { addCom } from '../../actions'
import TopBar from '../../components/TopBar/TopBar'

const defaultStyle = {
  height: 100,
  width: 100,
  x: 0,
  y: 0,
  imgUrl:
    'https://dn-coding-net-production-static.qbox.me/d4c0b468-29dd-4996-ae65-58a4b038fc39.JPG?imageMogr2/auto-orient/format/jpeg/crop/!538x538a0a0'
}

const defaultContext = {
  name: '新组件'
}

const mapStateToProps = state => ({
  coms: state.coms
})

const mapDispatchToProps = dispatch => {
  return {
    addCom: () => {
      dispatch(addCom(defaultStyle, defaultContext))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar)
