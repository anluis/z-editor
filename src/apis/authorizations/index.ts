import { apiUrl } from '../../constants/base'
import axios from 'axios'

interface SignInArgs {
  username: string
  password: string
}

const login = (payload: SignInArgs) => {
  const requestUrl = `${apiUrl}/authorizations`
  const requestParams = {
    username: payload.username,
    password: payload.password
  }
  return new Promise<any>((resolve, reject) => {
    axios
      .post(requestUrl, requestParams)
      .then(r => resolve(r))
      .catch(e => reject(e))
  })
}

export { login }