import { useMemo, useState } from 'react';
import usePersistFn from '../usePersistFn';

function isObject(val: Record<string, any>): boolean {
  return typeof val === 'object' && val !== null;
}

const observer = <T extends Record<string, any>>(val, cb) => {
  const proxy = new Proxy<T>(val, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      console.log(res);
      return isObject(res) ? observer(res, cb) : Reflect.get(target, key);
    },
    set(target, key, val) {
      console.log(target, key, val);
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
  const [state, setState] = useState(initialState);
  const set = usePersistFn(setState);
  const observedState = useMemo(() => {
    return observer(state, set);
  }, []);
  return observedState as T;
};

export default useReactive;
