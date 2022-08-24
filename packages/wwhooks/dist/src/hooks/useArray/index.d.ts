import { InitialState } from 'packages/wwhooks/src/common/interface';
declare const useArray: <T = any>(
  initialArray: InitialState<T[]>,
) => readonly [any, any];
export default useArray;
