import useAxios from '../useAxios';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  DebounceOptions,
  HookConfig,
  ThrottleOptions,
  useRequestConfig,
  useRequestResult,
} from './interface';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import _ from 'lodash';
import { useMount } from '../../../';

const useRequest = <D = any>({
  debounce,
  manual,
  onSuccess,
  onError,
  initialData,
  throttle,
  ...AxiosConfig
}: useRequestConfig<D>) => {
  const axios = useAxios({ onSuccess, onError, initialData }, AxiosConfig);

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
    debounceRun?.cancel();
    throttleRun?.cancel();
  }, [debounceRun, throttleRun]);

  const flush = useCallback(() => {
    if (debounceRun.flush) {
      return debounceRun.flush;
    }
    if (throttleRun.flush) {
      return throttleRun.flush;
    }
  }, [debounceRun, throttleRun]);

  useMount(() => {
    if (!manual) {
      run();
    }
  });

  return {
    ...axios,
    run,
    cancel,
    flush,
  };
};

export default useRequest;
