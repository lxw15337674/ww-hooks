import { useAxiosConfig } from '../useAxios/interface';
export interface useMutationConfig<P, D> extends Omit<useAxiosConfig<D>, 'data'> {
    data?: P;
}
