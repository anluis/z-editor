const coms = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    default:
      return state
  }
}
export default coms
