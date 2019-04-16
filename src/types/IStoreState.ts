interface IStoreState {
  auth: {
    readonly accessToken: string
    readonly isFetching: boolean
    readonly isAuthenticated: boolean
  }
}

export default IStoreState