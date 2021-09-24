import { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import Axios, { AxiosRequestConfig } from 'axios';
import _ from 'lodash';
import { Config, Params, DebounceOptions, Result } from './interface';
const axios = Axios.create();

// 数据请求Hook
export default function useRequest<P = void, D = any, R = D>(
  config: Config<P, D, R>,
): Result<P, D, R> {
  const [data, setData] = useState<R>(config.initialData);
  const [error, setError] = useState<string>();
  let cacheKey = useRef(0); //并发
  const [hookOptions, axiosConfig] = useMemo(() => {
    const hookOptions: Required<Params<P, D, R>> = {
      manual: false,
      successMessage: false,
      errorMessage: '操作失败',
      concurrentData: false,
      debounce: false,
      initialData: undefined,
      onSuccess: undefined,
      onError: undefined,
      transformParams: undefined,
      transformData: undefined,
    };
    const axiosConfig: AxiosRequestConfig = {};
    let item: keyof Config<P, D, R>;
    function setValue<T extends keyof AxiosRequestConfig>(
      key: T,
      val: AxiosRequestConfig[T],
    ) {
      axiosConfig[key] = val;
    }
    for (item in config) {
      const value = config[item];
      if (hookOptions.hasOwnProperty(item)) {
        hookOptions[item as keyof Required<Params<P, D, R>>] = value;
      } else {
        setValue(item as keyof AxiosRequestConfig, value);
      }
    }
    return [hookOptions, axiosConfig];
  }, [config]);

  const [loading, setLoading] = useState<boolean>(!hookOptions.manual);

  const request: (
    params?: P,
    axiosRequestConfig?: AxiosRequestConfig,
  ) => Promise<R> = useCallback(
    (requestPrams, axiosRequestConfig) => {
      setLoading(true);
      let key = ++cacheKey.current;
      // 参数转换
      if (hookOptions.transformParams) {
        requestPrams = hookOptions.transformParams(requestPrams);
      }
      // 转换为axios参数
      const axiosParams = { ...axiosConfig };
      if (axiosParams.method === 'get' || axiosParams.method === undefined) {
        axiosConfig.params = requestPrams;
      } else {
        axiosConfig.data = requestPrams;
      }
      // 错误处理
      const errorHandle = (res?: string) => {
        hookOptions.errorMessage &&
          // toast.error(res || hookOptions.errorMessage);
          hookOptions.onError?.(res, requestPrams);
        if (res) setError(res);
        return hookOptions.initialData;
      };
      // 正常处理
      const successHandle = (res: D): R => {
        const data: R =
          hookOptions.transformData?.(res) ?? (res as unknown as R);
        setData(data);
        hookOptions.successMessage &&
          // toast.success(hookOptions.successMessage as string);
          hookOptions.onSuccess &&
          hookOptions.onSuccess(res, requestPrams);
        return data;
      };

      // 拦截器
      // 并发问题
      const interceptor = (res: any) => {
        if (hookOptions.concurrentData && key !== cacheKey.current) {
          return -1;
        }
        return res;
      };
      return axios({ ...axiosConfig, ...axiosRequestConfig })
        .then(interceptor)
        .then((res): R => {
          if (res === -1) {
            return data;
          }
          if (res.status === 200) {
            if (res.data.c === '0' || res.data.c === 0) {
              return successHandle(res.data.d);
            } else {
              errorHandle(res.data.m);
              return data;
            }
          }
          errorHandle(res?.data?.m);
          return data;
        })
        .catch(() => {
          errorHandle();
          return hookOptions.initialData;
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [hookOptions, axiosConfig, cacheKey],
  );

  useEffect(() => {
    !config.manual && request();
  }, []);

  const debounceRequest = useMemo(() => {
    if (hookOptions.debounce === true) {
      return _.debounce(request, 500);
    }
    const { wait = 500, ...options } = hookOptions.debounce as DebounceOptions<
      P,
      D
    >;
    return _.debounce(request, wait, options);
  }, [request, hookOptions.debounce]);

  const wrapperRequest = useMemo(() => {
    if (hookOptions.debounce === false) {
      return request;
    }
    return (params?: P) => {
      debounceRequest(params);
      return Promise.resolve(null);
    };
  }, [request, hookOptions.debounce]);

  return {
    data,
    error,
    loading,
    run: wrapperRequest,
    mutate: setData,
    setLoading,
  };
}
