import { useCallback, useMemo, useRef, useState } from 'react';
import { Status, useRequestConfig } from './interface';
import Axios, {
  AxiosRequestConfig,
  AxiosResponse,
  Cancel,
  Canceler,
} from 'axios';
import _ from 'lodash';
import {
  isType,
  useMount,
  useMountedState,
  useTimeoutFn,
  useUnmount,
} from '../../../';

const axios = Axios.create();

const useAxios = <D = any>({
  debounce,
  manual,
  onSuccess,
  onError,
  initialData,
  throttle,
  loadingDelay = 300,
  ...axiosConfig
}: useRequestConfig<D>) => {
  const mountedState = useMountedState();
  const cancelToken = useRef<Canceler>();
  const [data, setData] = useState<D>(initialData);
  const [error, setError] = useState<Error>();
  const [status, setStatus] = useState<Status>('success');
  const loadingDelayTimer = useRef<NodeJS.Timeout>();
  const delaySetLoading = useTimeoutFn(() => {
    setStatus('loading');
  }, loadingDelay);

  const baseRun = useCallback(
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
            onSuccess?.(data);
            setStatus('success');
            return data;
          },
          (err: Error | Cancel) => {
            if (isType<Error>(err, 'error')) {
              mountedState() && setError(err);
              onError?.(err, axiosConfig[0]);
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
    [axiosConfig, onSuccess, onError],
  );

  const debounceRun = useMemo(() => {
    if (!debounce) {
      return null;
    }
    if (debounce === true) {
      return _.debounce(baseRun, 500);
    }
    const { wait = 500, ...options } = debounce;
    return _.debounce(baseRun, wait, options);
  }, [baseRun, debounce]);

  // TODO: 目前不可用待修复
  const throttleRun = useMemo(() => {
    if (!throttle) {
      return null;
    }
    if (throttle === true) {
      return _.throttle(baseRun, 500);
    }
    const { wait = 500, leading = true, trailing = false } = throttle;
    return _.throttle(baseRun, wait, { trailing, leading });
  }, [baseRun, throttle]);

  const run = useCallback(
    (config?: AxiosRequestConfig): Promise<Error | AxiosResponse<D> | null> => {
      if (debounce) {
        debounceRun(config);
        return Promise.resolve(null);
      }
      if (throttle) {
        throttleRun(config);
        return Promise.resolve(null);
      }
      return baseRun(config);
    },
    [debounceRun, debounce, throttle, throttleRun, baseRun],
  );

  const cancel = useCallback(() => {
    cancelToken.current?.();
    debounceRun?.cancel();
    throttleRun?.cancel();
  }, [debounceRun, throttleRun, cancelToken]);

  const flush = useMemo(() => {
    if (debounceRun?.flush) {
      return debounceRun.flush;
    }
    if (throttleRun?.flush) {
      return throttleRun.flush;
    }
    return () => Promise.resolve(null);
  }, [debounceRun, throttleRun]);

  useMount(() => {
    if (manual === false) {
      run();
    }
  });

  useUnmount(() => {
    cancel();
  });

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
    flush,
  } as const;
};

export default useAxios;
