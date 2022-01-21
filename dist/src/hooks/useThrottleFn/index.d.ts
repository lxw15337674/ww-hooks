import { Fn } from '../../common/interface';
import { ThrottleSettings } from 'lodash.throttle';
export default function useThrottleFn<T extends Fn = Fn>(
  fn: T,
  wait?: number,
  options?: ThrottleSettings,
): {
  run: any;
  cancel: any;
  flush: any;
};
