import { combineReducers } from 'redux'
import comsReducer from './comsReducer'
import pagesReducer from './pagesReducer'

export default combineReducers({
  comsReducer,
  pagesReducer
})