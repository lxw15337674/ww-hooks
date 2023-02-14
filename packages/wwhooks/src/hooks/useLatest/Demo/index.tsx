import React, { useState, useCallback } from 'react';
import { useLatest } from 'wwhooks';

export default () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const latest = useLatest(count2);
  const add = useCallback(() => {
    console.log(count, latest.current);
    setCount(count + 1);
    setCount2(latest.current + 1);
  }, []);

  return (
    <>
      <p>originalCount: {count}</p>
      <p>latestCount: {count2}</p>
      <button onClick={add}>add</button>
    </>
  );
};
