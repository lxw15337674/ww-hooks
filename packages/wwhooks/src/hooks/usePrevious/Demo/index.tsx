/**
 * title: 基本用法
 * description: 记录上次的 count 值
 */
import { usePrevious } from 'wwhooks';
import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  return (
    <>
      <div>state: {count}</div>
      <div style={{ marginBottom: 8 }}> previous state: {previous}</div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        increase
      </button>
      <button
        type="button"
        style={{ marginLeft: 8 }}
        onClick={() => setCount((c) => c - 1)}
      >
        decrease
      </button>
    </>
  );
};
