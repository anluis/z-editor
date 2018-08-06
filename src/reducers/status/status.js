import { FOCUS_COM, UPDATE_COM_ZINDEX } from '../../constants/ActionTypes'
import { arrayMove } from 'react-sortable-hoc'
const initState = {
  page: {
    order: [],
    current: 0
  },
  com: {
    order: [1, 2, 3],
    current: null
  }
}

const status = (state = initState, action) => {
  switch (action.type) {
    case FOCUS_COM:
      state.com.current = action.id
      return state
    case UPDATE_COM_ZINDEX:
      let newOrder = arrayMove(action.layers, action.oldIndex, action.newIndex)
      let newState = {
        com: {
          order: newOrder
        }
      }
      let mergedState = {
        ...state,
        ...newState
      }
      return mergedState
    default:
      return state
  }
}

export default status
