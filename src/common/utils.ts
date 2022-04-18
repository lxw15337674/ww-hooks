import {
  SetStateAction,
  TargetElement,
  EventListenerOptions,
} from './interface';

// /**
//  * @desc: obj1的keys根据obj2的keys判断
//  * 1.obj2的key不存在则取另一个对象的value，
//  * 2.另一个对象的keys会被删除。
//  * @example
//  * params:{a:1,b:2,c:3} ,{a:2,d:4}
//  * result:{a:1,d:4}
//  */
// export const unionKeys = (obj1, obj2): typeof obj2 => {
//   const res = {};
//   for (let key in obj2) {
//     const obj1Value = obj1[key];
//     res[key] = obj1Value === undefined ? obj2[key] : obj1Value;
//   }
//   return res;
// };

export const isValue = <T>(state: SetStateAction<T>): state is T => {
  return typeof state !== 'function';
};

export const setState = <T>(v: SetStateAction<T>, prev: T): T => {
  if (isValue<T>(v)) {
    return v;
  }
  return v(prev);
};

// 数字转px
export function numToPx(number: number): string {
  if (number) {
    return `${number}px`;
  }
  return '';
}
// px转数字
export function pxToNum(str: string): number {
  if (str) {
    return parseInt(str.slice(0, -2), 10);
  }
  return 0;
}

export function mergeWith(obj, source, customizer) {
  for (let i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      obj[i] = customizer(obj[i], source[i]);
    }
  }
  return obj;
}

export function isNumber(value) {
  return typeof value === 'number';
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

// 判断对象是否相同
export function isEqual(obj1, obj2) {
  // 1.判断是不是引用类型，不是引用
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2;
  }
  // 2.比较是否为同一个内存地址
  if (obj1 === obj2) return true;
  // 3.比较 key 的数量
  const obj1KeysLength = Object.keys(obj1).length;
  const obj2KeysLength = Object.keys(obj2).length;
  if (obj1KeysLength !== obj2KeysLength) return false;
  // 4.比较 value 的值
  for (let key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      const result = isEqual(obj1[key], obj2[key]);
      if (!result) return false;
    }
  }
  return true;
}

// 很费性能，慎重用
export const dataType = (val: any): string => {
  return Object.prototype.toString
    .call(val)
    .replace(/^.{8}(.+)]$/, (m, $1) => $1.toLowerCase());
};

export const mockInt = (minNum, maxNum) => {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
};
