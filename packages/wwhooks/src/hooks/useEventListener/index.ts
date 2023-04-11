import { getTargetElement } from '../../common/dom';
import { useEffect, useRef } from 'react';
import { Target, TargetElement } from '../../common/interface';
import { useBoolean, usePersistFn } from '../..';

type Options = {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
  manual?: boolean; // 是否手动触发
};

export function useEventListener<T = Event>(
  target: Target,
  eventName: string,
  handler: (e: T) => void,
  options: Options = {},
) {
  const ele = useRef<TargetElement>();
  const [isRunning, setIsRunning] = useBoolean(false);
  useEffect(() => {
    ele.current = getTargetElement(target, window);
  }, [target]);

  const eventListener = usePersistFn((event: Event) => {
    return handler(event as T);
  });

  const run = usePersistFn(() => {
    if (!ele.current && !isRunning) {
      return;
    }
    setIsRunning(true);
    ele.current.addEventListener(eventName, eventListener, {
      capture: options.capture,
      once: options.once,
      passive: options.passive,
    });
  });
  const stop = usePersistFn(() => {
    if (isRunning) {
      ele.current.removeEventListener(eventName, eventListener, {
        capture: options.capture,
      });
      setIsRunning(false);
    }
  });
  useEffect(() => {
    if (options.manual !== false) {
      run();
    }
    return stop;
  }, []);
  return { run, isRunning, stop };
}

export default useEventListener;
