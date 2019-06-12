import axios from 'axios'
import { apiUrl } from '../../constants/base';
import { accessToken } from "../../utils/getters/auth";

interface userPatchArgs {
  name: string
  password: string
}

export const userPatch = (payload: userPatchArgs) => {
  const url = apiUrl + '/user'
  const config = {
    headers: {
      Authorization: accessToken()
    }
  }
  const params = {
    name: payload.name,
    password: payload.password
  }
  return new Promise((resolve, reject) => {
    axios.patch(url, params, config).then(r => resolve(r)).catch(e => reject(e))
  })
}