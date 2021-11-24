import { useCallback, useMemo, useRef } from 'react';
import Axios, { AxiosRequestConfig, AxiosResponse, Canceler } from 'axios';
import _ from 'lodash';
import { useUnmount } from '../../../';
import { usePromiseConfig } from '@/hooks/usePromise/interface';
import usePromise from '@/hooks/usePromise';
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

  const axiosRequest = useCallback((config?: AxiosRequestConfig<D>) => {
    const runConfig: AxiosRequestConfig<D> = {
      cancelToken: new Axios.CancelToken(function executor(c) {
        cancelToken.current = c;
      }),
      ...axiosConfig,
      ...config,
    };
    return axios.request<D, AxiosResponse<D, any>>(runConfig);
  }, []);

  const request = usePromise<AxiosResponse<D>, [AxiosRequestConfig<D>]>(
    axiosRequest,
    {
      debounceInterval,
      manual,
      onSuccess,
      onError,
      initialData,
      throttleInterval,
      loadingDelay,
      defaultParams,
    },
  );

  const cancel = useCallback(() => {
    cancelToken.current?.();
    request?.cancel();
  }, [request.cancel, cancelToken]);

  useUnmount(() => {
    cancel();
  });

  return request;
};

export default useAxios;
