import { AxiosRequestConfig } from 'axios';

export interface Result<D = any> {
  data: D;
  error: string;
  loading: boolean;
  run: (axiosRequestConfig?: AxiosRequestConfig) => Promise<D>;
  mutate: React.Dispatch<React.SetStateAction<D>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Params<D = any> {
  /**
   * @desc: 是否手动
   */
  manual?: boolean;
  onSuccess?: (result: D) => void;
  onError?: (result: string) => void;
  initialData?: D;
}
export type RequestFn = (axiosConfig: AxiosRequestConfig) => AxiosRequestConfig;

export interface ResponseFn<P = any, D = P> {
  (data: P, err: string): [D, string];
}

export interface Interceptors {
  request?: RequestFn[];
  response?: ResponseFn[];
}
