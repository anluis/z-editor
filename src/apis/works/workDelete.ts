import { apiUrl } from '../../constants/base';
import axios from 'axios';
import { accessToken } from '../../utils/getters/auth';

export interface WorkDeleteArgs {
  _id: string;
}

const workDelete = (args: WorkDeleteArgs) => {
  const url = apiUrl + '/works/' + args._id;
  const params = {
    headers: {
      Authorization: accessToken(),
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .delete(url, params)
      .then((r) => resolve(r))
      .catch((e) => reject(e));
  });
};

export default workDelete;
