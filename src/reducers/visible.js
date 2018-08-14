export function visible() {
  const initState = {
    modal: {
      visible: false
    }
  }

  return function(state = initState, action) {
    switch (action.type) {
      case 'VISIBLE':
        return {
          ...state,
          modal: {
            visible: action.visible
          }
        }
      default:
        return state
    }
  }
}
