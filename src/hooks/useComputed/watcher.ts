import { Fn } from '@/common/interface';

export class Watcher {
  cb: Fn;
  value: any;
  constructor(cb) {
    this.cb = cb;
  }
  get = () => {
    return this.value;
  };

  update = (store) => {
    this.value = this.cb(store);
  };
}

export default class Watchers {
  watcher: Map<string, Watcher> = new Map();
  set = (key, cb) => {
    this.watcher.set(key, new Watcher(cb));
  };
  update = (key) => {
    return this.watcher.get(key).update;
  };
  getValue = (key) => {
    return this.watcher.get(key).value;
  };
  isInit = (key) => {
    return !!this.watcher.get(key);
  };
}
