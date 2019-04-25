import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import logger from 'redux-logger'
import thunkMiddleware from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers/rootReducer'
// redux devtool的额外插件
import { composeWithDevTools } from 'redux-devtools-extension'
// redux persist的配置
const persistConfig = {
  key: 'root',
  storage: storage,
  whiteList: ['auth', 'work']
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // 包装rootReducer
export const store =
  process.env.NODE_ENV === 'production' ?
    createStore(persistedReducer, applyMiddleware(thunkMiddleware)) :
    createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunkMiddleware), applyMiddleware(logger)))
export const persistor = persistStore(store) // 包装store 这个也export
