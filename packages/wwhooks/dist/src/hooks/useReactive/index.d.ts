import {
  InitialState,
  SetStateAction,
} from 'packages/wwhooks/src/common/interface';
export declare const isValue: <T>(state: SetStateAction<T>) => state is T;
export declare const setState: <T>(v: T | (() => T)) => T;
declare const useReactive: <T extends Record<string, any>>(
  InitialState?: InitialState<T>,
) => T;
export default useReactive;
