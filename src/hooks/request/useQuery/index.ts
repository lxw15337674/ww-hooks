import { useQueryConfig } from './interface';
import _ from 'lodash';
import { useMount, useRequest, useUnmount, useUpdateEffect } from '../../../';
import { useCallback, useRef, useState, useMemo } from 'react';
import { AxiosRequestConfig } from 'axios';

const useQuery = <P = any, D = any>({
  deps = [],
  pollingInterval = 0,
  manual = true,
  concurrent = false,
  defaultParams = null,
  ...useRequestConfig
}: useQueryConfig<P, D>) => {
  const request = useRequest<D>(useRequestConfig);
  const polling = useRef<NodeJS.Timeout>();
  const [params, setParams] = useState<P>(defaultParams);

  const cancel = useCallback(() => {
    request.cancel();
    clearTimeout(polling.current);
  }, [request.cancel]);

  const axiosConfig = useMemo((): AxiosRequestConfig => {
    const config: AxiosRequestConfig = {};
    config.params = { ...useRequestConfig.params, ...params };
    return config;
  }, [useRequestConfig]);

  const run = useCallback(() => {
    if (polling.current) {
      clearTimeout(polling.current);
    }
    if (!concurrent) {
      cancel();
    }
    // 参数合并
    if (pollingInterval) {
      return request.run(axiosConfig).finally(() => {
        polling.current = setTimeout(() => {
          if (!polling.current) return;
          run();
        }, pollingInterval);
      });
    }
    return request.run(axiosConfig);
  }, [request.run, pollingInterval, axiosConfig]);

  useUpdateEffect(() => {
    run();
  }, [...deps, params]);

  useMount(() => {
    if (manual === false) {
      run();
    }
  });

  useUnmount(() => {
    clearTimeout(polling.current);
  });

  return { ...request, run, cancel, params, setParams } as const;
};

export default useQuery;
