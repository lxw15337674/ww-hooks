import { Service, usePromiseConfig, usePromiseResult } from './interface';
declare const usePromise: <D, P extends any[] = never>(service: Service<D, P>, { debounceInterval, manual, onSuccess, onError, initialData, throttleInterval, loadingDelay, defaultParams, }?: usePromiseConfig<D, P>) => usePromiseResult<D, P>;
export default usePromise;
