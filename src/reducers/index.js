import { combineReducers } from 'redux'
import status from './status/status'
import comList from './comList/comList'
import pageList from './pageList/pageList'
export default combineReducers({
  status,
  comList,
  pageList
})
