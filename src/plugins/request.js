import Axois from 'axios';
import qs from 'qs';
import { getRequestUrl } from '@/utils';
import { IS_PC } from '@/utils/config';
import store from '@/store';

const terminalType = IS_PC ? 4 : 5;

const axios = Axois.create({
  timeout: 20000,
  headers: {
    terminalType,
  },
  paramsSerializer: params => qs.stringify(params),
});

axios.interceptors.request.use(config => {
  config.headers.token = store.getters.auth;
  return config;
}, Promise.reject.bind(Promise));

axios.interceptors.response.use(res => {
  if (!res) return Promise.reject(new Error());
  const { data = {} } = res;
  const { status = 0 } = data;
  if (+status === 0) return Promise.resolve(data);
  return Promise.reject(data);
}, Promise.reject.bind(Promise));

// vue实例访问到的函数，提供get/post两种方式
const request = (url, data, options = {}) => {
  const { method = 'get' } = options;
  return request[method](url, data, options);
};
// post 请求参数的转换
const contentTypeUrlencoded = 'application/x-www-form-urlencoded';
const dataTransform = {
  [contentTypeUrlencoded]: d => qs.stringify(d),
  'application/json': d => d,
};
request.post = (url, data, options = {}) => {
  const { headers = { 'Content-Type': contentTypeUrlencoded } } = options;
  return axios.post(
    getRequestUrl(url),
    dataTransform[headers['Content-Type']]({ ...data, terminalType }),
    options,
  );
};

/* eslint-disable implicit-arrow-linebreak */
request.get = (url, data, options) =>
  axios.get(getRequestUrl(url), {
    ...options,
    params: { ...data, terminalType },
  });

const install = Vue => {
  Object.defineProperty(Vue.prototype, '$request', {
    value: request,
  });
};

export default { install };
