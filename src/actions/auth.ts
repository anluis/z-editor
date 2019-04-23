import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { setLoading } from '../actions/status'
import { signIn } from '../apis/authorizations'
import { UPDATE_AUTH } from '../constants/ActionTypes';

export const updateAuth = (accessToken: string) => ({
  type: UPDATE_AUTH,
  accessToken
})

export const login = (username: string, password: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      dispatch(setLoading(true))
      const signInResult = await signIn({ username, password })
      console.dir(signInResult)
      if (signInResult.data.access_token) {
        dispatch(updateAuth(signInResult.data.access_token))
      }
      dispatch(setLoading(false))
    } catch (err) {
      dispatch(setLoading(false))
    }
  }
}