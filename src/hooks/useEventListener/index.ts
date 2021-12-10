import { getTargetElement } from '../../common/dom';
import { useEffect } from 'react';
import { Target } from '../../common/interface';

type Options = {
  target?: Target;
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
};

function useEventListener(
  eventName: string,
  handler: (e: Event) => void,
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
