import { useRequestConfig } from '../useRequest/interface';
export interface useQueryConfig<P, D> extends useRequestConfig<D> {
    deps?: any[];
    pollingInterval?: number;
    concurrent?: boolean;
    manual?: boolean;
    defaultParams?: P;
}
