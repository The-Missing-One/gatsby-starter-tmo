import axios from 'axios';
import qs from 'qs';

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  paramsSerializer: (params) => (qs.stringify(params)),
});

axiosInstance.interceptors.request.use((config) => {
  const newConfig = config;
  newConfig.headers.Authorization = `Bearer ${process.env.TOKEN_TEST}`;
  newConfig.headers['api-key'] = process.env.API_KEY;
  return (newConfig);
});

export default axiosInstance;
