import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import work from './work/workReducer'
import workList from './workList/workListReducer'

const rootReducer = combineReducers({
  work: undoable(work),
  workList
})

export default rootReducer