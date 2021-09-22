import { SetStateAction } from './interface';

/**
 * @desc: obj1的keys根据obj2的keys判断
 * 1.obj2的key不存在则取另一个对象的value，
 * 2.另一个对象的keys会被删除。
 * @example
 * params:{a:1,b:2,c:3} ,{a:2,d:4}
 * result:{a:1,d:4}
 */
export const unionKeys = (obj1, obj2): typeof obj2 => {
  const res = {};
  for (let key in obj2) {
    const obj1Value = obj1[key];
    res[key] = obj1Value === undefined ? obj2[key] : obj1Value;
  }
  return res;
};

export const isValue = <T>(state: SetStateAction<T>): state is T => {
  return typeof state !== 'function';
};

export const setState = <T>(v: SetStateAction<T>, prev: T): T => {
  if (isValue<T>(v)) {
    return v;
  }
  return v(prev);
};

//数字转px
export function numToPx(number: number): string {
  if (number) {
    return `${number}px`;
  }
  return '';
}
//px转数字
export function pxToNum(str: string): number {
  if (str) {
    return parseInt(str.slice(0, -2), 10);
  }
  return 0;
}
