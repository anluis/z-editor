import {
  UPDATE_COM_ZINDEX,
  ADD_PAGE,
  ADD_COM,
  DELETE_COM,
  UPDATE_PAGE_ORDER
} from '../../constants/ActionTypes'
import { arrayMove } from 'react-sortable-hoc'
const initState = [{ id: 0, name: '页面0', order: [] }]

const addIdInPageItem = (array, action) => {
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

const updateOrderInPageItem = (array, action) => {
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

const deleteIdInPageItem = (array, action) => {
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

const pageList = (state = initState, action) => {
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
