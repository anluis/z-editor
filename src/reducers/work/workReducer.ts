import { combineReducers } from 'redux'
import coms from './comsReducer'
import pages from './pagesReducer'

export default combineReducers({
  coms,
  pages
})