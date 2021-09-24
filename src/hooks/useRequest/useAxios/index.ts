import { useCallback } from 'react';
import Axios, { AxiosRequestConfig } from 'axios';
import { Interceptors } from './interface';

const axios = Axios.create();

function awaitWrap<T, U = any>(promise: Promise<T>) {
  return promise.then<[T, null], [null, U]>(
    (data: T) => [data, null],
    (err: U) => [null, err],
  );
}

export default function useAxios<D = any, T = never>(
  axiosConfig?: AxiosRequestConfig,
  interceptors?: Interceptors,
): () => Promise<D | T> {
  const request = useCallback(async () => {
    let currentConfig = axiosConfig;
    for (let fn of interceptors?.request ?? []) {
      currentConfig = fn(currentConfig);
    }
    let [data, err] = await awaitWrap<D>(axios.request<D, D>(currentConfig));
    for (let fn of interceptors?.response ?? []) {
      [data, err] = fn(data, err);
    }
    if (data === null) {
      return Promise.reject(err);
    }
    return Promise.resolve(data);
  }, [axiosConfig, interceptors]);
  return request;
}
