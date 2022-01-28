import React, { useState } from 'react';
import { useBoolean, useThrottleFn } from 'wwhooks';
// import { useBoolean, useThrottleFn } from '../../../';

export default () => {
  const [count, setCount] = useState<number>(0);
  const [leading, leadingToggle] = useBoolean(false);
  const [trailing, trailingToggle] = useBoolean(true);
  const { run, cancel, flush } = useThrottleFn<() => void>(
    () => {
      setCount((state) => ++state);
    },
    1000,
    { leading: leading, trailing: trailing },
  );
  return (
    <div>
      <p>count : {count} </p>
      <p>
        <button type="button" onClick={() => run()}>
          add
        </button>
        <button type="button" onClick={() => cancel()}>
          cancel
        </button>
        <button type="button" onClick={() => flush()}>
          flush
        </button>
      </p>
      <p>
        <button type="button" onClick={() => leadingToggle()}>
          leading : {leading.toString()}
        </button>
        <button type="button" onClick={() => trailingToggle()}>
          trailing : {trailing.toString()}
        </button>
      </p>
    </div>
  );
};
