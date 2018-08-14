// @flow
import {
  UPDATE_COM_ZINDEX,
  ADD_PAGE,
  ADD_COM,
  DELETE_COM,
  UPDATE_PAGE_ORDER
} from '../../../constants/ActionTypes'
import { arrayMove } from 'react-sortable-hoc'

type State = Array<Object>
type Action =
  | UPDATE_COM_ZINDEX
  | ADD_PAGE
  | ADD_COM
  | DELETE_COM
  | UPDATE_PAGE_ORDER

const initState = [{ id: 0, name: '页面0', order: [] }]

const addIdInPageItem = (array: Array<Object>, action: Action): State => {
  return array.map(item => {
    if (item.id !== action.targetPageId) {
      return item
    }
    return {
      ...item,
      order: item.order.concat([action.id])
    }
  })
}

const updateOrderInPageItem = (array: Array<Object>, action: Action): State => {
  return array.map(item => {
    if (item.id !== action.targetPageId) {
      return item
    }
    return {
      ...item,
      order: arrayMove(item.order, action.oldIndex, action.newIndex)
    }
  })
}

const deleteIdInPageItem = (array: Array<Object>, action: Action): State => {
  return array.map(item => {
    if (item.id !== action.targetPageId) {
      return item
    }
    return {
      ...item,
      order: item.order.filter(item => item !== action.id)
    }
  })
}

const pageList = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case ADD_COM:
      return addIdInPageItem(state, action)
    case DELETE_COM:
      return deleteIdInPageItem(state, action)
    case UPDATE_COM_ZINDEX:
      return updateOrderInPageItem(state, action)
    case ADD_PAGE:
      return [
        ...state,
        {
          id: action.id,
          name: '新页面' + action.id,
          order: []
        }
      ]
    case UPDATE_PAGE_ORDER:
      return arrayMove(state, action.oldIndex, action.newIndex)
    default:
      return state
  }
}

export default pageList
