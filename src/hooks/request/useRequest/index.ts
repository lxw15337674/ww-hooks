import { useState, useCallback, useMemo } from 'react';
import { AxiosResponse } from 'axios';
import _ from 'lodash';
import { Params } from './interface';
import useAxios from '../useAxios';
import useMount from '../../useMount';

// 数据请求Hook
export default function useRequest<D = any>(
  config?: Params<D>,
  ...useAxiosConfig: Parameters<typeof useAxios>
) {
  config = useMemo(() => {
    const defaultConfig: Params<D> = {
      manual: false,
      initialData: null,
    };
    return { ...config, ...defaultConfig };
  }, [config]);
  const [data, setData] = useState<D>(config.initialData);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(!config.manual);
  const request = useAxios(...useAxiosConfig);

  const run = useCallback(() => {
    setLoading(true);
    return request()
      .then((data: AxiosResponse<D>) => {
        setData(data.data);
        config?.onSuccess?.(data.data);
        return data;
      })
      .catch((err: Error) => {
        setError(err.message);
        config?.onError?.(err.message);
        return error;
      })
      .finally(() => {
        setLoading(false);
      });
  }, [request, config]);

  useMount(() => {
    if (!config.manual) {
      run();
    }
  });

  return {
    data,
    error,
    loading,
    run,
    mutate: setData,
  };
}
