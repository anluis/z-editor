import { ADD_COM, DELETE_COM, UPDATE_COM } from '../../constants/ActionTypes'

// 初始状态
const initState = []

//所有组件状态
const updateObjectInArray = (array, action) => {
  return array.map((item, index) => {
    if (index !== action.id) {
      return item
    }
    return {
      ...item,
      ...action
    }
  })
}

// 组件Reducer
const comList = (state = initState, action) => {
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
      return state.filter(com => com.id !== action.comIdToDelete)
    case UPDATE_COM:
      return updateObjectInArray(state, action)
    default:
      return state
  }
}

export default comList
