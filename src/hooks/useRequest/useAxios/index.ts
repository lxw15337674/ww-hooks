import { AxiosRequestConfig } from 'axios';
import useAxios from './useAxios';
import { Interceptors, RequestFn, ResponseFn } from './interface';
import _ from 'lodash';

class createUseAxios {
  private config: AxiosRequestConfig;
  private interceptors: Interceptors;
  constructor(config?: AxiosRequestConfig) {
    this.config = config;
  }
  mergeConfig(config?: AxiosRequestConfig) {
    this.config = { ...this.config, ...config };
  }
  RegisterRequestInterceptors(requestFn: RequestFn) {
    this.interceptors.request.push(requestFn);
  }
  RegisterResponseInterceptors(responseFn: ResponseFn) {
    this.interceptors.response.push(responseFn);
  }
  create() {
    return (config: AxiosRequestConfig, interceptors: Interceptors) => {
      config = { ...this.config, ...config };
      const inter = _.merge(this.interceptors, interceptors);
      useAxios(config, inter);
    };
  }
}

export default useAxios;
export { createUseAxios };
