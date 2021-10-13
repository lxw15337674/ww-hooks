import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface Result<D> {
  data: D;
  error: Error;
  loading: boolean;
  run: () => Promise<Error | AxiosResponse<D>>;
  mutate: React.Dispatch<React.SetStateAction<D>>;
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
