import { useMutationConfig } from './interface';
declare const useMutation: <P = any, D = any>({
  manual,
  data,
  ...useAxiosConfig
}: useMutationConfig<P, D>) => any;
export default useMutation;
