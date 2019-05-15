import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { setLoading, setErrorMessage } from '../actions/status'
import { signIn } from '../apis/authorizations'
import { UPDATE_AUTH, DELETE_AUTH, SET_WECHAT_SHARE_URL } from '../constants/ActionTypes';
import { SetWechatShareUrl, UpdateAuth, DeleteAuth } from '../types/auth';

export const updateAuth = (accessToken: string): UpdateAuth => ({
  type: UPDATE_AUTH,
  accessToken
})

export const deleteAuth = (): DeleteAuth => ({
  type: DELETE_AUTH
})

export const setWxShareUrl = (url: string): SetWechatShareUrl => {
  return {
    type: SET_WECHAT_SHARE_URL,
    url
  }
}

export const login = (username: string, password: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      dispatch(setLoading(true))
      const signInResult = await signIn({ username, password })
      if (signInResult.data.access_token) {
        dispatch(updateAuth(signInResult.data.access_token))
      }
      dispatch(setLoading(false))
    } catch (err) {
      const { message } = err.response.data
      alert(message)
      dispatch(setErrorMessage(message))
      dispatch(setLoading(false))
    }
  }
}

export const logout = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      dispatch(setLoading(true))
      dispatch(deleteAuth())
      dispatch(setLoading(false))
    } catch (err) {
      dispatch(setLoading(false))
    }
  }
}