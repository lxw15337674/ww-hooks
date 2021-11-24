import { useQueryConfig } from './interface';
import _ from 'lodash';
import { useMount, useAxios, useUnmount, useUpdateEffect } from '../../../';
import { useCallback, useRef, useState, useMemo } from 'react';
import { AxiosRequestConfig } from 'axios';
import { setState } from '@/common/utils';

const useQuery = <P = any, D = any>({
  deps = [],
  pollingInterval = 0,
  manual = true,
  concurrent = false,
  params,
  ...useRequestConfig
}: useQueryConfig<P, D>) => {
  const polling = useRef<NodeJS.Timeout>();
  const [requestParams, setParams] = useState<P>(params);
  const axiosConfig: AxiosRequestConfig = {
    params: requestParams,
    method: 'post',
    ...useRequestConfig,
  };
  const request = useAxios<D>(axiosConfig);

  const cancel = useCallback(() => {
    request.cancel();
    clearTimeout(polling.current);
  }, [request.cancel]);

  const run = useCallback(
    (params?: React.SetStateAction<P>) => {
      if (polling.current) {
        clearTimeout(polling.current);
      }
      if (!concurrent) {
        cancel();
      }
      params = setState(params, requestParams);
      if (params !== undefined) {
        setParams(params);
      }
      // 参数合并
      if (pollingInterval) {
        return request.run({ params }).finally(() => {
          polling.current = setTimeout(() => {
            if (!polling.current) return;
            run();
          }, pollingInterval);
        });
      }

      return request.run({ params });
    },
    [request.run, pollingInterval],
  );

  useUpdateEffect(() => {
    run();
  }, [...deps]);

  useMount(() => {
    if (manual === false) {
      run();
    }
  });

  useUnmount(() => {
    clearTimeout(polling.current);
  });

  return { ...request, run, cancel, requestParams } as const;
};

export default useQuery;
