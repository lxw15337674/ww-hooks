import { BasicTarget, getTargetElement } from '@/utils/dom';
import { useEffect } from 'react';

export type Target = BasicTarget<HTMLElement | Element | Window | Document>;

type Options = {
  target?: Target;
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
};

function useEventListener(
  eventName: string,
  handler: (e) => void,
  options: Options = {},
) {
  useEffect(() => {
    const targetElement = getTargetElement(options.target, window);
    if (!targetElement?.addEventListener) {
      return;
    }

    targetElement.addEventListener(eventName, handler, {
      capture: options.capture,
      once: options.once,
      passive: options.passive,
    });

    return () => {
      targetElement.removeEventListener(eventName, handler, {
        capture: options.capture,
      });
    };
  }, [eventName, options]);
}

export default useEventListener;
