import { AxiosRequestConfig } from 'axios';
import { Config } from '../useAxios/interface';

export interface useRequestConfig<D> extends Config<D> {
  pollingInterval: number;
}
