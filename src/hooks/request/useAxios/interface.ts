import { usePromiseConfig } from '@src/hooks/request/usePromise/interface';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

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

export type useAxiosConfig<D> = AxiosRequestConfig<D> & usePromiseConfig<D>;
