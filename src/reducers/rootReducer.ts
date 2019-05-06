import { combineReducers, Reducer } from 'redux'
// import { undoable } from './undoable'
// import workReducer from './work/workReducer'
import work from './work/workReducer'
import auth from './auth/authReducer'
import status from './status/statusReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const authPersistConfig = {
  key: 'auth',
  storage: storage,
}

const workPersistConfig = {
  key: 'work',
  storage: storage,
}

// const work = undoable(workReducer)
const rootReducer = combineReducers({
  work: persistReducer(workPersistConfig, work),
  auth: persistReducer(authPersistConfig, auth),
  status: status as Reducer
})
export default rootReducer