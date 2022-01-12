import { useQueryConfig } from './interface';
import { useMount, useAxios, useUnmount, useUpdateEffect } from '../../../';
import { SetStateAction, useCallback, useRef, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { setState } from '../../../common/utils';

const useQuery = <P = any, D = any>({
  deps = [],
  pollingInterval = 0,
  manual = true,
  concurrent = false,
  params,
  ...useAxiosConfig
}: useQueryConfig<P, D>) => {
  const polling = useRef<NodeJS.Timeout>();
  const [requestParams, setParams] = useState<P>(params);
  const request = useAxios<D>(useAxiosConfig);
  const cancel = useCallback(() => {
    request.cancel();
    clearTimeout(polling.current);
  }, [request]);

  const run = useCallback(
    (_params: SetStateAction<P>) => {
      if (polling.current) {
        clearTimeout(polling.current);
      }
      if (!concurrent) {
        cancel();
      }
      const params = setState(_params, requestParams);
      setParams(params);
      const axiosConfig: AxiosRequestConfig = {
        params,
      };
      // 参数合并
      if (pollingInterval) {
        return request.run(axiosConfig).finally(() => {
          polling.current = setTimeout(() => {
            if (!polling.current) return;
            run(params);
          }, pollingInterval);
        });
      }
      return request.run(axiosConfig);
    },
    [concurrent, requestParams, pollingInterval, request, cancel],
  );
  const reload = useCallback(() => {
    return run(requestParams);
  }, [requestParams, run]);

  useUpdateEffect(() => {
    reload();
  }, [...deps]);

  useMount(() => {
    if (manual === false) {
      reload();
    }
  });

  useUnmount(() => {
    clearTimeout(polling.current);
  });

  return {
    ...request,
    run,
    reload,
    cancel,
    params: requestParams,
    setParams,
  } as const;
};

export default useQuery;
