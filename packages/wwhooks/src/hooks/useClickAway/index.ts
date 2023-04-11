import { getTargetElement, off, on } from '../../common/dom';
import { BasicTarget } from '../../common/interface';
import { useEffect } from 'react';
import usePersistFn from '../usePersistFn';
import useEventListener from '../useEventListener';
import useBoolean from '../useBoolean';
import useUpdateEffect from '../useUpdateEffect';
import _ from 'lodash';

const defaultEvents = ['click'];

export const useClickAway = <T extends Event = Event>(
  target: BasicTarget,
  onClickAway: (event: T) => void,
  events: string[] = defaultEvents,
) => {
  const [isRunning, setIsRunning] = useBoolean(false);
  const handler = usePersistFn((event) => {
    const el = getTargetElement<Element>(target);
    if (el && !el.contains(event.target)) {
      onClickAway(event);
    }
  });
  const run = usePersistFn(() => {
    if (!isRunning) {
      setIsRunning(true);
      for (let eventName of events) {
        on(document, eventName, handler);
      }
    }
  });
  const stop = usePersistFn(() => {
    if (isRunning) {
      for (let eventName of events) {
        off(document, eventName, handler);
      }
      setIsRunning(false);
    }
  });

  useEffect(() => {
    run();
    return stop;
  }, []);

  useUpdateEffect(
    (pre, cur) => {
      if (!_.isEqual(pre, cur)) {
        run();
        stop();
      }
    },
    [events],
  );

  return { run, stop, isRunning };
};

export default useClickAway;
