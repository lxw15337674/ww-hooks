import useAxios from '../useAxios';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  DebounceOptions,
  HookConfig,
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
  ...AxiosConfig
}: useRequestConfig<D>) => {
  const axios = useAxios({ onSuccess, onError, initialData }, AxiosConfig);

  const debounceRun = useMemo(() => {
    const run = axios.run;
    if (debounce === true) {
      return _.debounce(run, 500);
    }
    if (!debounce) {
      return null;
    }
    const { wait = 500, ...options } = debounce as DebounceOptions;
    return _.debounce(run, wait, options);
  }, [axios.run, debounce]);

  const run = useCallback(
    (config?: AxiosRequestConfig): Promise<Error | AxiosResponse<D> | null> => {
      if (!debounce) {
        return axios.run(config);
      }
      debounceRun(config);
      return Promise.resolve(null);
    },
    [debounceRun, debounce],
  );

  useMount(() => {
    if (!manual) {
      run();
    }
  });

  return {
    ...axios,
    run,
    cancel: debounceRun.cancel,
    flush: debounceRun.flush,
  };
};

export default useRequest;
