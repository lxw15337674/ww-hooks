/**
 * title: 测试
 * debug: true
 */
import React, { useEffect, useState } from 'react';
import useReactive from '..';

const Test = () => {
  const list = useReactive({
    a: [1, 2],
    get b() {
      console.log('render');
      return [...this.a, ...this.a];
    },
    test() {
      console.log(123);
    },
  });
  return (
    <div>
      <button onClick={() => list.a.push(list.a.length + 1)}>push</button>
      <button onClick={() => list.a.pop()}>pop</button>
      <div>{JSON.stringify(list)}</div>
      <div>{JSON.stringify(list.b)}</div>
    </div>
  );
};
export default Test;
