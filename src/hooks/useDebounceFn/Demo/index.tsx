import { usePersistFn } from '@/';
import React, { useState } from 'react';
import { useDebounceFn } from 'wwhooks';

export default () => {
  let [count, setCount] = useState<number>(0);
  const [leading, setLeading] = useState(false);
  const [trailing, setTrailing] = useState(true);
  const fn = usePersistFn(() => {
    const v = ++count;
    setCount(v);
  });
  const { run, cancel, flush } = useDebounceFn<() => void>(fn, 500, {
    leading: leading,
    trailing: trailing,
  });
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
        <button type="button" onClick={() => setLeading((v) => !v)}>
          leading : {leading.toString()}
        </button>
        <button type="button" onClick={() => setTrailing((v) => !v)}>
          trailing : {trailing.toString()}
        </button>
      </p>
    </div>
  );
};
