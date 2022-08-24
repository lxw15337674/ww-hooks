import { useMutationConfig } from './interface';
import { SetStateAction } from 'packages/wwhooks/src/common/interface';
declare const useMutation: <P = any, D = any>({
  manual,
  data,
  ...useAxiosConfig
}: useMutationConfig<P, D>) => {
  readonly run: (params: SetStateAction<P>) => Promise<P>;
  readonly reload: () => Promise<P>;
  readonly params: any;
  readonly setParams: any;
  readonly data: P;
  readonly error: Error;
  readonly isLoading: boolean;
  readonly cancel: () => void;
  readonly mutate: Dispatch<SetStateAction<D_1>>;
  readonly isError: boolean;
  readonly isSuccess: boolean;
  readonly status: import('../usePromise/interface').Status;
  readonly flush: () => Promise<P>;
};
export default useMutation;
