import { StatusState, StatusAction } from '../../types/status';
import {
  SET_CURRENT_COM_ID,
  SET_LOADING_STATUS,
  SET_ERROR_MESSAGE,
  FOCUS_COM,
  DELETE_COM,
  ADD_COM,
  SET_MATERIAL_DIALOG_STATUS,
  ADD_PAGE,
  DELETE_PAGE,
  FOCUS_PAGE,
  SET_PAGE_SETTINGS_DIALOG_STATUS,
  SET_MATERIAL_CURRENT_VALUE,
  SET_MATERIAL_CHOOSEN_COM,
  SET_BASIC_DIALOG_STATUS,
  SET_LATEST_WORK_ID,
  APPLY_WORK,
  CREATE_WORK,
} from '../../constants/ActionTypes';
import { ComAction } from '../../types/coms';
import { PageAction } from '../../types/pages';

type Action = StatusAction | ComAction | PageAction;

type State = StatusState;

const initState: State = {
  currentPageId: 0,
  currentComId: 0,
  isLoading: false,
  errorMessage: '',
  isError: false,
  materialDialogShow: false,
  pageSettingDialogShow: false,
  choosenPageId: null,
  materialCurrentValue: 0,
  materialChoosenCom: null,
  basicDialogShow: false,
  basicDialogMessage: '',
  // latestWorkId: '5cc2d9356fac5400083a09c2',
  latestWorkId: null,
};

const statusReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case SET_CURRENT_COM_ID:
      return state;
    case SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message,
      };
    case FOCUS_COM:
      return {
        ...state,
        currentComId: action.id,
      };
    case DELETE_COM:
      return {
        ...state,
        currentComId: null,
      };
    case ADD_COM:
      return {
        ...state,
        currentComId: action.com.id,
      };
    case SET_MATERIAL_DIALOG_STATUS:
      return {
        ...state,
        materialDialogShow: action.status,
      };
    case ADD_PAGE:
      return {
        ...state,
        currentPageId: action.page.id,
      };
    case DELETE_PAGE:
      return {
        ...state,
        currentComId: null,
        currentPageId: action.nextPageId,
      };
    case FOCUS_PAGE:
      return {
        ...state,
        currentPageId: action.id,
      };
    case SET_PAGE_SETTINGS_DIALOG_STATUS:
      return {
        ...state,
        pageSettingDialogShow: action.status,
        choosenPageId: action.choosenPageId,
      };
    case SET_MATERIAL_CURRENT_VALUE:
      return {
        ...state,
        materialCurrentValue: action.value,
      };
    case SET_MATERIAL_CHOOSEN_COM:
      return {
        ...state,
        materialChoosenCom: action.com,
      };
    case SET_BASIC_DIALOG_STATUS:
      return {
        ...state,
        basicDialogMessage: action.basicDialogMessage,
        basicDialogShow: action.status,
      };
    case APPLY_WORK:
      return {
        ...state,
        latestWorkId: action.work._id ? action.work._id : null,
      };
    case CREATE_WORK:
      return {
        ...initState,
      };
    case SET_LATEST_WORK_ID:
      return {
        ...state,
        latestWorkId: action.id,
      };
    default:
      return state;
  }
};

export default statusReducer;
