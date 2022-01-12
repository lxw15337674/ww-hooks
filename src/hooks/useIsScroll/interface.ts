import { useRequestConfig } from '../useRequest/interface';

export interface useQueryConfig<P, D> extends useRequestConfig<D> {
  deps?: any[];
  pollingInterval?: number;
  concurrent?: boolean;
  //   key?: (args: P) => string;
  manual?: boolean;
  defaultParams?: P;
}
