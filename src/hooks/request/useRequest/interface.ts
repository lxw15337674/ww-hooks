import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Config, Result } from '../useAxios/interface';

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
