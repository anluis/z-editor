export function visible() {
  const initState = {
    modal: {
      visible: false
    }
  }

  return function(state = initState, action) {
    console.log(action)
    console.log(state)
    switch (action.type) {
      case 'VISIBLE':
        state.modal.visible = action.visible
        return state
      default:
        return state
    }
  }
}
