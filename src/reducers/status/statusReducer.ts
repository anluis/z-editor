import { StatusAction, StatusState } from '../../types/status'
import { SET_CURRENT_COM_ID, SET_LOADING_STATUS } from '../../constants/ActionTypes';

type Action = StatusAction

type State = StatusState

const initState: State = {
  currentPageId: 0,
  currentComId: 0,
  isLoading: false
}

const statusReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case SET_CURRENT_COM_ID:
      return state
    case SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state
  }
}

export default statusReducer