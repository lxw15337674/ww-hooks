import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type Status = 'loading' | 'error' | 'success';
export interface Result<D> {
  data: D;
  error: Error;
  isLoading: boolean;
  cancel: () => void;
  run: (config?: AxiosRequestConfig) => Promise<AxiosResponse<D> | Error>;
  mutate: React.Dispatch<React.SetStateAction<D>>;
  isError: boolean;
  isSuccess: boolean;
  status: Status;
}

export interface Config<D> {
  onSuccess?: (data: AxiosResponse<D>) => void;
  onError?: (result: Error, config: AxiosRequestConfig) => void;
  initialData?: D;
  loadingDelay?: number;
}

export interface DebounceOptions {
  wait?: number;
  leading?: boolean;
  maxWait?: number;
  trailing?: boolean;
}

export interface ThrottleOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
}

export interface HookConfig {
  debounce?: DebounceOptions | boolean;
  manual?: boolean;
  throttle?: ThrottleOptions | boolean;
}
export type useRequestConfig<D> = HookConfig & Config<D> & AxiosRequestConfig;

export interface useRequestResult<D> extends Omit<Result<D>, 'run'> {
  run: (
    config?: AxiosRequestConfig,
  ) => Promise<Error | AxiosResponse<D> | null>;
}
