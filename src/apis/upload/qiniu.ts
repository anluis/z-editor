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



export const saveImgToQiniu = (args: any) => {
  return new Promise(function (resolve, reject) {
    axios
      .post('http://upload.qiniu.com', args)
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