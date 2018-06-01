const comstatus = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ID':
      return {
        style: {
          ...action.style
        },
        id: action.id
      }
    default:
      return state
  }
}

export default comstatus
