import { useRequestConfig } from '../useAxios/interface';

export interface useQueryConfig<P, D> extends useRequestConfig<D> {
  deps?: any[];
  pollingInterval?: number;
  concurrent?: boolean;
  manual?: boolean;
  params?: P;
}
