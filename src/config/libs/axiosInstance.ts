import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { apiRoutes } from '../common/api-routes';
import { getCookie, removeCookie, setCookie } from '@/config/common';
import { constants } from '@/config/common/app-link';
import { toast } from 'react-toastify';

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
    const jwtAuthToken = getCookie(constants.JWT_TOKEN_KEY);

    if (!config.headers) {
      config.headers = {};
    }
    if (!config.headers['Authorization'] && jwtAuthToken) {
      config.headers['Authorization'] = `Bearer ${jwtAuthToken}`;
    }
    return config;
  },
  (error) => {
    console.log('error in axios->', error);
    errorHandler(error).then();
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
    await errorHandler(error);
    console.log('axios interceptor error->', error);
    console.count('countFailedRequest');
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAccessToken();
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

const errorHandler = (error: any) => {
  if (error.response.status === 500) {
    toast.error(`${error.response.data.detail}`, {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  }

  return Promise.reject({ ...error });
};

export default axiosInstance;

export const axiosPublic = axios.create({
  baseURL: 'http://localhost:3333/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const refreshAccessToken = async () => {
  const refreshToken = getCookie(constants.JWT_REFRESH_TOKEN_KEY);

  try {
    const response = await axiosPublic.post(apiRoutes.REFRESH_TOKEN, {
      refreshToken: refreshToken,
    });

    const { session } = response.data;

    if (!session?.accessToken) {
      removeCookie(constants.JWT_TOKEN_KEY);
      removeCookie(constants.JWT_REFRESH_TOKEN_KEY);
    }
    setCookie(constants.JWT_TOKEN_KEY, session?.accessToken, {});
    return session?.accessToken;
  } catch (error) {
    removeCookie(constants.JWT_TOKEN_KEY);
    removeCookie(constants.JWT_REFRESH_TOKEN_KEY);
  }
};
