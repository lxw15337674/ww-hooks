import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type RequestFn = (axiosConfig: AxiosRequestConfig) => AxiosRequestConfig;

export interface ResponseFn<P = any, D = P> {
  (data: AxiosResponse<P>, err: Error): [AxiosResponse<D>, Error];
}

export interface Interceptors {
  request?: RequestFn[];
  response?: ResponseFn[];
}
