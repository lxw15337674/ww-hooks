import React, { useState } from 'react';
import { useIntervalFn } from 'wwhooks';
export default () => {
  const [count, setCount] = useState<number>(0);
  const { start, clear, looping } = useIntervalFn(() => {
    setCount((v) => ++v);
  }, 100);
  return (
    <div>
      <p>count : {count}</p>
      <p>looping:{JSON.stringify(looping)}</p>
      <p>
        <button type="button" onClick={() => start()}>
          start
        </button>
        <button type="button" onClick={() => clear()}>
          clear
        </button>
      </p>
    </div>
  );
};
