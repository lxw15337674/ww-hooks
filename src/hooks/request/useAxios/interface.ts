import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type Status = 'loading' | 'error' | 'success';

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

export type useAxiosConfig<D> = Config<D> & AxiosRequestConfig<D>;
export interface Config<D> {
  onSuccess?: (data: AxiosResponse<D>) => void;
  onError?: (result: Error, config: AxiosRequestConfig) => void;
  initialData?: D;
  loadingDelay?: number;
  debounce?: DebounceOptions | boolean;
  manual?: boolean;
  throttle?: ThrottleOptions | boolean;
}

export interface useAxiosResult<D> {
  data: D;
  error: Error;
  isLoading: boolean;
  cancel: () => void;
  mutate: React.Dispatch<React.SetStateAction<D>>;
  isError: boolean;
  isSuccess: boolean;
  status: Status;
  run: (config?: AxiosRequestConfig) => Promise<D>;
}
