import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

const requestInterceptor = (config) => {
  config.headers["Content-type"] = "application/json";
  return config;
};

axiosInstance.interceptors.request.use(requestInterceptor);

export default axiosInstance;
