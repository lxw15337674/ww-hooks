import { useState, useCallback, useMemo, useRef } from 'react';
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import _ from 'lodash';
import { Config, Result } from './interface';

const axios = Axios.create();
// 数据请求Hook
const useAxios = <D>(
  config?: Config<D>,
  axiosConfig?: AxiosRequestConfig,
): Result<D> => {
  config = useMemo(() => {
    const defaultConfig: Config<D> = {
      initialData: null,
      loadingDelay: 0,
    };
    return { ...defaultConfig, ...config };
  }, [config]);
  const [data, setData] = useState<D>(config.initialData);
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(false);
  const loadingDelayTimer = useRef<NodeJS.Timeout>();
  const run = useCallback(
    (_axiosConfig?: AxiosRequestConfig) => {
      const runConfig = { ...axiosConfig, ..._axiosConfig };

      if (loadingDelayTimer.current) {
        clearTimeout(loadingDelayTimer.current);
      }
      loadingDelayTimer.current = setTimeout(() => {
        setLoading(true);
      }, config.loadingDelay);

      setError(undefined);
      return axios
        .request<D, AxiosResponse<D>>(runConfig)
        .then(
          (data: AxiosResponse<D>) => {
            setData(data.data);
            config?.onSuccess?.(data);
            return data;
          },
          (err: Error) => {
            setError(err);
            config?.onError?.(err, axiosConfig[0]);
            return err;
          },
        )
        .finally(() => {
          setLoading(false);
          clearTimeout(loadingDelayTimer.current);
        });
    },
    [axiosConfig, config],
  );

  return {
    data,
    error,
    loading,
    run,
    mutate: setData,
  };
};

export default useAxios;
