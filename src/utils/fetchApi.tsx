import { HttpMethods } from '@/Types';
import axios, { AxiosRequestConfig } from 'axios';
import { AUTH_API_URLS } from '@/utils/ApiUrl';

const API_URL = process.env.REACT_APP_API_URL;

export const requestAPI = (
  endpoint: string,
  method: HttpMethods,
  body?: unknown,
  responseType: AxiosRequestConfig['responseType'] = 'json',
) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (body instanceof FormData) {
    headers['Content-Type'] = 'multipart/form-data';
  }

  const instance = axios.create({ withCredentials: true, headers });

  instance.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalConfig = error.config;
      if (error.response && error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const res = await axios.post(
            `${API_URL}${AUTH_API_URLS.GEN_ACCESS_TOKEN}`,
            {},
            { withCredentials: true },
          );

          const { token } = res.data.data;
          localStorage.setItem('accessToken', token);
          originalConfig.headers['Authorization'] = `Bearer ${token}`;
          return instance(originalConfig);
        } catch (err) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('userId');
          return Promise.reject(err);
        }
      }
      return Promise.reject(error);
    },
  );

  return instance.request({
    method: method,
    url: `${API_URL}${endpoint}`,
    data: body,
    responseType: responseType,
  });
};
