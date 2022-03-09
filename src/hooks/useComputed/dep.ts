import { Fn } from '@/common/interface';

export class Dep {
  subs = [];

  addSub(sub) {
    this.subs.push(sub);
  }
  // 删除一个依赖
  removeSub(sub) {
    remove(this.subs, sub);
  }

  // 通知所有依赖更新
  notify() {
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i]();
    }
  }
}
/**
 * Remove an item from an array
 */
export function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

export default class Deps {
  deps: Map<string, Dep> = new Map();
  queue = new Set<string>();
  addSub = (key: string, cb: Fn) => {
    if (!this.deps.get(key)) {
      this.deps.set(key, new Dep());
    }
    let dep = this.deps.get(key);
    dep.addSub(cb);
  };
  addQueue = (key: string) => {
    this.queue.add(key);
  };

  notify = () => {
    const fnQueue = new Set<Fn>();
    for (let key of this.queue) {
      const deps = this.deps.get(key);
      deps.subs.forEach((sub) => {
        fnQueue.add(sub);
      });
    }
    for (let fn of fnQueue) {
      fn();
    }
  };
}
