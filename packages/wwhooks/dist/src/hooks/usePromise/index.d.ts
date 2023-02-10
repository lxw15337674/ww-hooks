import { Service, usePromiseConfig, usePromiseResult } from './interface';
export declare const usePromise: <D = any>(
  service: Service<D>,
  {
    debounceInterval,
    manual,
    onSuccess,
    onError,
    initialData,
    throttleInterval,
    loadingDelay,
  }?: usePromiseConfig<D>,
) => usePromiseResult<D>;
export default usePromise;
