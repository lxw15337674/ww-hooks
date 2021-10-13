import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface Result<P, D, R> {
  data: R;
  error: string;
  loading: boolean;
  run: () => Promise<R>;
  mutate: React.Dispatch<React.SetStateAction<R>>;
}

export interface DebounceOptions<P, D> {
  wait?: number;
  leading?: boolean;
  maxWait?: number;
  trailing?: boolean;
}

export interface Config<D> {
  /**
   * @desc: 是否手动
   */
  manual?: boolean;
  onSuccess?: (data: AxiosResponse<D>) => void;
  onError?: (result: Error, config: AxiosRequestConfig) => void;
  initialData?: D;
}
