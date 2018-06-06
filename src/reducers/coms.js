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
    case 'ADD_COM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          style: action.style,
          beSelected: true
        }
      ]
    case 'DELETE_COM':
      return state.filter(com => com.id !== action.comIdToDelete)
    case 'RESIZE_COM':
      return updateObjectInArray(state, action)
    case 'DRAG_COM':
      return updateObjectInArray(state, action)
    case 'CHANGE_CURRENT_NAME':
      return updateObjectInArray(state, action)
    default:
      return state
  }
}
export default coms
