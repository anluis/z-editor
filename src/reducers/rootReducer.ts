import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import work from './work/workReducer'
import auth from './auth/authReducer'

const rootReducer = combineReducers({
  work: undoable(work),
  auth
})

export default rootReducer