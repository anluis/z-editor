// @flow
import { ADD_COM, DELETE_COM, UPDATE_COM } from '../../../constants/ActionTypes'

type Action = ADD_COM | DELETE_COM | UPDATE_COM
type State = Array<Object>
// 初始状态
const initState = []

//所有组件状态
const updateObjectInArray = (
  array: Array<Object>,
  action: Object
): Array<Object> => {
  return array.map(item => {
    if (item.id !== action.id) {
      return item
    }
    return {
      ...item,
      ...action
    }
  })
}

// 组件Reducer
const comList = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case ADD_COM:
      return [
        ...state,
        {
          id: action.id,
          attribute: action.attribute
        }
      ]
    case DELETE_COM:
      return state.filter(com => com.id !== action.id)
    case UPDATE_COM:
      return updateObjectInArray(state, action)
    default:
      return state
  }
}

export default comList
