import { useRef } from 'react';
import useUpdate from '../useUpdate';

const observer = <T extends Record<string, any>>(val, cb) => {
  const proxy = new Proxy<T>(val, {
    set(target, key, val) {
      const v = Reflect.set(target, key, val);
      cb(target);
      return v;
    },
    deleteProperty(target, key) {
      const v = Reflect.deleteProperty(target, key);
      cb(v);
      return v;
    },
  });
  return proxy;
};

const useReactive = <T extends Record<string, any>>(
  initialState?: T | (() => T),
) => {
  const stateRef = useRef<T>(initialState as T);
  const update = useUpdate();
  const observedState = useRef(observer<T>(stateRef.current, update));
  return observedState.current as T;
};

export default useReactive;
