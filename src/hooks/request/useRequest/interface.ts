import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Config, Result } from '../useStateAxios/interface';

export interface DebounceOptions {
  wait?: number;
  leading?: boolean;
  maxWait?: number;
  trailing?: boolean;
}
export interface HookConfig<D> {
  debounce?: DebounceOptions | boolean;
}
export type useRequestConfig<D> = HookConfig<D> & Config<D>;

export interface useRequestResult<D> extends Omit<Result<D>, 'run'> {
  run: Promise<null> | (() => Promise<Error | AxiosResponse<D>>);
}
