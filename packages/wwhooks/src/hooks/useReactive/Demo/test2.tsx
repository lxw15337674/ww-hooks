/**
 * title: 使用useEffect
 * description: 如果需要用useEffect,需要用JSON.stringify包裹
 */
import React, { useEffect, useState } from 'react';
import { useReactive } from 'wwhooks';

const Test = () => {
  let list = useReactive({ a: '' });
  const [count, setCount] = useState(0);
  // 会触发
  useEffect(() => {
    setCount((v) => v + 1);
  }, [list]);
  // 不会触发
  useEffect(() => {
    setCount((v) => v + 100);
  }, [JSON.stringify(list.a)]);
  return (
    <div>
      <input
        onChange={(e) => {
          list.a = e.target.value;
        }}
      />
      <div>{JSON.stringify(list)}</div>
      <div>{count}</div>
    </div>
  );
};
export default Test;
