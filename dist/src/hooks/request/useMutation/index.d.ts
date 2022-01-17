/// <reference types="react" />
import { useMutationConfig } from './interface';
import { SetStateAction } from '@/common/interface';
declare const useMutation: <P = any, D = any>({
  manual,
  data,
  ...useAxiosConfig
}: useMutationConfig<P, D>) => {
  readonly run: (params: SetStateAction<P>) => Promise<P>;
  readonly reload: () => Promise<P>;
  readonly params: P;
  readonly setParams: import('react').Dispatch<
    import('react').SetStateAction<P>
  >;
  readonly data: P;
  readonly error: Error;
  readonly isLoading: boolean;
  readonly cancel: () => void;
  readonly mutate: import('react').Dispatch<import('react').SetStateAction<P>>;
  readonly isError: boolean;
  readonly isSuccess: boolean;
  readonly status: import('../usePromise/interface').Status;
  readonly flush: () => Promise<P>;
};
export default useMutation;
