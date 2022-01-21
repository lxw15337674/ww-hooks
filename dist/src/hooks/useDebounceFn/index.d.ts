import { Fn } from '../../common/interface';
import { DebounceSettings } from 'lodash.debounce';
export default function useDebounceFn<T extends Fn = Fn>(
  fn: T,
  wait?: number,
  options?: DebounceSettings,
): {
  run: any;
  cancel: any;
  flush: any;
};
