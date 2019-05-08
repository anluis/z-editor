import axios from 'axios'
import { apiUrl } from '../../constants/base';
import { accessToken } from '../../utils/getters/auth';

interface Args {
  workId: string
  workPage: number
}

export const work = (args: Args) => {
  const url = apiUrl + '/works/' + args.workId
  const params = {
    params: {
      ...args,
      headers: {
        Authorization: accessToken()
      }
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
}

export default work
