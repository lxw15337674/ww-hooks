import { getTargetElement } from '../../common/dom';
import { useEffect, useRef } from 'react';
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
  const handlerRef = useRef<Function>();
  handlerRef.current = handler;
  useEffect(() => {
    const targetElement = getTargetElement(options.target, window);
    if (!targetElement?.addEventListener) {
      return;
    }
    const eventListener = (event: Event) => {
      return handlerRef.current && handlerRef.current(event);
    };

    targetElement.addEventListener(eventName, eventListener, {
      capture: options.capture,
      once: options.once,
      passive: options.passive,
    });

    return () => {
      targetElement.removeEventListener(eventName, eventListener, {
        capture: options.capture,
      });
    };
  }, [eventName, options]);
}

export default useEventListener;
