import axios from 'axios';
import { apiUrl } from '../../constants/base';
import { accessToken } from '../../utils/getters/auth';

interface Args {
  workId: string;
  workPage: number;
}

export const workPreview = (args: Args) => {
  const url = apiUrl + '/works/preview/' + args.workId;
  const params = {
    // headers: {
    //   Authorization: accessToken()
    // },
    params: {
      workPage: args.workPage,
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then((r) => {
        resolve(r);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export default workPreview;
