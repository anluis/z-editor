import { StatusActions, Status } from '../../types/status'

type State = Status

const initState: State = {
  currentPageId: 0,
  currentComId: 0
}

type Action = StatusActions

const statusReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    default:
      return state
  }
}

export default statusReducer