import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const store = createStore(rootReducer, applyMiddleware(logger))

export default store
