import { useRequestConfig } from '../useAxios/interface';

export interface useMutationConfig<P, D> extends useRequestConfig<D> {
  data: P;
}
