import { useQueryConfig } from './interface';
declare const useQuery: <P = any, D = any>({
  deps,
  pollingInterval,
  manual,
  concurrent,
  params,
  ...useAxiosConfig
}: useQueryConfig<P, D>) => any;
export default useQuery;
