import { combineReducers } from 'redux'
import coms from './coms'
import comstatus from './comstatus'
import templateList from './templateList'
export default combineReducers({
  coms,
  comstatus,
  templateList
})
