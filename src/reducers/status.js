import { FOCUS_COM } from '../constants/ActionTypes'

const initState = {
  page: {
    order: [0],
    current: 0
  },
  com: {
    order: [],
    current: null
  }
}

const status = (state = initState, action) => {
  switch (action.type) {
    case FOCUS_COM:
      state.com.current = action.id
      return state
    default:
      return state
  }
}

export default status
