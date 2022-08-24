import { useAxiosConfig } from '../useAxios/interface';
export interface useQueryConfig<P, D> extends useAxiosConfig<D> {
    deps?: any[];
    pollingInterval?: number;
    concurrent?: boolean;
    manual?: boolean;
    params?: P;
}
