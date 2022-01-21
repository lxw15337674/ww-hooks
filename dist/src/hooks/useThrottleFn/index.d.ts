import { Fn } from '../../common/interface';
import { ThrottleSettings } from 'lodash';
export default function useThrottleFn<T extends Fn = Fn>(
  fn: T,
  wait?: number,
  options?: ThrottleSettings,
): {
  run: import('lodash').DebouncedFunc<T>;
  cancel: () => void;
  flush: () => ReturnType<T>;
};
