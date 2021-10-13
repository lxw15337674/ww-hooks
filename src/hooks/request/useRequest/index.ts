import useStateAxios from '../useStateAxios';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  DebounceOptions,
  HookConfig,
  useRequestConfig,
  useRequestResult,
} from './interface';
import { AxiosRequestConfig } from 'axios';
import _ from 'lodash';

const useRequest = <D = any>(
  { debounce, ...useStateAxiosConfig }: useRequestConfig<D>,
  axiosConfig?: AxiosRequestConfig,
): useRequestResult<D> => {
  const stateAxios = useStateAxios(useStateAxiosConfig, axiosConfig);

  const debounceRun = useMemo(() => {
    const run = stateAxios.run;
    if (debounce === true) {
      return _.debounce(run, 500);
    }
    const { wait = 500, ...options } = debounce as DebounceOptions;
    return _.debounce(run, wait, options);
  }, [stateAxios.run, debounce]);

  const run = useMemo(() => {
    if (!debounce) {
      return stateAxios.run;
    }
    debounceRun();
    return Promise.resolve(null);
  }, [debounceRun, debounce]);
  return {
    ...stateAxios,
    run,
  };
};

export default useRequest;
