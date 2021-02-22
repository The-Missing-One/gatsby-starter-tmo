import axios from 'axios';
import qs from 'qs';

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  paramsSerializer: (params) => (qs.stringify(params)),
});

axiosInstance.interceptors.request.use((config) => {
  const newConfig = config;
  // Add bearer or api key
  return (newConfig);
});

export default axiosInstance;
