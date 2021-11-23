import { useRequestConfig } from '../useAxios/interface';

export interface useMutationConfig<P, D> extends useRequestConfig<D> {
  //   key?: (args: P) => string;
  defaultParams?: P;
}
