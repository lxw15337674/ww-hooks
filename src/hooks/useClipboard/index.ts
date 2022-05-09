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

  useEventListener(
    'mouseenter',
    () => {
      onEnter?.();
      toggle();
    },
    {
      target,
    },
  );

  useEventListener(
    'mouseleave',
    () => {
      onLeave?.();
      toggle();
    },
    {
      target,
    },
  );

  return state;
};
