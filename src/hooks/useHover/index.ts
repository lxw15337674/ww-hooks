import { BasicTarget } from '@/common/interface';
import useBoolean from '../useBoolean';
import useEventListener from '../useEventListener';

export interface Options {
  onEnter?: () => void;
  onLeave?: () => void;
}

export default (target: BasicTarget, options?: Options): boolean => {
  const { onEnter, onLeave } = options || {};

  const [state, toggle] = useBoolean(false);

  useEventListener(target, 'mouseenter', () => {
    onEnter?.();
    toggle();
  });

  useEventListener(target, 'mouseleave', () => {
    onLeave?.();
    toggle();
  });

  return state;
};
