import { Dispatch, SetStateAction } from 'react';
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
export declare type Service<D> = () => Promise<D>;
export interface usePromiseConfig<D> {
  onSuccess?: (data: D) => void;
  onError?: (result: Error) => void;
  initialData?: D;
  loadingDelay?: number;
  debounceInterval?: number;
  manual?: boolean;
  throttleInterval?: number;
}
export interface usePromiseResult<D> {
  data: D;
  error: Error;
  isLoading: boolean;
  run: () => Promise<D>;
  cancel: () => void;
  mutate: Dispatch<SetStateAction<D>>;
  isError: boolean;
  isSuccess: boolean;
  status: Status;
  flush: () => Promise<D>;
}
