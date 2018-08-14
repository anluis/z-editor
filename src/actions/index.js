import './Coms'
import './Pages'
import './TemplateList'
import * as types from '../constants/ActionTypes'
export const undo = () => ({
  type: types.UNDO
})
export const redo = () => ({
  type: types.REDO
})
