import React, { useState } from 'react';
import { useBoolean, useDebounceFn } from 'wwhooks';
export default () => {
  const [count, setCount] = useState<number>(0);
  const [leading, { toggle: leadingToggle }] = useBoolean(false)
  const [trailing, { toggle: trailingToggle }] = useBoolean(true)
  const { run, cancel, flush } = useDebounceFn<() => void>(() => {
    setCount(state => ++state)
  }, 1000, { leading: leading, trailing: trailing })
  return (
    <p>
      <p>count : {count} </p>
      <p>
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
      </p>
      <p>
        <button type="button" onClick={() => leadingToggle()} >
          leading : {leading.toString()}
        </button>
        <button type="button" onClick={() => trailingToggle()} >
          trailing : {trailing.toString()}
        </button>
      </p>
    </p>
  );
};
