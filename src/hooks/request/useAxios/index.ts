import { useState, useCallback, useMemo, useRef } from 'react';
import Axios, {
  AxiosRequestConfig,
  AxiosResponse,
  Cancel,
  Canceler,
} from 'axios';
import _ from 'lodash';
import { Config, Result, Status } from './interface';
import { isType, useMountedState, useTimeoutFn } from '../../../';

// 数据请求Hook
const useAxios = <D>(
  config?: Config<D>,
  axiosConfig?: AxiosRequestConfig,
): Result<D> => {
  const mountedState = useMountedState();
  const cancelToken = useRef<Canceler>();
  config = useMemo(() => {
    const defaultConfig: Config<D> = {
      initialData: null,
      loadingDelay: 300,
    };
    return { ...defaultConfig, ...config };
  }, [config]);
  const axios = useMemo(() => {
    return Axios.create();
  }, []);
  const [data, setData] = useState<D>(config.initialData);
  const [error, setError] = useState<Error>();
  const [status, setStatus] = useState<Status>('success');
  const loadingDelayTimer = useRef<NodeJS.Timeout>();
  const delaySetLoading = useTimeoutFn(() => {
    setStatus('loading');
  }, config.loadingDelay);
  const run = useCallback(
    (_axiosConfig?: AxiosRequestConfig) => {
      const runConfig: AxiosRequestConfig<D> = {
        cancelToken: new Axios.CancelToken(function executor(c) {
          cancelToken.current = c;
        }),
        ...axiosConfig,
        ..._axiosConfig,
      };
      delaySetLoading.run();
      setError(undefined);
      return axios
        .request<D, AxiosResponse<D>>(runConfig)
        .then(
          (data: AxiosResponse<D>) => {
            mountedState() && setData(data.data);
            config?.onSuccess?.(data);
            setStatus('success');
            return data;
          },
          (err: Error | Cancel) => {
            if (isType<Error>(err, 'error')) {
              mountedState() && setError(err);
              config?.onError?.(err, axiosConfig[0]);
              setStatus('error');
              return err;
            }
            return null;
          },
        )
        .finally(() => {
          delaySetLoading.cancel();
          clearTimeout(loadingDelayTimer.current);
        });
    },
    [axiosConfig, config],
  );
  const cancel = useCallback(() => {
    cancelToken.current?.();
  }, [cancelToken]);
  return {
    data,
    error,
    isLoading: status === 'loading',
    isError: status === 'error',
    isSuccess: status === 'success',
    status,
    run,
    cancel,
    mutate: setData,
    interceptors: axios.interceptors,
    defaults: axios.defaults,
  } as const;
};

export default useAxios;
