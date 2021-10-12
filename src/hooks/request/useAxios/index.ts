import { useCallback } from 'react';
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Interceptors } from './interface';

const axios = Axios.create();

function awaitWrap<T, U = any>(promise: Promise<T>) {
  return promise.then<[T, null], [null, U]>(
    (data: T) => [data, null],
    (err: U) => [null, err],
  );
}

export default function useAxios<D = any>(
  axiosConfig?: AxiosRequestConfig,
  interceptors?: Interceptors,
): () => Promise<AxiosResponse<D>> {
  const request = useCallback(async () => {
    let currentConfig = axiosConfig;
    for (let fn of interceptors?.request ?? []) {
      currentConfig = fn(currentConfig);
    }
    let [data, err] = await awaitWrap<AxiosResponse<D>>(
      axios.request<D, AxiosResponse<D>>(currentConfig),
    );
    for (let fn of interceptors?.response ?? []) {
      [data, err] = fn(data, err);
    }
    if (err === null) {
      return Promise.resolve(data);
    }
    return Promise.reject(err);
  }, [axiosConfig, interceptors]);
  return request;
}
