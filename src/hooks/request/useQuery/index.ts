import { useQueryConfig } from './interface';
import _ from 'lodash';
import { useMount, useRequest, useUnmount, useUpdate } from '../../../';
import { useCallback, useMemo, useRef } from 'react';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

const useQuery = <P = any, D = any>({
  deps = [],
  pollingInterval = 0,
  manual = true,
  concurrent = false,
  ...useRequestConfig
}: useQueryConfig<P, D>) => {
  const request = useRequest<D>(useRequestConfig);
  //   依赖请求
  const polling = useRef<NodeJS.Timeout>();
  const axiosConfig = useCallback(
    (args: P): AxiosRequestConfig => {
      const config: AxiosRequestConfig = {};
      if (
        useRequestConfig.method === 'get' ||
        useRequestConfig.method === undefined
      ) {
        config.params = args;
      } else {
        config.data = args;
      }
      return config;
    },
    [useRequestConfig],
  );
  const cancel = useCallback(() => {
    request.cancel();
    clearTimeout(polling.current);
  }, [request.cancel]);

  const run = useCallback(
    (args?: P) => {
      if (polling.current) {
        clearTimeout(polling.current);
      }
      if (!concurrent) {
        cancel();
      }
      // 参数合并
      const config = axiosConfig(args);
      if (pollingInterval) {
        return request.run(config).finally(() => {
          polling.current = setTimeout(() => {
            if (!polling.current) return;
            run(args);
          }, pollingInterval);
        });
      }
      return request.run(config);
    },
    [request.run, pollingInterval],
  );

  // 依赖请求
  useUpdate(() => {
    run();
  }, deps);

  useMount(() => {
    if (manual === false) {
      run();
    }
  });

  useUnmount(() => {
    clearTimeout(polling.current);
  });

  return { ...request, run, cancel };
};

export default useQuery;
