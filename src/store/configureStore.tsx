import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import thunkMiddleware from "redux-thunk";
import rootReducer from '../reducers/rootReducer'
// redux devtool的额外插件
import { composeWithDevTools } from 'redux-devtools-extension'

export const store =
  process.env.NODE_ENV === 'production' ?
    createStore(rootReducer, applyMiddleware(thunkMiddleware)) :
    createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
export const persistor = persistStore(store) // 包装store 这个也export
