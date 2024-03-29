/**
 * title: 基本用法
 * description:
 */
import React, { useEffect, useState } from 'react';
import { useReactive } from 'wwhooks';

const Test = () => {
  const list = useReactive([1, 2]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((v) => v + 1);
  }, [list.a]);
  return (
    <div>
      <button onClick={() => list.push(list.length + 1)}>push</button>
      <button onClick={() => list.pop()}>pop</button>
      <div>{JSON.stringify(list)}</div>
      <div>{count}</div>
    </div>
  );
};
export default Test;
