import { combineReducers } from 'redux'
import comsReducer from './comsReducer'
import pagesReducer from './pagesReducer'
import statusReducer from './statusReducer'

export default combineReducers({
  comsReducer,
  pagesReducer,
  statusReducer
})