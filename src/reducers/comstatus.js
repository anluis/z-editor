const comstatus = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ID':
      return action
    default:
      return state
  }
}

export default comstatus
