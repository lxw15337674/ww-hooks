/// <reference types="lodash" />
import { Fn } from '../../common/interface';
interface DebounceSettings {
  leading?: boolean | undefined;
  maxWait?: number | undefined;
  trailing?: boolean | undefined;
}
export declare function useDebounceFn<T extends Fn = Fn>(
  fn: T,
  wait?: number,
  options?: DebounceSettings,
): {
  run: import('lodash').DebouncedFunc<T>;
  cancel: () => void;
  flush: () => ReturnType<T> | undefined;
};
export default useDebounceFn;
