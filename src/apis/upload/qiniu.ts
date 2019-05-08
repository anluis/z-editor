import axios from 'axios'
import { apiUrl } from '../../constants/base';
import { accessToken } from '../../utils/getters/auth'

export const getQiniuToken = () => {
  return new Promise((resolve, reject) => {
    const url = apiUrl + '/qiniu_oauth'
    const params = {
      headers: {
        Authorization: accessToken()
      }
    }
    axios
      .get(url, params)
      .then(
        r => {
          resolve(r)
        }
      )
      .catch(e => {
        reject(e)
      })
  })
}

// save to the server
export const saveUploadResult = (args: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(apiUrl + '/media', args, { headers: { Authorization: accessToken() } })
      .then(r => {
        resolve(r)
      })
      .catch(e => {
        reject(e)
      })
  })
}