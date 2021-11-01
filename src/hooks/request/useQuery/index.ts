import { useQueryConfig } from './interface';
import _ from 'lodash';
import { useMount, useRequest, useUnmount, useUpdate } from '../../../';
import { useCallback, useRef } from 'react';
import { AxiosRequestConfig } from 'axios';

const useQuery = <P = any, D = any>({
  deps = [],
  pollingInterval = 0,
  manual = true,
  concurrent = false,
  ...useRequestConfig
}: useQueryConfig<P, D>) => {
  const request = useRequest<D>(useRequestConfig);
  const polling = useRef<NodeJS.Timeout>();
  const axiosConfig = useCallback(
    (args: P): AxiosRequestConfig => {
      const config: AxiosRequestConfig = {};
      config.params = { ...useRequestConfig.params, ...args };
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
