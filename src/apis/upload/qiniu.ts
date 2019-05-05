import axios from 'axios'
import { apiUrl } from '../../constants/base';

export interface getQiniuTokenArgs {
  Authorization: string
}

export const getQiniuToken = (args: getQiniuTokenArgs) => {
  return new Promise((resolve, reject) => {
    const url = apiUrl + '/templets/works/'
    const params = {
      headers: {
        Authorization: args.Authorization
      }
    }
    return new Promise((resolve, reject) => {
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
  })
}

export interface saveImgToQiniuArgs {

}

export const saveImgToQiniu = (args: saveImgToQiniuArgs) => {
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