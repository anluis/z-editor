import { combineReducers } from 'redux'
import coms from './comsReducer'
import pages from './pagesReducer'
import settings from './settingsReducer'

export default combineReducers({
  coms,
  pages,
  settings
})