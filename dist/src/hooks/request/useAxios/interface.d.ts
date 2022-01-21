import { usePromiseConfig } from '@src/hooks/request/usePromise/interface';
import { AxiosRequestConfig } from 'axios';
export declare type Status = 'loading' | 'error' | 'success';
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
export declare type useAxiosConfig<D> = AxiosRequestConfig<D> &
  usePromiseConfig<D>;
