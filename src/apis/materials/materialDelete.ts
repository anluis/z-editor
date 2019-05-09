import axios from 'axios'
import { apiUrl } from '../../constants/base';
import { accessToken } from '../../utils/getters/auth';

interface MaterialDeleteArgs {
  _id: string
}

const materialDelete = (args: MaterialDeleteArgs) => {
  const url = apiUrl + '/materials/' + args._id
  const params = {
    headers: {
      Authorization: accessToken()
    }
  }
  return new Promise((resolve, reject) => {
    axios.delete(url, params).then(r => resolve(r)).catch(e => reject(e))
  })
}

export default materialDelete