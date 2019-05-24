import { combineReducers } from 'redux'
import workReducer from './work/workReducer'
import statusReducer from './status/statusReducer';
import auth from './auth/authReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import undoable from 'redux-undo'

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
})

const rootReducer = combineReducers({
  work: persistReducer(workPersistConfig, work),
  auth: persistReducer(authPersistConfig, auth),
  status: persistReducer(statusPersistConfig, statusReducer),
})
export default rootReducer