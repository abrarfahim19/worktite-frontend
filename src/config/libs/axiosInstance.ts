import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
// import registerAxiosMockAdapter from './registerAxiosMockAdapter';
import { apiRoutes } from '../common/api-routes';
// import {userManager} from '../oidc/oidc';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: apiRoutes.API_BASE_SERVICE_PATH,
  timeout: 300000,
});
axiosInstance.defaults.headers.common['Accept'] = 'application/json';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use(
  // @ts-ignore
  async (config: AxiosRequestConfig) => {
    // const jwtAuth = await userManager.getUser();
    const jwtAuth = { access_token: 'sdf' };

    if (!config.headers) {
      config.headers = {};
    }

    const userAccessToken = jwtAuth?.access_token;
    if (!config.headers['Authorization'] && userAccessToken) {
      config.headers['Authorization'] = `Bearer ${userAccessToken}`;
    }
    config.headers['Apikey'] =
      '0Lhj2xP06fzyHuf11EerInRXe3S6MqKr4oHq7pf4FqwpWBqUwWCC1';

    return config;
  },
  (error) => {
    console.log('error in axios->', error);
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    // const originalRequest = error.config;
    console.log('axios interceptor error->', error);
    console.count('countFailedRequest');

    /*if (error?.response?.status === 401 /!* && !originalRequest._retry*!/) {
      // originalRequest._retry = true;
      await userManager.signinSilent();
    }*/

    /*if (error.code === 'ERR_NETWORK') {
      console.log('err');
    }*/
    return Promise.reject(error);
  }
);

export default axiosInstance;
