import {
  FOCUS_COM,
  UPDATE_COM_ZINDEX,
  ADD_COM
} from '../../constants/ActionTypes'
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
    case ADD_COM:
      state.com.order.push(action.id)
      return state
    case FOCUS_COM:
      state.com.current = action.id
      return state
    case UPDATE_COM_ZINDEX:
      return {
        ...state,
        ...{
          com: {
            order: arrayMove(action.layers, action.oldIndex, action.newIndex)
          }
        }
      }
    default:
      return state
  }
}

export default status
