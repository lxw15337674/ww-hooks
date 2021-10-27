import useAxios from '../useAxios';
import { useCallback, useMemo } from 'react';
import { useRequestConfig } from './interface';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import _ from 'lodash';
import { useMount, useUnmount } from '../../../';

const useRequest = <D = any>({
  debounce,
  manual,
  onSuccess,
  onError,
  initialData,
  throttle,
  ...axiosConfig
}: useRequestConfig<D>) => {
  const axios = useAxios({ onSuccess, onError, initialData }, axiosConfig);
  const debounceRun = useMemo(() => {
    if (!debounce) {
      return null;
    }
    const run = axios.run;
    if (debounce === true) {
      return _.debounce(run, 500);
    }

    const { wait = 500, ...options } = debounce;
    return _.debounce(run, wait, options);
  }, [axios.run, debounce]);

  const throttleRun = useMemo(() => {
    if (!throttle) {
      return null;
    }
    const run = axios.run;
    if (throttle === true) {
      return _.throttle(run, 500);
    }

    const { wait = 500, trailing = false, ...options } = throttle;
    return _.throttle(run, wait, { trailing, ...options });
  }, [axios.run, throttle]);

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
      return axios.run(config);
    },
    [debounceRun, debounce],
  );

  const cancel = useCallback(() => {
    axios.cancel();
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
    return Promise.resolve(null);
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
    ...axios,
    run,
    cancel,
    flush,
  };
};

export default useRequest;
