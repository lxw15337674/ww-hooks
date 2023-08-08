import { useCallback, useMemo, useState } from 'react';
import {
  Service,
  Status,
  usePromiseConfig,
  usePromiseResult,
} from './interface';
import _, { isNumber } from 'lodash';
import useDebounceFn from '../useDebounceFn';
import useThrottleFn from '../useThrottleFn';
import useMount from '../useMount';
import useMountedState from '../useMountedState';
import useTimeoutFn from '../useTimeoutFn';
import useUnmount from '../useUnmount';
import usePersistFn from '../usePersistFn';

export const usePromise = <D, P extends any[] = never>(
  service: Service<D, P>,
  {
    debounceInterval = undefined,
    manual = true,
    onSuccess = () => {},
    onError = () => {},
    initialData = undefined,
    throttleInterval = undefined,
    loadingDelay = 300,
    defaultParams = undefined,
  }: usePromiseConfig<D, P> = {},
) => {
  const mountedState = useMountedState();
  const [data, setData] = useState<D | undefined>(initialData);
  const [error, setError] = useState<Error>();
  const [status, setStatus] = useState<Status>('success');
  const [params, setParams] = useState<P | undefined>(defaultParams);
  const [delaySetLoadingRun, delaySetLoading] = useTimeoutFn(() => {
    setStatus('loading');
  }, loadingDelay);

  const baseRun = usePersistFn((...params: P): Promise<D> => {
    delaySetLoadingRun();
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
  });

  const [debounceRun] = useDebounceFn(baseRun, debounceInterval);

  const [throttleRun] = useThrottleFn(baseRun, throttleInterval);

  const run = usePersistFn((...params: P): Promise<D | null> => {
    if (!Array.isArray(params)) {
      params = [] as unknown as P;
    }
    if (isNumber(debounceInterval)) {
      debounceRun(...params);
      return Promise.resolve(null);
    }
    if (isNumber(throttleInterval)) {
      throttleRun(...params);
      return Promise.resolve(null);
    }
    return baseRun(...params);
  });

  const reload = useCallback(() => {
    if (Array.isArray(params)) {
      return run(...params);
    }
    // @ts-ignore
    return run();
  }, [run, params]);

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
      reload();
    }
  });

  useUnmount(() => {
    cancel();
  });
  const resetData = usePersistFn(() => {
    setData(initialData);
  });

  return {
    data,
    params,
    error,
    reload,
    isLoading: status === 'loading',
    isError: status === 'error',
    isSuccess: status === 'success',
    status,
    run,
    cancel,
    mutate: setData,
    flush,
    resetData,
  } as usePromiseResult<D, P>;
};

export default usePromise;
