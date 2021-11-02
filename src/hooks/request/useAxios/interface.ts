import {
  AxiosDefaults,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export type Status = 'loading' | 'error' | 'success';
export interface Result<D> {
  data: D;
  error: Error;
  isLoading: boolean;
  cancel: () => void;
  run: (config?: AxiosRequestConfig) => Promise<AxiosResponse<D> | Error>;
  mutate: React.Dispatch<React.SetStateAction<D>>;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  isError: boolean;
  isSuccess: boolean;
  defaults: AxiosDefaults<D>;
  status: Status;
}

export interface Config<D> {
  onSuccess?: (data: AxiosResponse<D>) => void;
  onError?: (result: Error, config: AxiosRequestConfig) => void;
  initialData?: D;
  loadingDelay?: number;
}
