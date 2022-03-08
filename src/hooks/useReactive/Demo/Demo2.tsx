import React, { useEffect, useState } from 'react';
import { useReactive } from 'wwhooks';

const Test = () => {
  let list = useReactive({ a: '' });
  const [count, setCount] = useState(0);
  // 会触发
  useEffect(() => {
    setCount((v) => v + 1);
  }, [list.a]);
  // 不会触发
  useEffect(() => {
    setCount((v) => v + 100);
  }, [list]);
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
