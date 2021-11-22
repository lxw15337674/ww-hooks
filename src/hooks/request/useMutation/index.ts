import { useMutationConfig } from './interface';
import _ from 'lodash';
import { useMount, useRequest, useUnmount, useUpdateEffect } from '../../../';
import { useCallback, useRef, useState, useMemo } from 'react';
import { AxiosRequestConfig } from 'axios';

const useMutation = <P = any, D = any>({
  manual = true,
  defaultParams = null,
  ...useRequestConfig
}: useMutationConfig<P, D>) => {
  const request = useRequest<D>(useRequestConfig);
  const [params, setParams] = useState<P>(defaultParams);

  const axiosConfig = useMemo((): AxiosRequestConfig => {
    const config: AxiosRequestConfig = {
      method: 'post',
    };
    config.data = { ...useRequestConfig.params, ...params };
    return config;
  }, [useRequestConfig]);

  const run = useCallback(() => {
    return request.run(axiosConfig);
  }, [request.run, axiosConfig]);

  useUpdateEffect(() => {
    run();
  }, [params]);

  useMount(() => {
    if (manual === false) {
      run();
    }
  });

  return { ...request, run, params, setParams } as const;
};

export default useMutation;
