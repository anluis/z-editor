import { UPDATE_AUTH, DELETE_AUTH } from '../constants/ActionTypes'
export interface AuthState {
  accessToken: string
  isAuthenticated: boolean
}

export interface UpdateAuth {
  type: typeof UPDATE_AUTH,
  accessToken: string
}

export interface DeleteAuth {
  type: typeof DELETE_AUTH
}

export type AuthAction = UpdateAuth | DeleteAuth