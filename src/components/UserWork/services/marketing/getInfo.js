import axios from 'axios'

const MARKETING_API = 'http://sapi.xingstation.com/api'
const PLAY_RESULT_API = '/open/play/playResults/'
const IMAGE_API = 'http://exelook.com:8010/goodsxsd/?api=json&id='

const getPlayResultById = id => {
  return new Promise((resolve, reject) => {
    axios
      .get(MARKETING_API + PLAY_RESULT_API + id)
      .then(res => {
        if (res.data.success) {
          resolve(res.data.data)
        } else {
          reject(res.data.message)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

const getInfoById = id => {
  let promise = new Promise((resolve, reject) => {
    axios
      .get(IMAGE_API + id)
      .then(response => {
        resolve(response.data.results)
      })
      .catch(err => {
        reject(err)
      })
  })
  return promise
}

export { getPlayResultById, getInfoById }
