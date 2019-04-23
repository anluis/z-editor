import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { setLoading, setErrorMessage } from '../actions/status'
import { signIn } from '../apis/authorizations'
import { UPDATE_AUTH, DELETE_AUTH } from '../constants/ActionTypes';

export const updateAuth = (accessToken: string) => ({
  type: UPDATE_AUTH,
  accessToken
})

export const deleteAuth = () => ({
  type: DELETE_AUTH
})

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