import { useCallback, useRef } from 'react';
import Axios, { AxiosRequestConfig, Canceler } from 'axios';
import { usePromise, useUnmount } from '../../../';
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

  const axiosRequest = useCallback(
    (config?: AxiosRequestConfig) => {
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
    },
    [axiosConfig],
  );

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

  const cancel = useCallback(() => {
    cancelToken.current?.();
    request?.cancel();
  }, [request.cancel]);

  useUnmount(() => {
    cancel();
  });

  return request;
};

export default useAxios;
