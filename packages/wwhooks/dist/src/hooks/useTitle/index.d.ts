/// <reference types="react" />
import { InitialState } from '../../common/interface';
export declare function useTitle(
  InitialState?: InitialState<string>,
  restoreOnUnmount?: boolean,
): readonly [
  string,
  import('react').Dispatch<import('react').SetStateAction<string>>,
];
export default useTitle;
