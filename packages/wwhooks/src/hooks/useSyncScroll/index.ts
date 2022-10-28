import { MutableRefObject, useEffect, useRef } from 'react';
import usePersistFn from '../usePersistFn';

export function useSyncScroll(
  refList: MutableRefObject<HTMLElement>[],
  attribute: 'left' | 'both' | 'top' = 'left',
) {
  const lock = useRef(0);
  const syncScroll = usePersistFn((e) => {
    e = e[0];
    if (lock.current > 0) {
      lock.current -= 1;
      return;
    }
    const syncList = refList.filter((ref) => ref.current !== e.target);
    lock.current = syncList.length;
    console.log(attribute);
    if (attribute === 'left' || attribute === 'both') {
      const left = e.target.scrollLeft;
      for (let ref of syncList) {
        ref.current.scrollLeft = left;
      }
    }
    if (attribute === 'top' || attribute === 'both') {
      const top = e.target.scrollTop;
      for (let ref of syncList) {
        if (ref.current) {
          ref.current.scrollTop = top;
        }
      }
    }
  });
  useEffect(() => {
    for (let ref of refList) {
      if (ref.current) {
        ref.current?.addEventListener?.('scroll', syncScroll);
      }
    }
    return () => {
      for (let ref of refList) {
        if (ref.current) {
          ref.current?.removeEventListener?.('scroll', syncScroll);
        }
      }
    };
  }, []);
}

export default useSyncScroll;
