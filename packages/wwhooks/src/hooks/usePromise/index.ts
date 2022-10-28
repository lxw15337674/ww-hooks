import { useMemo, useState } from 'react';
import {
  Service,
  Status,
  usePromiseConfig,
  usePromiseResult,
} from './interface';
import {
  useMount,
  useMountedState,
  usePersistFn,
  useTimeoutFn,
  useUnmount,
} from '../..';
import useDebounceFn from '../useDebounceFn';
import useThrottleFn from '../useThrottleFn';
import { isNumber } from '../../common/utils';

export const usePromise = <D, P extends any[] = never>(
  service: Service<D, P>,
  {
    debounceInterval = null,
    manual = true,
    onSuccess = () => {},
    onError = () => {},
    initialData = null,
    throttleInterval = null,
    loadingDelay = 300,
    defaultParams = [] as P,
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

  const baseRun = usePersistFn((...params: P): Promise<D> => {
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
  });

  const debounceRun = useDebounceFn(baseRun, debounceInterval);

  const throttleRun = useThrottleFn(baseRun, throttleInterval);

  const run = usePersistFn((...params: P): Promise<D> => {
    let _params = params;
    if (!Array.isArray(params)) {
      _params = [] as P;
    }
    if (isNumber(debounceInterval)) {
      console.log('debounce');
      debounceRun.run(..._params);
      return Promise.resolve(null);
    }
    if (isNumber(throttleInterval)) {
      throttleRun.run(..._params);
      return Promise.resolve(null);
    }
    return baseRun(..._params);
  });

  const reload = usePersistFn(() => {
    if (Array.isArray(params)) {
      return run(...(params as P));
    }
    // @ts-ignore
    return run();
  });

  const cancel = usePersistFn(() => {
    debounceRun?.cancel();
    throttleRun?.cancel();
  });

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
  } as usePromiseResult<D, P>;
};

export default usePromise;
