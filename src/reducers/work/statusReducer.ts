type State = {}

const initState = {}

type Action = StatusActions

const statusReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    default:
      return state
  }
}

export default statusReducer