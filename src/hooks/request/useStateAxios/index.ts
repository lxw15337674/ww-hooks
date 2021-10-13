import { useState, useCallback, useMemo } from 'react';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import _ from 'lodash';
import { Config, Result } from './interface';
import useAxios from '../useAxios';
import useMount from '../../useMount';

// 数据请求Hook
const useStateAxios = <D>(
  config?: Config<D>,
  axiosConfig?: AxiosRequestConfig,
): Result<D> => {
  config = useMemo(() => {
    const defaultConfig: Config<D> = {
      manual: false,
      initialData: null,
    };
    return { ...defaultConfig, ...config };
  }, [config]);
  const [data, setData] = useState<D>(config.initialData);
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(!config.manual);
  const request = useAxios(axiosConfig);

  const run = useCallback(() => {
    setLoading(true);
    setError(undefined);
    return request()
      .then((data: AxiosResponse<D>) => {
        setLoading(false);
        setData(data.data);
        config?.onSuccess?.(data);
        return data;
      })
      .catch((err: Error) => {
        setLoading(false);
        setError(err);
        config?.onError?.(err, axiosConfig[0]);
        return error;
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
};

export default useStateAxios;
