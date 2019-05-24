import { combineReducers } from 'redux'
import workReducer from './work/workReducer'
import statusReducer from './status/statusReducer';
import auth from './auth/authReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import undoable, { excludeAction } from 'redux-undo'
import { SET_MATERIAL_DIALOG_STATUS, SET_MATERIAL_CHOOSEN_COM, FOCUS_COM } from '../constants/ActionTypes';

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
  limit: 10
  // filter: excludeAction([SET_MATERIAL_DIALOG_STATUS, SET_MATERIAL_CHOOSEN_COM])
})

const status = undoable(statusReducer, {
  undoType: 'UNDO',
  redoType: 'REDO',
  limit: 10,
  filter: excludeAction([SET_MATERIAL_DIALOG_STATUS, SET_MATERIAL_CHOOSEN_COM, FOCUS_COM])
})

const rootReducer = combineReducers({
  work: persistReducer(workPersistConfig, work),
  auth: persistReducer(authPersistConfig, auth),
  status: persistReducer(statusPersistConfig, statusReducer),
})
export default rootReducer