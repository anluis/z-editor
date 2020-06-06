import {
  UPDATE_AUTH,
  DELETE_AUTH,
  SET_WECHAT_SHARE_URL,
} from '../constants/ActionTypes';
export interface AuthState {
  accessToken: string;
  isAuthenticated: boolean;
  wechatShareUrl: string;
}

export interface UpdateAuth {
  type: typeof UPDATE_AUTH;
  accessToken: string;
}

export interface DeleteAuth {
  type: typeof DELETE_AUTH;
}

export interface SetWechatShareUrl {
  type: typeof SET_WECHAT_SHARE_URL;
  url: string;
}

export type AuthAction = UpdateAuth | DeleteAuth | SetWechatShareUrl;
