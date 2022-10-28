import {
  InitialState,
  SetStateAction,
} from 'packages/wwhooks/src/common/interface';
import { useMemo } from 'react';
import useUpdate from '../useUpdate';

function isObject(val: Record<string, any>): boolean {
  return typeof val === 'object' && val !== null;
}

const observer = <T extends Record<string, any>>(val, cb) => {
  const proxy = new Proxy<T>(val, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      return isObject(res) ? observer(res, cb) : Reflect.get(target, key);
    },
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

export const isValue = <T>(state: SetStateAction<T>): state is T => {
  return typeof state !== 'function';
};

export const setState = <T>(v: T | (() => T)): T => {
  if (isValue<T>(v)) {
    return v;
  }
  return v();
};

export const useReactive = <T extends Record<string, any>>(
  InitialState?: InitialState<T>,
) => {
  const update = useUpdate();
  const state = useMemo(() => {
    return observer(setState(InitialState), () => {
      update();
    });
  }, []);
  return state as T;
};

export default useReactive;
