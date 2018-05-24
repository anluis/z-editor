const updateObjectInArray = (array, action) => {
  return array.map((item, index) => {
    if (index !== action.index) {
      return item
    }
    return {
      ...item,
      ...action.item
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
          style: action.style
        }
      ]
    case 'DELETE_COM':
      return state.filter(com => com.id !== action.comIdToDelete)
    case 'UPDATE_COM_STYLE':
      return updateObjectInArray(state, action)
    default:
      return state
  }
}
export default coms
