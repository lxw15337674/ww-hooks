import { getTargetElement, off, on } from '../../common/dom';
import { BasicTarget } from '../../common/interface';
import { useEffect } from 'react';
import usePersistFn from '../usePersistFn';

const defaultEvents = ['click'];

export const useClickAway = <T extends Event = Event>(
  target: BasicTarget,
  onClickAway: (event: T) => void,
  events: string[] = defaultEvents,
) => {
  const handler = usePersistFn((event) => {
    const el = getTargetElement<Element>(target);
    if (el && !el.contains(event.target)) {
      onClickAway(event);
    }
  });
  useEffect(() => {
    for (let eventName of events) {
      on(document, eventName, handler);
    }
    return () => {
      for (let eventName of events) {
        off(document, eventName, handler);
      }
    };
  }, [target, events]);
};

export default useClickAway;
