/**
 * title: 基本用法
 * desc:
 */
import React from 'react';
import { useReactive } from 'wwhooks';

const Test = () => {
  const list = useReactive([1, 2]);
  return (
    <div>
      <button onClick={() => list.push(list.length + 1)}>push</button>
      <button onClick={() => list.pop()}>pop</button>

      <p>
        <div>{list.toString()}</div>
      </p>
    </div>
  );
};
export default Test;
