import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'

const logger = createLogger()

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

const store = createStore(rootReducer, initialStore, applyMiddleware(logger))

export default store
