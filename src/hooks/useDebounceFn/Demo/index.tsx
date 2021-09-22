import React, { useState } from 'react';
import { useBoolean, useDebounceFn } from 'wwhooks';

export default () => {
  const [count, setCount] = useState<number>(0);
  const [leading, { toggle }] = useBoolean(true)
  const { run, cancel, flush } = useDebounceFn<() => void>(() => {
    setCount(state => ++state)
  }, 1000, leading)
  return (
    <>
      <p>count : {count} </p>
      <button
        type="button"
        onClick={() => run()}
      >
        add
      </button>
      <button type="button" onClick={() => cancel()} >
        cancel
      </button>
      <button type="button" onClick={() => flush()} >
        flush
      </button>
      <button type="button" onClick={() => toggle()} >
        leading : {leading.toString()}
      </button>
    </>
  );
};
