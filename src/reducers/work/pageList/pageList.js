// @flow
import {
  UPDATE_COM_ZINDEX,
  ADD_PAGE,
  ADD_COM,
  DELETE_COM,
  UPDATE_PAGE_ORDER,
  EDIT_PAGE_SETTINGS,
  DELETE_PAGE,
  UPDATE_PAGE
} from '@/constants/ActionTypes'
import { arrayMove } from 'react-sortable-hoc'

type State = Array<Object>
type Action =
  | UPDATE_COM_ZINDEX
  | ADD_PAGE
  | ADD_COM
  | DELETE_COM
  | UPDATE_PAGE_ORDER
  | EDIT_PAGE_SETTINGS
  | UPDATE_PAGE

const initStateItem = {
  id: 0,
  order: [],
  settings: {
    visible: false,
    payload: {
      name: '页面-0',
      size: {
        width: 375,
        height: 667
      }
    }
  }
}

const initState = [
  initStateItem
]

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

const editPageSettingsById = (array: Array<Object>, action: Action): State => {
  return array.map(item => {
    if (item.id !== action.targetPageId) {
      return item
    }
    return {
      ...item,
      settings: {
        visible: action.visible,
        payload: action.payload
      }
    }
  })
}

const updatePage = (array: Array<Object>, action: Action): S => {
  return array.map(item => {
    if (item.id === action.targetPageId) {
      return {
        ...item,
        ...action.payload
      }
    } else {
      return item
    }
  })
}

const addPage = (pageList: Array<Object>, action: Action): S => {
  let pageItemCopy = { ...initStateItem }
  pageItemCopy.id = action.id
  console.log(pageItemCopy)
  let pageListCopy = [...pageList]
  pageListCopy = [...pageListCopy, pageItemCopy]
  console.log(pageListCopy)
  return pageListCopy
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
      return addPage(state, action)
    case UPDATE_PAGE:
      return updatePage(state, action)
    case UPDATE_PAGE_ORDER:
      return arrayMove(state, action.oldIndex, action.newIndex)
    case EDIT_PAGE_SETTINGS:
      return editPageSettingsById(state, action)
    case DELETE_PAGE:
      return state.filter(com => com.id !== action.id)
    default:
      return state
  }
}

export default pageList
