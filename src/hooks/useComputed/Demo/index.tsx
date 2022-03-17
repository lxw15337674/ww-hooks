/**
 * title: 基本用法
 * debug: true
 */
import { Button } from 'antd';
import React from 'react';
import useComputed from '..';

const Test = () => {
  // todo
  // 参数拆分为data,计算属性，watch
  const list = useComputed({
    a: 1,
    b: 2,
    double: (store) => {
      return store?.a + store?.b;
    },
    third: (store) => {
      return store.a + store.b + store.double;
    },
  });

  return (
    <div>
      <button
        onClick={() => {
          for (let i = 0; i < 100; i++) {
            list.a += 1;
            list.b += 1;
          }
        }}
      >
        push
      </button>
      <button
        onClick={() => {
          list.a -= 1;
          list.b -= 1;
        }}
      >
        pop
      </button>
      <div>{JSON.stringify(list)}</div>
      <div>{list.double}</div>
      <div>{list.double}</div>
      <div>{list.third}</div>
      <div>{list.third}</div>
      {new Array(list.third).fill(1).map((_, index) => {
        return <Button key={index}>{index}</Button>;
      })}
    </div>
  );
};
export default Test;

let a = {
  count: 1,
  get double() {
    return this.count * 2;
  },
  increase() {
    this.count += 1;
  },
  decrease() {
    this.count -= 1;
  },
};
