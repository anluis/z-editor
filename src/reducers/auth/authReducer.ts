import { AuthState, AuthAction } from '../../types/auth';
import {
  UPDATE_AUTH,
  DELETE_AUTH,
  SET_WECHAT_SHARE_URL,
} from '../../constants/ActionTypes';

type Action = AuthAction;

type State = AuthState;

const initState: AuthState = {
  accessToken: '',
  isAuthenticated: process.env.NODE_ENV === 'development' ? true : false,
  wechatShareUrl: '',
};

const authReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case UPDATE_AUTH:
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.accessToken,
      };
    case DELETE_AUTH:
      return initState;
    case SET_WECHAT_SHARE_URL:
      return {
        ...state,
        wechatShareUrl: action.url,
      };
    default:
      return state;
  }
};

export default authReducer;
