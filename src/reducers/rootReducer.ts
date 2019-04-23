import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import work from './work/workReducer'
import auth from './auth/authReducer'
import status from './status/statusReducer'

const rootReducer = combineReducers({
  // work: undoable(work),
  work,
  status,
  auth
})

export default rootReducer