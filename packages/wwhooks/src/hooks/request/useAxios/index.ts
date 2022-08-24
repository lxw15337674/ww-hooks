import { useRef } from 'react';
import Axios, { AxiosRequestConfig, Canceler } from 'axios';
import { usePersistFn, usePromise, useUnmount } from '../../..';
import { useAxiosConfig } from './interface';

const axios = Axios.create();

const useAxios = <D>({
  debounceInterval,
  manual,
  onSuccess,
  onError,
  initialData,
  throttleInterval,
  loadingDelay,
  defaultParams,
  ...axiosConfig
}: useAxiosConfig<D>) => {
  const cancelToken = useRef<Canceler>();
  const axiosRequest = usePersistFn((config?: AxiosRequestConfig) => {
    const runConfig = {
      cancelToken: new Axios.CancelToken((c) => {
        cancelToken.current = c;
      }),
      ...axiosConfig,
      ...config,
    };
    return axios.request<D>(runConfig).then((res) => {
      return res.data;
    });
  });

  const request = usePromise<D, [AxiosRequestConfig<D>]>(axiosRequest, {
    debounceInterval,
    manual,
    onSuccess,
    onError,
    initialData,
    throttleInterval,
    loadingDelay,
    defaultParams,
  });

  const cancel = usePersistFn(() => {
    cancelToken.current?.();
    request?.cancel();
  });

  useUnmount(() => {
    cancel();
  });

  return request;
};

export default useAxios;
