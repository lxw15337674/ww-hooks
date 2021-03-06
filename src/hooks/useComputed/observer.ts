import { isFunction } from '../../common/dom';
import { Fn } from '../../common/interface';
import { debounce, isObject } from 'lodash';
import Deps from './Dep';
import Watchers from './watcher';
// import { targetFn } from './watcher';

export default class Observer<T extends Record<string, any>> {
  deps: Deps = new Deps();
  proxy;
  watchers = new Watchers();
  targetFn: Fn = null;
  notify: Fn;

  constructor(val: T, cb: () => void) {
    this.proxy = this.initProxy(val);
    this.notify = debounce(() => {
      this.deps.notify();
      cb();
    });
  }

  initProxy = (val) => {
    const proxy = new Proxy<T>(val, {
      get: (target, key: string, receiver) => {
        const res = Reflect.get(target, key, receiver);
        if (isFunction(res)) {
          if (this.watchers.isInit(key)) {
            return this.watchers.getValue(key);
          } else {
            this.watchers.set(key, () => res(this.proxy));
            this.targetFn = this.watchers.update(key);
            this.targetFn();
            this.targetFn = undefined;
            return this.watchers.getValue(key);
          }
        }
        if (this.targetFn) {
          this.deps.addSub(key, this.targetFn);
        }
        return isObject(res) ? this.initProxy(res) : Reflect.get(target, key);
      },
      set: (target, key: string, val) => {
        const v = Reflect.set(target, key, val);
        this.deps.addQueue(key);
        this.notify();
        return v;
      },
      deleteProperty(target, key) {
        const v = Reflect.deleteProperty(target, key);
        this.notify();
        return v;
      },
    });
    return proxy;
  };
}
