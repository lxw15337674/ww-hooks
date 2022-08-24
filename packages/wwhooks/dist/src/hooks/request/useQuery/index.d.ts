import { useQueryConfig } from './interface';
declare const useQuery: <P = any, D = any>({ deps, pollingInterval, manual, concurrent, params, ...useAxiosConfig }: useQueryConfig<P, D>) => {
    readonly run: (_params: SetStateAction<P>) => Promise<D>;
    readonly reload: () => Promise<D>;
    readonly cancel: () => void;
    readonly params: any;
    readonly setParams: any;
    readonly data: D;
    readonly error: Error;
    readonly isLoading: boolean;
    readonly mutate: Dispatch<SetStateAction<D_1>>;
    readonly isError: boolean;
    readonly isSuccess: boolean;
    readonly status: import("../usePromise/interface").Status;
    readonly flush: () => Promise<D>;
};
export default useQuery;
