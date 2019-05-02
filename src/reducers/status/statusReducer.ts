import { StatusAction, StatusState } from '../../types/status'
import {
  SET_CURRENT_COM_ID,
  SET_LOADING_STATUS,
  SET_ERROR_MESSAGE,
  FOCUS_COM,
  DELETE_COM,
  ADD_COM,
  SET_DIALOG_STATUS,
  ADD_PAGE,
  DELETE_PAGE,
  FOCUS_PAGE
} from '../../constants/ActionTypes';
import { ComAction } from '../../types/coms';
import { PageAction } from '../../types/pages';

type Action = StatusAction | ComAction | PageAction

type State = StatusState

const initState: State = {
  currentPageId: 0,
  currentComId: 0,
  isLoading: false,
  errorMessage: '',
  dialogShow: false
}

const statusReducer = (state: State = initState, action: Action): State => {
  console.log(action)
  switch (action.type) {
    case SET_CURRENT_COM_ID:
      return state
    case SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message
      }
    case FOCUS_COM:
      return {
        ...state,
        currentComId: action.id
      }
    case DELETE_COM:
      return {
        ...state,
        currentComId: null
      }
    case ADD_COM:
      return {
        ...state,
        currentComId: action.com.id
      }
    case SET_DIALOG_STATUS:
      return {
        ...state,
        dialogShow: action.status
      }
    case ADD_PAGE:
      return {
        ...state,
        currentPageId: action.page.id
      }
    case DELETE_PAGE:
      return {
        ...state,
        currentComId: null,
        currentPageId: action.nextPageId
      }
    case FOCUS_PAGE:
      return {
        ...state,
        currentPageId: action.id
      }
    default:
      return state
  }
}

export default statusReducer