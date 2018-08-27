import { combineReducers } from 'redux'
import { undoable } from './undoable'
import work from './work/work'
import workList from './workList/workList'
const mywork = undoable(work)
export default combineReducers({
  mywork,
  workList
})
