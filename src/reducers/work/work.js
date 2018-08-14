import { combineReducers } from 'redux'
import comList from './comList/comList'
import pageList from './pageList/pageList'
import status from './status/status'
export default combineReducers({
  status,
  comList,
  pageList
})
