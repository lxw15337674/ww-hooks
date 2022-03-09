/**
 * title: 基本用法
 * debug: true
 */
import React, { useEffect, useState } from 'react';
import { useReactive } from 'wwhooks';

const Test = () => {
  const list = useReactive([1, 2]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((v) => v + 1);
  }, [list.a]);
  console.log('render');
  return (
    <div>
      <button
        onClick={() => {
          list.push(list.length + 1);
          list.push(list.length + 1);
        }}
      >
        push
      </button>
      <button onClick={() => list.pop()}>pop</button>
      <div>{JSON.stringify(list)}</div>
      <div>{count}</div>
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

console.log(a);
a.increase();
console.log(a);
