import { Fn } from '../../common/interface';
import { DebounceSettings } from 'lodash';
export default function useDebounceFn<T extends Fn = Fn>(
  fn: T,
  wait?: number,
  options?: DebounceSettings,
): {
  run: import('lodash').DebouncedFunc<T>;
  cancel: () => void;
  flush: () => ReturnType<T>;
};
