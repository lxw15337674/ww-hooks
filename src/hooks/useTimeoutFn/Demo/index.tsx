/**
 * title: 基础用法
 * desc: 3000ms后执行一次
 */

import React, { useState } from 'react';
import { useTimeoutFn } from 'wwhooks';

export default () => {
  const [state, setState] = useState(1);
  const { cancel } = useTimeoutFn(() => {
    setState((state) => ++state);
  }, 2000);
  const { cancel1 } = useTimeoutFn(() => {
    setState((state) => 10 + state);
  }, 1000);

  return (
    <div>
      <p>
        <button onClick={() => {}}>run</button>
        <button onClick={cancel}>cancel</button>
      </p>
      <p style={{ marginTop: 16 }}> {state} </p>
    </div>
  );
};
