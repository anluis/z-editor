import { apiUrl } from '../../constants/base';
import axios from 'axios';
import { accessToken } from '../../utils/getters/auth';

interface SignInArgs {
  username: string;
  password: string;
}

const signIn = (payload: SignInArgs) => {
  const requestUrl = `${apiUrl}/authorizations`;
  const requestParams = {
    username: payload.username,
    password: payload.password,
  };
  return new Promise<any>((resolve, reject) => {
    axios
      .post(requestUrl, requestParams)
      .then((r) => resolve(r))
      .catch((e) => reject(e));
  });
};

const signOut = () => {
  const requestUrl = `${apiUrl}/authorizations/current`;
  const params = {
    headers: {
      Authorization: accessToken(),
    },
  };
  return new Promise<any>((resolve, reject) => {
    axios
      .delete(requestUrl, params)
      .then((r) => resolve(r))
      .catch((e) => reject(e));
  });
};

export { signIn, signOut };
