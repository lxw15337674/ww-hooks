import { BasicTarget } from 'packages/wwhooks/src/common/interface';
import useBoolean from '../useBoolean';
import useEventListener from '../useEventListener';

export const useHover = (target: BasicTarget, options?: Options): boolean => {
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

export default useHover;
