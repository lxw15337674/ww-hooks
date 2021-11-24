import { useCallback, useMemo, useRef, useState } from 'react';
import {
  Service,
  Status,
  usePromiseConfig,
  usePromiseResult,
} from './interface';
import _ from 'lodash';
import {
  isType,
  useMount,
  useMountedState,
  useTimeoutFn,
  useUnmount,
} from '../..';
import useDebounceFn from '../useDebounceFn';
import useThrottleFn from '../useThrottleFn';

const usePromise = <D, P extends any[]>(
  service: Service<D, P>,
  {
    debounceInterval = null,
    manual = true,
    onSuccess = () => {},
    onError = () => {},
    initialData = null,
    throttleInterval = null,
    loadingDelay = 300,
    defaultParams = null,
  }: usePromiseConfig<D, P> = {},
) => {
  const mountedState = useMountedState();
  const [data, setData] = useState<D>(initialData);
  const [error, setError] = useState<Error>();
  const [status, setStatus] = useState<Status>('success');
  const [params, setParams] = useState<P>(defaultParams);
  const delaySetLoading = useTimeoutFn(() => {
    setStatus('loading');
  }, loadingDelay);

  const baseRun = (...params: P): Promise<D> => {
    delaySetLoading.run();
    setError(undefined);
    setParams(params);
    return service(...params)
      .then((data: D) => {
        mountedState() && setData(data);
        onSuccess?.(data, params);
        setStatus('success');
        return data;
      })
      .catch((err: Error) => {
        mountedState() && setError(err);
        onError?.(err, params);
        setStatus('error');
        return Promise.reject(err);
      })
      .finally(() => {
        delaySetLoading.cancel();
      });
  };

  const debounceRun = useDebounceFn(baseRun, debounceInterval);

  const throttleRun = useThrottleFn(baseRun, throttleInterval);

  const run = useCallback(
    (...params: P): Promise<D> => {
      if (debounceInterval !== undefined) {
        debounceRun.run(...params);
        return Promise.resolve(null);
      }
      if (throttleInterval !== undefined) {
        throttleRun.run(...params);
        return Promise.resolve(null);
      }
      return baseRun(...params);
    },
    [debounceRun, throttleRun, baseRun],
  );

  const cancel = useCallback(() => {
    debounceRun?.cancel();
    throttleRun?.cancel();
  }, [debounceRun, throttleRun]);

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
      run(...params);
    }
  });

  useUnmount(() => {
    cancel();
  });

  return {
    data,
    params,
    error,
    isLoading: status === 'loading',
    isError: status === 'error',
    isSuccess: status === 'success',
    status,
    run,
    cancel,
    mutate: setData,
    flush,
  } as usePromiseResult<D, P>;
};

export default usePromise;
