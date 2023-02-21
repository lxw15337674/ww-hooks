/**
 *
 * title: 基本用法
 * desc: |
 *  简单示例
 *
 */
import React, { useRef, useState } from 'react';
import { useClickAway } from 'wwhooks';

const Demo = () => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const { run, isRunning, stop } = useClickAway(ref, () => {
    setCount((v) => ++v);
  });

  return (
    <div>
      <button
        onClick={() => {
          isRunning ? stop() : run();
        }}
      >
        {isRunning ? 'stop' : 'run'}
      </button>
      <button ref={ref} type="button">
        click away count:{count}
      </button>
    </div>
  );
};
export default Demo;
