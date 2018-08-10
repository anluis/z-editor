import rootReducer from '../reducers'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { undoable } from '../reducers/undoable'

const logger = createLogger()

const undoableRoot = undoable(rootReducer)

const store = createStore(undoableRoot, applyMiddleware(logger))

export default store
