import { AxiosRequestConfig } from 'axios';

export interface Result<P, D, R> {
  data: R;
  error: string;
  loading: boolean;
  run: (params: P, axiosRequestConfig?: AxiosRequestConfig) => Promise<R>;
  mutate: React.Dispatch<React.SetStateAction<R>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DebounceOptions<P, D> {
  wait?: number;
  leading?: boolean;
  maxWait?: number;
  trailing?: boolean;
}
export interface Params<P = void, D = any, R = D> {
  /**
   * @desc: 是否手动
   */
  manual?: boolean;
  onSuccess?: (result: D, params: P) => void;
  onError?: (result: string, params: P) => void;
  successMessage?: string | false;
  errorMessage?: string | false;
  initialData?: R;
  concurrentData?: boolean;
  debounce?: DebounceOptions<P, D> | boolean;
  transformParams?: (data: P) => any;
  transformData?: (data: D) => R;
}

export interface Config<P = void, D = any, R = D>
  extends AxiosRequestConfig,
    Params<P, D, R> {}
