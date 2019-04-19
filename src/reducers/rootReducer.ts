import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import work from './work/workReducer'

const rootReducer = combineReducers({
  work: undoable(work)
})

export default rootReducer