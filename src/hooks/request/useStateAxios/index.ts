import { useState, useCallback, useMemo } from 'react';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import _, { defaults } from 'lodash';
import { Config, UseStateAxios } from './interface';
import useAxios from '../useAxios';
import useMount from '../../useMount';

// 数据请求Hook
const useStateAxios: UseStateAxios = <D>(config, axiosConfig) => {
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
        setData(data.data);
        config?.onSuccess?.(data);
        return data;
      })
      .catch((err: Error) => {
        setError(err);
        config?.onError?.(err, axiosConfig[0]);
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
};

export default useStateAxios;
