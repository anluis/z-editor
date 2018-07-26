import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

const initialStore = {
  status: {
    page: {
      order: [0],
      current: 0
    },
    com: {
      order: [],
      current: null
    }
  },
  pageList: [
    {
      id: 0
    }
  ],
  comList: [
    {
      id: 0,
      attribute: {}
    }
  ]
}

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const store = createStore(rootReducer, initialStore, applyMiddleware(logger))

export default store
