import React, { useState } from 'react';
import { useDebounceFn } from 'wwhooks';

export default () => {
  const [count, setCount] = useState<number>(0);
  const [leading, leadingToggle] = useState(false);
  const [trailing, trailingToggle] = useState(true);
  const [run, { cancel, flush }] = useDebounceFn<() => void>(
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
        <button type="button" onClick={() => leadingToggle((v) => !v)}>
          leading : {leading.toString()}
        </button>
        <button type="button" onClick={() => trailingToggle((v) => !v)}>
          trailing : {trailing.toString()}
        </button>
      </p>
    </div>
  );
};
