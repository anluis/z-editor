import {
  FOCUS_COM,
  UPDATE_COM_ZINDEX,
  ADD_COM,
  DELETE_COM,
  UPDATE_PAGE_ORDER,
  ADD_PAGE,
  FOCUS_PAGE
} from '../../constants/ActionTypes'
import { arrayMove } from 'react-sortable-hoc'
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
    case ADD_COM:
      return {
        ...state,
        com: {
          order: state.com.order.concat([action.id])
        }
      }
    case DELETE_COM:
      return {
        ...state,
        com: {
          order: state.com.order.filter(item => item !== action.id)
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
    case UPDATE_PAGE_ORDER:
      return {
        ...state,
        ...{
          page: {
            order: arrayMove(state.page.order, action.oldIndex, action.newIndex)
          }
        }
      }
    case ADD_PAGE:
      return {
        ...state,
        ...{
          page: {
            order: state.page.order.concat([action.id]),
            current: action.id
          },
          com: {
            order: [],
            current: null
          }
        }
      }
    case FOCUS_PAGE:
      return {
        ...state,
        ...{
          com: {
            order: state.pageList.find(e => e.id === action.id).order,
            // comOrder should not calculate here
            current: null
          },
          page: {
            order: state.page.order,
            current: action.id
          }
        }
      }
    default:
      return state
  }
}

export default status
