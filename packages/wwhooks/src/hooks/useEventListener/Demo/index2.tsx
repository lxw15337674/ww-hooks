/**
 *
 * title: 启用、关闭
 */

import React, { useState, useRef } from 'react';
import { useEventListener } from 'wwhooks';

export default () => {
  const [value, setValue] = useState(0);

  const clickHandler = () => {
    setValue(value + 1);
  };

  const ref = useRef();
  const { run, isRunning, stop } = useEventListener(ref, 'click', clickHandler);

  return (
    <div>
      <p>
        isRunning:{isRunning.toString()}
        <button type="button" onClick={run}>
          run
        </button>
        <button type="button" onClick={stop}>
          stop
        </button>
      </p>

      <button ref={ref} type="button">
        You click {value} times
      </button>
    </div>
  );
};
