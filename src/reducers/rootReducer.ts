import { combineReducers } from 'redux'
// import { undoable } from './undoable'
// import workReducer from './work/workReducer'
import work from './work/workReducer'
import auth from './auth/authReducer'
import status from './status/statusReducer'
// const work = undoable(workReducer)
const rootReducer = combineReducers({
  work,
  status,
  auth
})
export default rootReducer