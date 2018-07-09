import { ADD_COM, DELETE_COM, UPDATE_COM } from '../constants/ActionTypes'

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

const coms = (state = [], action) => {
  switch (action.type) {
    case ADD_COM:
      return [
        ...state,
        {
          id: action.id,
          context: action.context,
          style: action.style
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

export default coms
