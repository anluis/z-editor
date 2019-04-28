import axios from 'axios'
import { apiUrl } from '../../constants/base';

interface templatesArgs {
  page: number
  perPage: number
  Authorization: string
}

const templates = (args: templatesArgs) => {
  const url = apiUrl + '/templets/works/'
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

export default templates