import { AxiosRequestConfig } from 'axios';
import { useAxiosConfig } from './interface';
declare const useAxios: <D>({
  debounceInterval,
  manual,
  onSuccess,
  onError,
  initialData,
  throttleInterval,
  loadingDelay,
  defaultParams,
  ...axiosConfig
}: any) => import('../usePromise/interface').usePromiseResult<
  D,
  [AxiosRequestConfig<D>]
>;
export default useAxios;
