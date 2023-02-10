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

export const usePromise = <D = any>(
  service: Service<D>,
  {
    debounceInterval = undefined,
    manual = true,
    onSuccess = () => {},
    onError = () => {},
    initialData = undefined,
    throttleInterval = undefined,
    loadingDelay = 300,
  }: usePromiseConfig<D> = {},
) => {
  const mountedState = useMountedState();
  const [data, setData] = useState<D>(initialData as D);
  const [error, setError] = useState<Error>();
  const [status, setStatus] = useState<Status>('success');
  const delaySetLoading = useTimeoutFn(() => {
    setStatus('loading');
  }, loadingDelay);

  const baseRun = usePersistFn((): Promise<D> => {
    delaySetLoading.run();
    setError(undefined);
    return service()
      .then((data: D) => {
        mountedState() && setData(data);
        onSuccess?.(data);
        setStatus('success');
        return data;
      })
      .catch((err: Error) => {
        mountedState() && setError(err);
        onError?.(err);
        setStatus('error');
        return Promise.reject(err);
      })
      .finally(() => {
        delaySetLoading.cancel();
      });
  });

  const debounceRun = useDebounceFn(baseRun, debounceInterval);

  const throttleRun = useThrottleFn(baseRun, throttleInterval);

  const run = usePersistFn((): Promise<D | void> => {
    if (isNumber(debounceInterval)) {
      debounceRun.run();
      return Promise.resolve();
    }
    if (isNumber(throttleInterval)) {
      throttleRun.run();
      return Promise.resolve();
    }
    return baseRun();
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
  } as usePromiseResult<D>;
};

export default usePromise;
