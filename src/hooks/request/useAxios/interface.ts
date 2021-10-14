import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface Result<D> {
  data: D;
  error: Error;
  loading: boolean;
  run: (config?: AxiosRequestConfig) => Promise<AxiosResponse<D> | Error>;
  mutate: React.Dispatch<React.SetStateAction<D>>;
}

export interface Config<D> {
  onSuccess?: (data: AxiosResponse<D>) => void;
  onError?: (result: Error, config: AxiosRequestConfig) => void;
  initialData?: D;
}
