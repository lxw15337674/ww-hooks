import { useMutationConfig } from './interface';
import _ from 'lodash';
import { useMount, useAxios, useUnmount, useUpdateEffect } from '../../../';
import { useCallback, useRef, useState, useMemo } from 'react';
import { AxiosRequestConfig } from 'axios';

const useMutation = <P = any, D = any>({
  manual = true,
  defaultParams = null,
  ...useRequestConfig
}: useMutationConfig<P, D>) => {
  const axiosConfig = useMemo((): AxiosRequestConfig => {
    const config: AxiosRequestConfig = {
      method: 'post',
    };
    config.data = { ...useRequestConfig.params, ...params };
    return config;
  }, [useRequestConfig]);

  const request = useAxios<D>(axiosConfig);
  const [params, setParams] = useState<P>(defaultParams);

  const run = useCallback(
    (value?: React.SetStateAction<P>) => {
      if (value !== undefined) {
        setParams(value);
      }
      return request.run();
    },
    [request.run, axiosConfig],
  );

  useMount(() => {
    if (manual === false) {
      run();
    }
  });

  return { ...request, run, params } as const;
};

export default useMutation;
