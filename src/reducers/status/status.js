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
    order: [],
    current: null
  }
}

const status = (state = initState, action) => {
  switch (action.type) {
    case ADD_COM:
      return {
        ...state,
        com: {
          order: state.com.order.concat([action.id])
        }
      }
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
