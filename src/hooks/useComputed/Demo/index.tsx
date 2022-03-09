/**
 * title: 基本用法
 * debug: true
 */
import React from 'react';
import useComputed from '..';

const Test = () => {
  const list = useComputed({
    a: 1,
    b: 2,
    double: (store) => {
      console.log('double');
      return store?.a + store?.b;
    },
    third: (store) => {
      console.log('third');
      return store.a + store.b + store.double;
    },
  });

  return (
    <div>
      <button
        onClick={() => {
          for (let i = 0; i < 100; i++) {
            list.a = i;
            list.b = i;
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
    </div>
  );
};
export default Test;

let a = {
  count: 1,
  get double() {
    console.log('count');
    return this.count * 2;
  },
  increase() {
    this.count += 1;
  },
  decrease() {
    this.count -= 1;
  },
};
