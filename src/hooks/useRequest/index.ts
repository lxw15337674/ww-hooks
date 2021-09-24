import useRequest from './useAxios/useAxios';
import { SetPartialStateAction, SetStateAction } from '@/common/interface';
import { setState } from '@/common/utils';
import { mockRequest } from './Demo/mockRequest';

import { Params } from './interface';
import useAxios from './useAxios/useAxios';
import { AxiosRequestConfig } from 'axios';

const defaultConfig: Required<Params> = {
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

const request = (config?: SetPartialStateAction<Params>) => {
  const params = { ...config, ...setState(config, defaultConfig) };
  return {
    config: (config: Params) => request({ ...params, ...config }),
    create: (
      hookConfig?: SetPartialStateAction<Params>,
      axiosRequestConfig?: AxiosRequestConfig,
    ) =>
      useAxios(
        { ...config, ...setState(config, hookConfig) },
        axiosRequestConfig,
      ),
  };
};
