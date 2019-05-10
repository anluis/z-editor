import { combineReducers, Reducer } from 'redux'
// import { undoable } from './undoable'
// import workReducer from './work/workReducer'
import workReducer from './work/workReducer'
import statusReducer from './status/statusReducer';
import auth from './auth/authReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import undoable, { includeAction, groupByActionTypes } from 'redux-undo'
import UndoTypes from '../constants/UndoTypes'

const authPersistConfig = {
  key: 'auth',
  storage: storage,
}

const workPersistConfig = {
  key: 'work',
  storage: storage,
}

const statusPersistConfig = {
  key: 'status',
  storage: storage
}

const work = undoable(workReducer, {
  undoType: 'UNDO',
  redoType: 'REDO',
  limit: 10,
  filter: includeAction(UndoTypes)
})

const status = undoable(statusReducer, {
  undoType: 'UNDO',
  redoType: 'REDO',
  limit: 10,
  filter: includeAction(UndoTypes)
})

const rootReducer = combineReducers({
  work: persistReducer(workPersistConfig, work),
  auth: persistReducer(authPersistConfig, auth),
  status: persistReducer(statusPersistConfig, status)
})
export default rootReducer