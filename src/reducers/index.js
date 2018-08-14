import { combineReducers } from 'redux'
import { undoable } from './undoable'
import { visible } from './visible'
import work from './work/work'
import workList from './workList/workList'
const mywork = undoable(work)
const model = visible()
export default combineReducers({
  mywork,
  model,
  workList
})
