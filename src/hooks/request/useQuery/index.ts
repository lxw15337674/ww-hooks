import { useQueryConfig } from './interface';
import {
  useMount,
  useAxios,
  useUnmount,
  useUpdateEffect,
  usePersistFn,
} from '../../../';
import { SetStateAction, useRef, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { setStateAction } from '../../../common/utils';

const useQuery = <P = any, D = any>({
  deps = [],
  pollingInterval = 0,
  manual = true,
  concurrent = false,
  params,
  ...useAxiosConfig
}: useQueryConfig<P, D>) => {
  const polling = useRef();
  const [requestParams, setParams] = useState<P>(params);
  const request = useAxios<D>(useAxiosConfig);
  const cancel = usePersistFn(() => {
    request.cancel();
    clearTimeout(polling.current);
  });

  const run = usePersistFn((_params: SetStateAction<P>) => {
    if (polling.current) {
      clearTimeout(polling.current);
    }
    if (!concurrent) {
      cancel();
    }
    const params = setStateAction(_params, requestParams);
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
  });
  const reload = usePersistFn(() => {
    return run(requestParams);
  });

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
