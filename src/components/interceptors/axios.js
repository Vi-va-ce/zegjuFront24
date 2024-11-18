import axios from "axios";
import Cookies from "js-cookie";
import { access_token } from "../FetchAccessToken";

axios.defaults.baseURL = 'https://zegeju-1453f.uc.r.appspot.com/api/';

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 || error.response.status === 500) {
      const refresh_token = Cookies.get('refresh_token');

      if (refresh_token) {
        const response= await axios.post('v4/student/refresh-token', { refresh_token });

        if (response.status === 200) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data}`;
          return axios(error.config);
        }
      }
    }

    return Promise.reject(error);
  }
);