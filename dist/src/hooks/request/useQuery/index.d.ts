import { useQueryConfig } from './interface';
import { SetStateAction } from 'react';
declare const useQuery: <P = any, D = any>({
  deps,
  pollingInterval,
  manual,
  concurrent,
  params,
  ...useAxiosConfig
}: useQueryConfig<P, D>) => {
  readonly run: (_params: SetStateAction<P>) => Promise<D>;
  readonly reload: () => Promise<D>;
  readonly cancel: () => void;
  readonly params: P;
  readonly setParams: import('react').Dispatch<SetStateAction<P>>;
  readonly data: D;
  readonly error: Error;
  readonly isLoading: boolean;
  readonly mutate: import('react').Dispatch<SetStateAction<D>>;
  readonly isError: boolean;
  readonly isSuccess: boolean;
  readonly status: import('../usePromise/interface').Status;
  readonly flush: () => Promise<D>;
};
export default useQuery;
