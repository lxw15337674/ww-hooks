/// <reference types="lodash" />
import { Fn } from '../../common/interface';
export interface ThrottleSettings {
  leading?: boolean | undefined;
  trailing?: boolean | undefined;
}
export declare function useThrottleFn<T extends Fn = Fn>(
  fn: T,
  wait?: number,
  options?: ThrottleSettings,
): {
  run: import('lodash').DebouncedFunc<T>;
  cancel: () => void;
  flush: () => ReturnType<T> | undefined;
};
export default useThrottleFn;
