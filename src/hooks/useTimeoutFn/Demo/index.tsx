/**
 * title: 基础用法
 * desc: 3000ms后执行一次
 */

import React, { useState } from 'react';
import { useTimeoutFn } from 'wwhooks';

export default () => {
  const [state, setState] = useState(1);
  const plus1 = useTimeoutFn(() => {
    setState((state) => ++state);
  }, 2000);
  const plus = useTimeoutFn(setState, 1000);

  return (
    <div>
      <p>
        <button onClick={plus1.run}>{plus1.waiting ? 'waiting' : 'run'}</button>
        <button onClick={plus1.cancel} disabled={!plus1.waiting}>
          cancel
        </button>
        <button onClick={() => plus.run(10)}>plus10</button>
      </p>
      <p style={{ marginTop: 16 }}> {state} </p>
    </div>
  );
};
