import axios from 'axios'
import { apiUrl } from '../../constants/base';

interface Args {
  page: number
  perPage: number
  Authorization: string
}

const materials = (args: Args) => {
  const url = apiUrl + '/materials/'
  const params = {
    headers: {
      Authorization: args.Authorization
    },
    params: {
      page: args.page,
      perPage: args.perPage,
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

export default materials