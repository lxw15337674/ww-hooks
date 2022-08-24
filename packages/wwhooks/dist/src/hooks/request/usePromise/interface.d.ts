import { Dispatch, SetStateAction } from 'react';
export declare type Status = 'loading' | 'error' | 'success';
export interface DebounceOptions {
    wait?: number;
    leading?: boolean;
    maxWait?: number;
    trailing?: boolean;
}
export interface ThrottleOptions {
    wait?: number;
    leading?: boolean;
    trailing?: boolean;
}
export declare type Service<D, P extends any[]> = (...args: P) => Promise<D>;
export interface usePromiseConfig<D, P extends any[] = never> {
    onSuccess?: (data: D, params: P) => void;
    onError?: (result: Error, params: P) => void;
    initialData?: D;
    loadingDelay?: number;
    defaultParams?: P;
    debounceInterval?: number;
    manual?: boolean;
    throttleInterval?: number;
}
export interface usePromiseResult<D, P extends any[]> {
    data: D;
    error: Error;
    isLoading: boolean;
    params: P;
    reload: () => Promise<D>;
    cancel: () => void;
    mutate: Dispatch<SetStateAction<D>>;
    isError: boolean;
    isSuccess: boolean;
    status: Status;
    flush: () => Promise<D>;
    run: (...params: P) => Promise<D>;
}
